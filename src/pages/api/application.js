import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const FROM_EMAIL = import.meta.env.RESEND_FROM_EMAIL || 'Bewerbungsformular <bewerbung@heilgendorff.de>';
const TO_EMAIL = 'kanzlei@heilgendorff.de';
const TURNSTILE_SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY;

// Mindestzeit zwischen Laden und Absenden des Formulars — Bots senden meist sofort
const MIN_FILL_TIME_MS = 3000;

async function verifyTurnstile(token, ip) {
  if (!TURNSTILE_SECRET_KEY) {
    // Kein Secret konfiguriert (z.B. lokale Entwicklung ohne .env) — Prüfung überspringen, aber warnen
    console.warn('TURNSTILE_SECRET_KEY nicht gesetzt — Turnstile-Verifizierung wird übersprungen.');
    return true;
  }
  if (!token) return false;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
    });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error('Turnstile-Verifizierung fehlgeschlagen:', err);
    return false;
  }
}

// Rate limiting: max 5 requests per IP per 10 minutes
const rateLimitMap = new Map();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, resetAt: now + RATE_WINDOW_MS };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + RATE_WINDOW_MS;
  }
  entry.count++;
  rateLimitMap.set(ip, entry);
  return entry.count > RATE_LIMIT;
}

// HTML escaping to prevent XSS in email content
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Allowed MIME types for uploads
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25 MB total

export async function POST({ request, clientAddress }) {
  try {
    // Rate limiting
    const ip = clientAddress || 'unknown';
    if (isRateLimited(ip)) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.'
      }), { status: 429, headers: { 'Content-Type': 'application/json' } });
    }

    const formData = await request.formData();

    // Honeypot check
    const honeypot = String(formData.get('website') || '').trim();
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    // Zeitcheck — Formular darf nicht schneller als MIN_FILL_TIME_MS ausgefüllt worden sein
    const formLoadedAt = Number(formData.get('formLoadedAt') || 0);
    if (formLoadedAt && (Date.now() - formLoadedAt) < MIN_FILL_TIME_MS) {
      // Stiller Reject wie beim Honeypot, um Bots keine Rückmeldung zu geben
      return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }

    // Turnstile-Verifizierung
    const turnstileToken = String(formData.get('cf-turnstile-response') || '');
    const turnstileValid = await verifyTurnstile(turnstileToken, ip);
    if (!turnstileValid) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Sicherheitsüberprüfung fehlgeschlagen. Bitte laden Sie die Seite neu und versuchen Sie es erneut.'
      }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // Extract and validate fields
    const name     = String(formData.get('name')     || '').trim();
    const email    = String(formData.get('email')    || '').trim();
    const phone    = String(formData.get('phone')    || '').trim();
    const position = String(formData.get('position') || '').trim();
    const message  = String(formData.get('message')  || 'Keine Nachricht angegeben').trim();
    const referrerURL = String(formData.get('referrerURL') || 'Direkt').trim();

    // Basic field validation
    if (!name || !email || !position) {
      return new Response(JSON.stringify({ success: false, message: 'Pflichtfelder fehlen.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' }
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ success: false, message: 'Ungültige E-Mail-Adresse.' }), {
        status: 400, headers: { 'Content-Type': 'application/json' }
      });
    }

    // File validation
    const cv = formData.get('cv');
    const attachments = formData.getAll('attachments');
    const allFiles = [cv, ...attachments].filter(f => f && f.size > 0);

    let totalSize = 0;
    const resendAttachments = [];

    for (const file of allFiles) {
      if (!ALLOWED_MIME_TYPES.includes(file.type)) {
        return new Response(JSON.stringify({ success: false, message: `Nicht erlaubter Dateityp: ${escapeHtml(file.name)}. Erlaubt: PDF, JPG, PNG, DOCX.` }), {
          status: 400, headers: { 'Content-Type': 'application/json' }
        });
      }
      if (file.size > MAX_FILE_SIZE) {
        return new Response(JSON.stringify({ success: false, message: `Datei zu groß: ${escapeHtml(file.name)}. Maximum: 10 MB.` }), {
          status: 400, headers: { 'Content-Type': 'application/json' }
        });
      }
      totalSize += file.size;
      if (totalSize > MAX_TOTAL_SIZE) {
        return new Response(JSON.stringify({ success: false, message: 'Gesamtgröße der Anhänge überschreitet 25 MB.' }), {
          status: 400, headers: { 'Content-Type': 'application/json' }
        });
      }
      const buffer = await file.arrayBuffer();
      resendAttachments.push({ filename: file.name, content: Buffer.from(buffer) });
    }

    // Send email to Kanzlei
    const kanzleiEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Neue Bewerbung: ${escapeHtml(name)} - ${escapeHtml(position)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #032f9a; border-bottom: 2px solid #032f9a; padding-bottom: 10px;">
            Neue Bewerbung eingegangen
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">E-Mail:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Telefon:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Position:</td>
                <td style="padding: 8px; border-bottom: 1px solid #ddd;">${escapeHtml(position)}</td></tr>
          </table>
          <h3 style="color: #333; margin-top: 20px;">Nachricht</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${escapeHtml(message)}</div>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Eingegangen am: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}<br>
            Referrer: ${escapeHtml(referrerURL)}<br>
            <em>Diese E-Mail wurde automatisch über das Bewerbungsformular auf heilgendorff.de generiert.</em>
          </p>
        </div>`,
      attachments: resendAttachments,
    });

    if (kanzleiEmail.error) throw new Error(kanzleiEmail.error.message);

    // Confirmation to applicant
    await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: 'Bewerbungseingang bestätigt - Heilgendorff Steuerberatung',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #032f9a;">Vielen Dank für Ihre Bewerbung!</h2>
          <p>Sehr geehrte/r ${escapeHtml(name)},</p>
          <p>wir haben Ihre Bewerbung für die Position <strong>"${escapeHtml(position)}"</strong> erhalten und werden diese zeitnah prüfen.</p>
          <p>Mit freundlichen Grüßen<br>Ihr Team der Heilgendorff Steuerberatung</p>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Heilgendorff Steuerberatung · Unter den Eichen 7 · 65195 Wiesbaden<br>
            Tel.: +49 (0) 611 39 132 00 · kanzlei@heilgendorff.de
          </p>
        </div>`,
    });

    return new Response(JSON.stringify({
      success: true,
      message: 'Ihre Bewerbung wurde erfolgreich übermittelt. Sie erhalten in Kürze eine Bestätigungs-E-Mail.'
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error('Fehler beim Verarbeiten der Bewerbung:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Es gab einen Fehler. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt unter kanzlei@heilgendorff.de'
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
