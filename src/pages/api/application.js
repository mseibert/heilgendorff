import { Resend } from 'resend';

// Diese Route als Serverless Function deployen, nicht statisch pre-rendern
export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Resend erfordert eine verifizierte Domain. Bis heilgendorff.de verifiziert ist,
// verwenden wir die Resend-Test-Domain. Nach Verifizierung auf heilgendorff.de umstellen.
const FROM_EMAIL = import.meta.env.RESEND_FROM_EMAIL || 'Bewerbungsformular <onboarding@resend.dev>';
const TO_EMAIL = import.meta.env.RESEND_TO_EMAIL || 'kanzlei@heilgendorff.de';

export async function POST({ request }) {
  try {
    const formData = await request.formData();

    // Formulardaten extrahieren
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('position');
    const message = formData.get('message') || 'Keine Nachricht angegeben';
    const cv = formData.get('cv');
    const attachments = formData.getAll('attachments');
    const referrerURL = formData.get('referrerURL');

    // Anhänge für Resend vorbereiten
    const resendAttachments = [];

    // CV hinzufügen
    if (cv && cv.size > 0) {
      const cvBuffer = await cv.arrayBuffer();
      resendAttachments.push({
        filename: cv.name,
        content: Buffer.from(cvBuffer),
      });
    }

    // Weitere Anhänge hinzufügen
    for (const attachment of attachments) {
      if (attachment && attachment.size > 0) {
        const buffer = await attachment.arrayBuffer();
        resendAttachments.push({
          filename: attachment.name,
          content: Buffer.from(buffer),
        });
      }
    }

    // E-Mail an Kanzlei senden
    const kanzleiEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Neue Bewerbung: ${name} - ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #032f9a; border-bottom: 2px solid #032f9a; padding-bottom: 10px;">
            Neue Bewerbung eingegangen
          </h2>

          <h3 style="color: #333;">Bewerberdaten</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">E-Mail:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Telefon:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Position:</td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${position}</td>
            </tr>
          </table>

          <h3 style="color: #333; margin-top: 20px;">Nachricht / Motivationsschreiben</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
${message}
          </div>

          <h3 style="color: #333; margin-top: 20px;">Anhänge</h3>
          <p><strong>Lebenslauf:</strong> ${cv && cv.size > 0 ? cv.name : 'Nicht hochgeladen'}</p>
          <p><strong>Weitere Dokumente:</strong> ${attachments.filter(a => a && a.size > 0).length > 0 ? attachments.filter(a => a && a.size > 0).map(f => f.name).join(', ') : 'Keine'}</p>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            Eingegangen am: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}<br>
            Referrer: ${referrerURL || 'Direkt'}<br>
            <em>Diese E-Mail wurde automatisch über das Bewerbungsformular auf heilgendorff.de generiert.</em>
          </p>
        </div>
      `,
      attachments: resendAttachments,
    });

    if (kanzleiEmail.error) {
      console.error('Fehler beim Senden an Kanzlei:', kanzleiEmail.error);
      throw new Error(kanzleiEmail.error.message);
    }

    // Bestätigungs-E-Mail an Bewerber senden
    const confirmationEmail = await resend.emails.send({
      from: FROM_EMAIL,
      to: [email],
      subject: 'Bewerbungseingang bestätigt - Heilgendorff Steuerberatung',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #032f9a;">Vielen Dank für Ihre Bewerbung!</h2>

          <p>Sehr geehrte/r ${name},</p>

          <p>wir haben Ihre Bewerbung für die Position <strong>"${position}"</strong> erhalten und werden diese zeitnah prüfen.</p>

          <h3 style="color: #333; margin-top: 20px;">Ihre Bewerbungsunterlagen:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>E-Mail:</strong> ${email}</li>
            <li><strong>Telefon:</strong> ${phone}</li>
            <li><strong>Position:</strong> ${position}</li>
            <li><strong>Lebenslauf:</strong> ${cv && cv.size > 0 ? cv.name : 'Nicht hochgeladen'}</li>
            <li><strong>Weitere Dokumente:</strong> ${attachments.filter(a => a && a.size > 0).length > 0 ? attachments.filter(a => a && a.size > 0).map(f => f.name).join(', ') : 'Keine'}</li>
          </ul>

          <p>Wir werden uns bei Ihnen melden, sobald wir Ihre Unterlagen geprüft haben.</p>

          <p>Mit freundlichen Grüßen<br>
          Ihr Team der Heilgendorff Steuerberatung</p>

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            <strong>Heilgendorff Steuerberatung</strong><br>
            Unter den Eichen 7 (Gebäude F)<br>
            65195 Wiesbaden<br>
            Tel.: +49 (0) 611 39 132 00<br>
            E-Mail: kanzlei@heilgendorff.de<br>
            Web: www.heilgendorff.de
          </p>
        </div>
      `,
    });

    if (confirmationEmail.error) {
      // Nur loggen, aber nicht fehlschlagen - die Bewerbung kam ja an
      console.error('Fehler beim Senden der Bestätigung:', confirmationEmail.error);
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Ihre Bewerbung wurde erfolgreich übermittelt. Sie erhalten in Kürze eine Bestätigungs-E-Mail.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Fehler beim Verarbeiten der Bewerbung:', error);

    return new Response(JSON.stringify({
      success: false,
      message: 'Es gab einen Fehler beim Senden Ihrer Bewerbung. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt unter kanzlei@heilgendorff.de'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
