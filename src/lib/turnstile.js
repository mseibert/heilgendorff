// Format der Cloudflare-Turnstile-Schlüssel — einzige Quelle für diese Regel.
// README und .env.template verweisen hierher, statt das Format nachzuerzählen.
const SITE_KEY_PATTERN = /^[0-9]x[A-Za-z0-9]{22}$/;

export function isValidSiteKey(value) {
  return SITE_KEY_PATTERN.test(value ?? '');
}
