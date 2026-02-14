type Consent = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp?: string;
};

class CookieBanner {
  banner: HTMLElement | null = null;
  modal: HTMLElement | null = null;
  previousFocus: Element | null = null;
  boundHandleKeydown: (e: KeyboardEvent) => void;
  boundTrapFocus: (e: KeyboardEvent) => void;

  constructor() {
    this.banner = document.getElementById('cookie-banner');
    this.modal = document.getElementById('cookie-settings-modal');
    this.boundHandleKeydown = this.handleKeydown.bind(this);
    this.boundTrapFocus = this.trapFocus.bind(this);
    this.init();
  }

  handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.modal?.style.display === 'flex') {
      this.hideModal();
    }
  }

  trapFocus(e: KeyboardEvent) {
    if (e.key !== 'Tab' || !this.modal) return;
    const focusable = [...this.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(el => !el.hasAttribute('disabled'));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); (last instanceof HTMLElement) && last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); (first instanceof HTMLElement) && first.focus(); }
    }
  }

  init() {
    if (!this.hasConsent()) {
      this.showBanner();
    }
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.getElementById('accept-all-cookies')?.addEventListener('click', () => this.acceptAllCookies());
    document.getElementById('accept-necessary-cookies')?.addEventListener('click', () => this.acceptNecessaryOnly());
    document.getElementById('cookie-settings')?.addEventListener('click', () => this.showModal());
    document.getElementById('close-cookie-modal')?.addEventListener('click', () => this.hideModal());
    document.getElementById('save-cookie-preferences')?.addEventListener('click', () => this.savePreferences());
    document.getElementById('accept-all-modal')?.addEventListener('click', () => this.acceptAllCookies());

    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) this.hideModal();
    });
  }

  hasConsent() {
    return localStorage.getItem('cookie-consent') !== null;
  }

  showBanner() {
    if (!this.banner) return;
    this.banner.style.display = 'block';
    this.banner.setAttribute('aria-hidden', 'false');
    setTimeout(() => this.banner?.classList.add('show'), 100);
  }

  hideBanner() {
    if (!this.banner) return;
    this.banner.classList.remove('show');
    setTimeout(() => {
      if (this.banner) {
        this.banner.style.display = 'none';
        this.banner.setAttribute('aria-hidden', 'true');
      }
    }, 300);
  }

  showModal() {
    if (!this.modal) return;
    const consent = this.getConsent();
    const functionalEl = document.getElementById('functional-cookies');
    const analyticsEl = document.getElementById('analytics-cookies');
    const marketingEl = document.getElementById('marketing-cookies');
    if (functionalEl instanceof HTMLInputElement) functionalEl.checked = consent.functional;
    if (analyticsEl instanceof HTMLInputElement) analyticsEl.checked = consent.analytics;
    if (marketingEl instanceof HTMLInputElement) marketingEl.checked = consent.marketing;
    this.modal.style.display = 'flex';
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    this.previousFocus = document.activeElement;
    document.addEventListener('keydown', this.boundHandleKeydown);
    this.modal.addEventListener('keydown', this.boundTrapFocus);
    const firstFocusable = this.modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable instanceof HTMLElement) firstFocusable.focus();
  }

  hideModal() {
    if (!this.modal) return;
    this.modal.style.display = 'none';
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', this.boundHandleKeydown);
    this.modal.removeEventListener('keydown', this.boundTrapFocus);
    const prev = this.previousFocus;
    if (prev instanceof HTMLElement && prev.focus) prev.focus();
  }

  acceptAllCookies() {
    this.saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    });
    this.hideBanner();
    this.hideModal();
    this.loadScripts();
  }

  acceptNecessaryOnly() {
    this.saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    });
    this.hideBanner();
    this.hideModal();
  }

  savePreferences() {
    const functionalEl = document.getElementById('functional-cookies');
    const analyticsEl = document.getElementById('analytics-cookies');
    const marketingEl = document.getElementById('marketing-cookies');
    this.saveConsent({
      necessary: true,
      functional: (functionalEl instanceof HTMLInputElement && functionalEl.checked) || false,
      analytics: (analyticsEl instanceof HTMLInputElement && analyticsEl.checked) || false,
      marketing: (marketingEl instanceof HTMLInputElement && marketingEl.checked) || false,
      timestamp: new Date().toISOString()
    });
    this.hideBanner();
    this.hideModal();
    this.loadScripts();
  }

  saveConsent(consent: Consent) {
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `cookie-consent=${JSON.stringify(consent)}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`;
  }

  loadScripts() {
    const consent = this.getConsent();
    if (consent.analytics) this.loadGoogleAnalytics();
    if (consent.marketing) {
      // Load marketing scripts here
    }
  }

  loadGoogleAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);

    const w = window as Window & { dataLayer?: unknown[] };
    const dataLayer = (w.dataLayer = w.dataLayer || []);
    const gtag = (...args: unknown[]) => { dataLayer.push(args); };
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID', {
      anonymize_ip: true,
      cookie_flags: 'SameSite=Strict;Secure'
    });
  }

  getConsent(): Consent {
    const stored = localStorage.getItem('cookie-consent');
    if (stored) return JSON.parse(stored);
    return {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CookieBanner();
});
