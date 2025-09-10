// Language Switcher Script
class LanguageSwitcher {
  constructor() {
    this.currentLanguage = this.getStoredLanguage() || 'de';
    this.translations = null;
    this.init();
  }

  async init() {
    // Load translations
    try {
      const response = await fetch('/src/locales.ts');
      const text = await response.text();
      // This is a simplified approach - in a real implementation you'd want to properly parse the TypeScript
      // For now, we'll use a simpler approach with inline translations
      this.translations = this.getInlineTranslations();
    } catch (error) {
      console.error('Error loading translations:', error);
      this.translations = this.getInlineTranslations();
    }

    this.setupEventListeners();
    this.updateLanguage(this.currentLanguage);
  }

  getInlineTranslations() {
    return {
      de: {
        home: "Home",
        clientArea: "Mandantenbereich",
        about: "Über Uns",
        meetTheTeam: "Meet the Team",
        references: "Referenzen",
        ourTraining: "Unsere Weiterbildungen",
        services: "Leistungen",
        individuals: "Privatpersonen",
        entrepreneurs: "Unternehmer",
        career: "Karriere",
        contact: "Kontakt",
        news: "Aktuelles",
        datevNews: "Datev News",
        downloads: "Downloads",
        taxVideos: "Steuererklärvideos",
        siteTitle: "Steuerbüro Heilgendorff",
        siteSubtitle: "Ihr zuverlässiger Partner aus Wiesbaden",
        current: "Aktuelles",
        coronaRefunds: "Corona Sofortzurückzahlungen",
        coronaText: "Informieren Sie sich über die aktuellen Regelungen zu Corona Sofortzurückzahlungen. Wir unterstützen Sie bei der korrekten Beantragung und Abwicklung aller notwendigen Formalitäten.",
        learnMore: "Mehr dazu",
        careerSection: "Karriere",
        careerTitle: "Bewerbung und Karriere",
        careerText: "Werden Sie Teil unseres Teams! Wir suchen engagierte Steuerberater und Fachkräfte, die gemeinsam mit uns die Zukunft der Steuerberatung gestalten möchten.",
        toCareerPage: "Zur Karriere-Seite",
        digital: "Digital",
        digitalText: "Papierlos glücklich und von überall zu erreichen: Auch von der Ferne aus läuft die Kommunikation mit uns tadellos.",
        learnMoreAbout: "Mehr erfahren",
        international: "International",
        internationalText: "Wir beraten Sie in allen betriebswirtschaftlichen und steuerrechtlichen Fragen zum In- und Ausland",
        qualified: "Qualifiziert",
        qualifiedText: "Durch unsere stetige Teilnahme an zahlreichen Fortbildungen sind wir immer auf dem neuesten Stand.",
        aboutTitle: "Über uns",
        aboutSubtitle: "Wir lieben es zu arbeiten & wir lieben, wo wir arbeiten",
        aboutText1: "Wir beraten Sie in allen betriebswirtschaftlichen und steuerrechtlichen Fragen. Unsere Fachgebiete sind die Steuererklärungsberatung, die Steuerdurchsetzungsberatung und die gestaltende Steuerberatung.",
        aboutText2: "Steuerbüro Heilgendorff bietet seinen Mandanten zusätzlich den Zugriff auf den Terminalserver der Kanzlei, um die Kommunikation so einfach und komfortabel wie möglich zu gestalten.",
        aboutText3: "Unsere Erfahrung mit unserem branchenübergreifenden Leistungspektrum ermöglicht es uns, schnell und effizient Ihr Anliegen zu bearbeiten.",
        founderTitle: "Burghard Heilgendorff, Kanzleiinhaber",
        founderText: "Die Begleitung eines Unternehmens vom Startup über alle Unternehmensphasen hinweg bietet für mich die größte Herausforderung. Der Mandant wird betreut von der Unternehmensgründung, dem Vermögensaufbau bis zur Altersabsicherung und erbschaftsteuerlichen Gestaltung",
        languages: "Unser Sprachenrepertoire",
        german: "Deutsch",
        english: "Englisch",
        french: "Französisch",
        teamText: "Unser Team stellt sich zusammen aus Steuerberatern, Steuerfachangestellten, Steuerfachwirten, Betriebswirten und Finanz- und Lohnbuchhaltern sowie Auszubildenden und studentischen Hilfskräften. Zusätzlich unterstützen wir unsere Angestellten, Auszubildenden und Studenten, indem wir zahlreiche Fortbildungsmaßnahmen bieten und ein duales Studium ermöglichen.",
        clientAreaTitle: "Mandantenbereich",
        clientAreaSubtitle: "Ihr digitaler Zugang zu unseren Dienstleistungen",
        kanzleiDrive: "Kanzlei Drive",
        kanzleiDriveText: "Für die digitale Zusammenarbeit mit unseren Mandanten setzen wir auf Kanzlei Drive – eine sichere und benutzerfreundliche Plattform zum Austausch von Unterlagen und Informationen.",
        loginText: "Über den folgenden Link gelangen Sie direkt zur Anmeldung:",
        loginButton: "👉 Jetzt bei Kanzlei Drive anmelden",
        kanzleiDriveText2: "Mit Kanzlei Drive haben Sie jederzeit Zugriff auf Ihre Dokumente – schnell, geschützt und zuverlässig.",
        navigation: "Navigation",
        ourCompany: "Unser Unternehmen",
        privacy: "Datenschutz",
        imprint: "Impressum",
        cookiePolicy: "Cookie-Richtlinie (EU)",
        contactInfo: "Kontakt",
        phone: "Telefon: +49 (0) 611 391320",
        email: "E-Mail: kontakt@heilgendorff.de",
        address: "Adresse: Unter den Eichen 7F, 65195 Wiesbaden",
        certifications: "Zertifizierungen",
        copyright: "Alle Rechte vorbehalten."
      },
      en: {
        home: "Home",
        clientArea: "Client Area",
        about: "About Us",
        meetTheTeam: "Meet the Team",
        references: "References",
        ourTraining: "Our Training",
        services: "Services",
        individuals: "Individuals",
        entrepreneurs: "Entrepreneurs",
        career: "Career",
        contact: "Contact",
        news: "News",
        datevNews: "Datev News",
        downloads: "Downloads",
        taxVideos: "Tax Explanation Videos",
        siteTitle: "Heilgendorff Tax Office",
        siteSubtitle: "Your reliable partner from Wiesbaden",
        current: "Current",
        coronaRefunds: "Corona Emergency Refunds",
        coronaText: "Find out about the current regulations for Corona emergency refunds. We support you with the correct application and processing of all necessary formalities.",
        learnMore: "Learn more",
        careerSection: "Career",
        careerTitle: "Application and Career",
        careerText: "Become part of our team! We are looking for committed tax advisors and specialists who want to shape the future of tax consulting together with us.",
        toCareerPage: "To Career Page",
        digital: "Digital",
        digitalText: "Paperless and happy, reachable from anywhere: Even from a distance, communication with us runs flawlessly.",
        learnMoreAbout: "Learn more",
        international: "International",
        internationalText: "We advise you on all business and tax law questions for domestic and international matters",
        qualified: "Qualified",
        qualifiedText: "Through our continuous participation in numerous training courses, we are always up to date.",
        aboutTitle: "About us",
        aboutSubtitle: "We love to work & we love where we work",
        aboutText1: "We advise you on all business and tax law questions. Our areas of expertise are tax return consulting, tax enforcement consulting and tax planning consulting.",
        aboutText2: "Heilgendorff Tax Office offers its clients additional access to the law firm's terminal server to make communication as simple and comfortable as possible.",
        aboutText3: "Our experience with our cross-industry range of services enables us to process your concerns quickly and efficiently.",
        founderTitle: "Burghard Heilgendorff, Law Firm Owner",
        founderText: "Accompanying a company from startup through all company phases offers me the greatest challenge. The client is supported from company formation, asset building to retirement planning and inheritance tax structuring",
        languages: "Our Language Repertoire",
        german: "German",
        english: "English",
        french: "French",
        teamText: "Our team consists of tax advisors, tax assistants, tax specialists, business economists and financial and payroll accountants as well as trainees and student assistants. In addition, we support our employees, trainees and students by offering numerous training measures and enabling dual studies.",
        clientAreaTitle: "Client Area",
        clientAreaSubtitle: "Your digital access to our services",
        kanzleiDrive: "Kanzlei Drive",
        kanzleiDriveText: "For digital collaboration with our clients, we rely on Kanzlei Drive – a secure and user-friendly platform for exchanging documents and information.",
        loginText: "Via the following link you can log in directly:",
        loginButton: "👉 Log in to Kanzlei Drive now",
        kanzleiDriveText2: "With Kanzlei Drive you have access to your documents at any time – fast, secure and reliable.",
        navigation: "Navigation",
        ourCompany: "Our Company",
        privacy: "Privacy",
        imprint: "Imprint",
        cookiePolicy: "Cookie Policy (EU)",
        contactInfo: "Contact",
        phone: "Phone: +49 (0) 611 391320",
        email: "Email: kontakt@heilgendorff.de",
        address: "Address: Unter den Eichen 7F, 65195 Wiesbaden",
        certifications: "Certifications",
        copyright: "All rights reserved."
      }
    };
  }

  setupEventListeners() {
    const deButton = document.querySelector('.lang-button[data-lang="de"]');
    const enButton = document.querySelector('.lang-button[data-lang="en"]');
    
    if (deButton) {
      deButton.addEventListener('click', () => this.switchLanguage('de'));
    }
    
    if (enButton) {
      enButton.addEventListener('click', () => this.switchLanguage('en'));
    }
  }

  switchLanguage(lang) {
    this.currentLanguage = lang;
    this.storeLanguage(lang);
    this.updateLanguage(lang);
  }

  updateLanguage(lang) {
    if (!this.translations || !this.translations[lang]) return;

    const t = this.translations[lang];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (t[key]) {
        element.textContent = t[key];
      }
    });

    // Update language buttons
    document.querySelectorAll('.lang-button').forEach(button => {
      button.classList.remove('active');
    });
    
    const activeButton = document.querySelector(`.lang-button[data-lang="${lang}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }

  getStoredLanguage() {
    return localStorage.getItem('language') || 'de';
  }

  storeLanguage(lang) {
    localStorage.setItem('language', lang);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LanguageSwitcher();
});

