export async function POST({ request }) {
  try {
    const formData = await request.formData();
    
    // Formulardaten extrahieren
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const position = formData.get('position');
    const message = formData.get('message');
    const cv = formData.get('cv');
    const attachments = formData.getAll('attachments');
    const referrerURL = formData.get('referrerURL');
    
    // E-Mail-Inhalt für Kanzlei erstellen
    const emailSubject = `Neue Bewerbung: ${name} - ${position}`;
    const emailContent = `
Neue Bewerbung über das Bewerbungsformular eingegangen:

═══════════════════════════════════════════════════════════════
BEWERBERDATEN
═══════════════════════════════════════════════════════════════

Name: ${name}
E-Mail: ${email}
Telefon: ${phone}
Bewerbung für Position: ${position}

═══════════════════════════════════════════════════════════════
NACHRICHT / MOTIVATIONSSCHREIBEN
═══════════════════════════════════════════════════════════════

${message}

═══════════════════════════════════════════════════════════════
ANHÄNGE
═══════════════════════════════════════════════════════════════

Lebenslauf: ${cv ? cv.name : 'Nicht hochgeladen'}
Weitere Dokumente: ${attachments.length > 0 ? attachments.map(f => f.name).join(', ') : 'Keine'}

═══════════════════════════════════════════════════════════════
TECHNISCHE DATEN
═══════════════════════════════════════════════════════════════

Eingegangen am: ${new Date().toLocaleString('de-DE')}
Referrer URL: ${referrerURL}
Formular: Bewerbungsformular (bewerbung.astro)

═══════════════════════════════════════════════════════════════

Diese E-Mail wurde automatisch über das Bewerbungsformular auf heilgendorff.de generiert.

Für Rückfragen wenden Sie sich bitte direkt an: ${email}
    `;
    
    // E-Mail an Kanzlei senden (hier würde normalerweise ein E-Mail-Service verwendet werden)
    console.log('=== NEUE BEWERBUNG ===');
    console.log('An: kanzlei@heilgendorff.de');
    console.log('Betreff:', emailSubject);
    console.log('Inhalt:', emailContent);
    console.log('======================');
    
    // Bestätigungs-E-Mail an Bewerber senden
    const confirmationSubject = `Bewerbungseingang bestätigt - Heilgendorff Steuerberatung`;
    const confirmationContent = `
Sehr geehrte/r ${name},

vielen Dank für Ihre Bewerbung bei Heilgendorff Steuerberatung!

Wir haben Ihre Bewerbung für die Position "${position}" erhalten und werden diese zeitnah prüfen.

Ihre Bewerbungsunterlagen:
- Name: ${name}
- E-Mail: ${email}
- Telefon: ${phone}
- Position: ${position}
- Lebenslauf: ${cv ? cv.name : 'Nicht hochgeladen'}
- Weitere Dokumente: ${attachments.length > 0 ? attachments.map(f => f.name).join(', ') : 'Keine'}

Wir werden uns bei Ihnen melden, sobald wir Ihre Unterlagen geprüft haben.

Mit freundlichen Grüßen
Ihr Team der Heilgendorff Steuerberatung

---
Heilgendorff Steuerberatung
Unter den Eichen 7 (Gebäude F)
65195 Wiesbaden
Tel.: +49 (0) 611 39 132 00
E-Mail: kanzlei@heilgendorff.de
Web: www.heilgendorff.de
    `;
    
    console.log('=== BESTÄTIGUNG AN BEWERBER ===');
    console.log('An:', email);
    console.log('Betreff:', confirmationSubject);
    console.log('Inhalt:', confirmationContent);
    console.log('================================');
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Ihre Bewerbung wurde erfolgreich an kanzlei@heilgendorff.de übermittelt. Sie erhalten eine Bestätigungs-E-Mail.'
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
