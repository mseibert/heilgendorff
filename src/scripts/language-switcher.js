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
        careerTitle: "Bewerbung",
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
        copyright: "Alle Rechte vorbehalten.",
        // Homepage specific translations
        heroTitle: "Steuerbüro Heilgendorff",
        heroSubtitle: "Ihr zuverlässiger Partner aus Wiesbaden",
        uniqueTitle: "Was uns einzigartig macht",
        uniqueText: "Wir sind eine moderne Steuerberatungskanzlei mit über 20 Jahren Erfahrung. Unser Team aus qualifizierten Steuerberatern und Fachkräften steht Ihnen mit Kompetenz und Leidenschaft zur Seite.",
        testimonialsTitle: "Unsere zufriedenen Mandanten",
        testimonial1: "Seit Jahren vertraue ich dem Steuerbüro Heilgendorff meine Steuerangelegenheiten an. Die Beratung ist stets kompetent und die Abwicklung sehr professionell.",
        testimonial1Author: "Martin Seibert, Seibert Group GmbH",
        testimonial2: "Das Team von Heilgendorff hat uns bei der Unternehmensgründung hervorragend unterstützt. Besonders die digitale Zusammenarbeit funktioniert einwandfrei.",
        testimonial2Author: "Mario Becke, Becke Consulting",
        testimonial3: "Mit dem Steuerbüro Heilgendorff haben wir einen sehr zuverlässigen, kompetenten und pragmatischen Partner zur Seite, der es uns als junges Unternehmen ermöglicht uns auf unsere Produkte und Kunden zu konzentrieren.",
        testimonial3Author: "Adil Nasri, Junovi UG",
        // Career page translations
        careerHeroTitle: "Karriere",
        careerHeroSubtitle: "Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der Steuerberatung mit",
        careerIntro: "Wir sind eine modern eingerichtete Kanzlei mit 10 Mitarbeitern und beraten Mandanten aus allen Branchen. Unser Team stellt sich zusammen aus Steuerberatern, Steuerfachangestellten, Steuerfachwirten, Betriebswirten und Finanz- und Lohnbuchhaltern sowie Auszubildenden und studentischen Hilfskräften.",
        careerIntro2: "Dabei nutzen wir die DATEV-Software und modernste Kommunikationsmittel. Da wir große Unterstützer der papierlosen Bürokratie sind, ist bei unseren Mandanten DATEV Unternehmen Online Standard.",
        careerHighlights: "Besondere Schwerpunkte legen wir auf:",
        careerHighlight1: "die Weiterbildung unserer Mitarbeiter",
        careerHighlight2: "ein gutes Arbeitsklima",
        careerHighlight3: "die Möglichkeit zur Selbstverwirklichung",
        careerHighlight4: "Aufstiegsmöglichkeiten",
        careerHighlight5: "die Digitalisierung unseres Unternehmens",
        jobOpenings: "Wir stellen ein:",
        applyNow: "Jetzt bewerben",
        // About page translations
        aboutHeroTitle: "Über uns",
        aboutHeroSubtitle: "Erfahren Sie mehr über unser Team, unsere Werte und unsere Leidenschaft für die Steuerberatung",
        // Contact page translations
        contactHeroTitle: "Kontakt",
        contactHeroSubtitle: "Kontaktieren Sie uns für eine persönliche Beratung",
        // Services page translations
        servicesHeroTitle: "Leistungen",
        servicesHeroSubtitle: "Umfassende Steuerberatung für Privatpersonen und Unternehmen",
        // News page translations
        newsHeroTitle: "Aktuelles",
        newsHeroSubtitle: "Aktuelle Informationen und Neuigkeiten aus der Steuerberatung"
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
        careerTitle: "Application",
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
        copyright: "All rights reserved.",
        // Homepage specific translations
        heroTitle: "Heilgendorff Tax Office",
        heroSubtitle: "Your reliable partner from Wiesbaden",
        uniqueTitle: "What makes us unique",
        uniqueText: "We are a modern tax consulting firm with over 20 years of experience. Our team of qualified tax advisors and specialists is at your side with competence and passion.",
        testimonialsTitle: "Our satisfied clients",
        testimonial1: "For years I have trusted Heilgendorff Tax Office with my tax matters. The advice is always competent and the processing very professional.",
        testimonial1Author: "Martin Seibert, Seibert Group GmbH",
        testimonial2: "The Heilgendorff team supported us excellently in setting up the company. The digital collaboration works particularly well.",
        testimonial2Author: "Mario Becke, Becke Consulting",
        testimonial3: "With Heilgendorff Tax Office we have a very reliable, competent and pragmatic partner at our side who enables us as a young company to focus on our products and customers.",
        testimonial3Author: "Adil Nasri, Junovi UG",
        // Career page translations
        careerHeroTitle: "Career",
        careerHeroSubtitle: "Become part of our team and help shape the future of tax consulting",
        careerIntro: "We are a modern law firm with 10 employees and advise clients from all industries. Our team consists of tax advisors, tax assistants, tax specialists, business economists and financial and payroll accountants as well as trainees and student assistants.",
        careerIntro2: "We use DATEV software and the most modern communication tools. Since we are big supporters of paperless bureaucracy, DATEV Unternehmen Online is standard for our clients.",
        careerHighlights: "We place particular emphasis on:",
        careerHighlight1: "the further training of our employees",
        careerHighlight2: "a good working atmosphere",
        careerHighlight3: "the possibility for self-realization",
        careerHighlight4: "career opportunities",
        careerHighlight5: "the digitalization of our company",
        jobOpenings: "We are hiring:",
        applyNow: "Apply now",
        // About page translations
        aboutHeroTitle: "About us",
        aboutHeroSubtitle: "Learn more about our team, our values and our passion for tax consulting",
        // Contact page translations
        contactHeroTitle: "Contact",
        contactHeroSubtitle: "Contact us for personal advice",
        // Services page translations
        servicesHeroTitle: "Services",
        servicesHeroSubtitle: "Comprehensive tax consulting for individuals and companies",
        // News page translations
        newsHeroTitle: "News",
        newsHeroSubtitle: "Current information and news from tax consulting"
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

