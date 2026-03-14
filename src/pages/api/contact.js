import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const FROM_EMAIL = import.meta.env.RESEND_FROM_EMAIL || 'Kontaktformular <onboarding@resend.dev>';
const TO_EMAIL = 'kontakt@heilgendorff.de';

export async function POST({ request }) {
  try {
    const formData = await request.formData();

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const message = String(formData.get('message') || 'Keine Nachricht angegeben').trim();
    const referrerURL = String(formData.get('referrerURL') || 'Direkt');

    const escapeHtml = (s) => String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

    // E-Mail an Kanzlei senden
    const contactEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #032f9a; border-bottom: 2px solid #032f9a; padding-bottom: 10px;">
            Neue Kontaktanfrage
          </h2>

          <h3 style="color: #333;">Kontaktdaten</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">E-Mail:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Telefon:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td>
            </tr>
          </table>

          <h3 style="color: #333; margin-top: 20px;">Nachricht</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${escapeHtml(message)}</div>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Eingegangen am: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}<br>
            Referrer: ${referrerURL || 'Direkt'}<br>
            <em>Diese E-Mail wurde automatisch über das Kontaktformular auf heilgendorff.de generiert.</em>
          </p>
        </div>
      `,
    });

    if (contactEmail.error) {
      console.error('Fehler beim Senden der Kontaktanfrage:', contactEmail.error);
      throw new Error(contactEmail.error.message);
    }

    // Bestätigungs-E-Mail an Absender senden
    const confirmationEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: 'Ihre Anfrage wurde übermittelt - Heilgendorff Steuerberatung',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #032f9a;">Vielen Dank für Ihre Nachricht!</h2>

          <p>Sehr geehrte/r ${escapeHtml(name)},</p>

          <p>wir haben Ihre Anfrage erhalten und werden uns zeitnah bei Ihnen melden.</p>

          <h3 style="color: #333; margin-top: 20px;">Ihre Nachricht:</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${escapeHtml(message)}</div>

          <p>Mit freundlichen Grüßen<br>
          Ihr Team der Heilgendorff Steuerberatung</p>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            <strong>Heilgendorff Steuerberatung</strong><br>
            Unter den Eichen 7 (Gebäude F)<br>
            65195 Wiesbaden<br>
            Tel.: +49 (0) 611 39 132 00<br>
            E-Mail: kontakt@heilgendorff.de<br>
            Web: www.heilgendorff.de
          </p>
        </div>
      `,
    });

    if (confirmationEmail.error) {
      console.error('Fehler beim Senden der Bestätigung:', confirmationEmail.error);
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Ihre Nachricht wurde erfolgreich übermittelt. Sie erhalten in Kürze eine Bestätigungs-E-Mail.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Fehler beim Verarbeiten der Kontaktanfrage:', error);

    return new Response(JSON.stringify({
      success: false,
      message: 'Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt unter kontakt@heilgendorff.de'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
