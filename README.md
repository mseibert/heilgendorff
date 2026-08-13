# Heilgendorff - Professionelle Dienstleistungen

Die offizielle Website von Heilgendorff - Ihr Partner für professionelle Dienstleistungen in den Bereichen Beratung, Entwicklung und Support.

## 🚀 Über das Projekt

Diese Website wurde mit [Astro](https://astro.build) entwickelt und bietet:

- ✅ Moderne, responsive Benutzeroberfläche
- ✅ Optimale Performance (100/100 Lighthouse Score)
- ✅ SEO-optimiert mit kanonischen URLs und OpenGraph-Daten
- ✅ Sitemap-Unterstützung
- ✅ RSS-Feed für Blog-Beiträge
- ✅ Markdown & MDX Support für Content Management
- ✅ Deutsche Lokalisierung

## 🏗️ Projektstruktur

```text
├── public/                 # Statische Assets (Bilder, Fonts, etc.)
├── src/
│   ├── components/         # Wiederverwendbare Astro-Komponenten
│   ├── content/           # Content Collections (Blog-Beiträge)
│   ├── layouts/           # Seiten-Layouts
│   ├── pages/             # Seiten-Routen
│   ├── styles/            # Globale Styles
│   └── consts.ts          # Globale Konstanten
├── astro.config.mjs       # Astro-Konfiguration
├── package.json           # Projekt-Abhängigkeiten
└── tsconfig.json          # TypeScript-Konfiguration
```

## 🛠️ Entwicklung

### Voraussetzungen

- Node.js (Version 18 oder höher)
- pnpm (empfohlen) oder npm

### Installation

```bash
# Dependencies installieren
pnpm install

# Entwicklungsserver starten
pnpm dev

# Produktions-Build erstellen
pnpm build

# Build lokal testen
pnpm preview
```

### Verfügbare Befehle

| Befehl                   | Aktion                                           |
| :---------------------- | :----------------------------------------------- |
| `pnpm install`          | Installiert alle Dependencies                    |
| `pnpm dev`              | Startet den lokalen Dev-Server auf `localhost:4321` |
| `pnpm build`            | Erstellt den Produktions-Build in `./dist/`     |
| `pnpm preview`          | Zeigt den Build lokal an, vor dem Deployment    |
| `pnpm astro ...`        | Führt CLI-Befehle aus wie `astro add`, `astro check` |
| `pnpm astro -- --help`  | Zeigt Hilfe für die Astro CLI an                |

## 📝 Content Management

### Blog-Beiträge

Blog-Beiträge werden in `src/content/blog/` als Markdown-Dateien gespeichert. Jeder Beitrag benötigt:

```yaml
---
title: "Titel des Beitrags"
description: "Kurze Beschreibung"
pubDate: 2024-01-01
updatedDate: 2024-01-01
heroImage: "/blog-placeholder-1.jpg"
---
```

### Seiten bearbeiten

- **Startseite**: `src/pages/index.astro`
- **Über uns**: `src/pages/about.astro`
- **Blog**: `src/pages/blog/index.astro`
- **Blog-Beiträge**: `src/pages/blog/[...slug].astro`

## 🎨 Styling

Das Design verwendet CSS-Variablen für konsistente Farben und Styling:

- Hauptfarbe: `--accent` (#3b82f6)
- Dunkle Akzentfarbe: `--accent-dark` (#000d8a)
- Globale Styles: `src/styles/global.css`

## 📞 Kontakt

**Heilgendorff**  
Musterstraße 123  
12345 Musterstadt  
Deutschland

- **Telefon**: +49 (0) 123 456789
- **E-Mail**: info@heilgendorff.de

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt ist proprietär und gehört Heilgendorff.

## 📧 Bewerbungsformular einrichten

Das Bewerbungsformular verwendet [Resend](https://resend.com) für den E-Mail-Versand.

### 1. Resend Account erstellen

1. Registriere dich kostenlos bei [resend.com](https://resend.com)
2. Erstelle einen API Key unter "API Keys"
3. Verifiziere die Domain `heilgendorff.de` unter "Domains"

### 2. Umgebungsvariablen setzen

**Lokal:** Kopiere `.env.template` zu `.env` und füge den API Key ein:

```bash
cp .env.template .env
# Dann .env bearbeiten und RESEND_API_KEY setzen
```

**Vercel:** Gehe zu Project Settings > Environment Variables und setze:

| Variable | Wert |
|----------|------|
| `RESEND_API_KEY` | `re_xxxxxxxxxx` (dein Resend API Key) |

### 3. Domain in Resend verifizieren

Damit E-Mails von `bewerbung@heilgendorff.de` gesendet werden können:

1. Gehe in Resend zu "Domains" > "Add Domain"
2. Füge `heilgendorff.de` hinzu
3. Setze die DNS-Records (MX, SPF, DKIM) bei deinem Domain-Provider
4. Warte auf Verifizierung (kann bis zu 24h dauern)

**Hinweis:** Bis zur Domain-Verifizierung werden E-Mails von `onboarding@resend.dev` gesendet.

## 🛡️ Spam-Schutz Bewerbungsformular einrichten

Das Bewerbungsformular (`/bewerbung`) ist gegen Spam-Bots abgesichert durch:
- **Honeypot-Feld** (unsichtbares Feld, das nur Bots ausfüllen)
- **Zeitcheck** (Formulare, die schneller als 3 Sekunden nach dem Laden abgesendet werden, gelten als Bot)
- **Cloudflare Turnstile** (unsichtbares/interaktives Verifizierungswidget)

### 1. Cloudflare Turnstile Account erstellen

1. Kostenloses Konto unter [dash.cloudflare.com](https://dash.cloudflare.com/?to=/:account/turnstile) erstellen (kein bestehendes Cloudflare-Hosting nötig)
2. Neue Turnstile-Site anlegen, Domain `heilgendorff.de` (und `localhost` für lokale Tests) eintragen
3. Widget-Modus "Managed" wählen (empfohlen – meist unsichtbar für echte Nutzer)
4. Site Key und Secret Key kopieren

### 2. Umgebungsvariablen setzen

**Lokal:** in `.env` ergänzen:

```bash
PUBLIC_TURNSTILE_SITE_KEY=dein_site_key
TURNSTILE_SECRET_KEY=dein_secret_key
```

**Vercel:** Project Settings > Environment Variables:

| Variable | Wert |
|----------|------|
| `PUBLIC_TURNSTILE_SITE_KEY` | Site Key aus dem Cloudflare-Dashboard |
| `TURNSTILE_SECRET_KEY` | Secret Key aus dem Cloudflare-Dashboard |

**Hinweis:** Ohne gesetzten `TURNSTILE_SECRET_KEY` wird die Verifizierung übersprungen (z. B. für lokale Entwicklung ohne eigenen Account) — für den Produktivbetrieb muss der Key gesetzt sein, sonst greift der Spam-Schutz nicht.

**Achtung, `PUBLIC_TURNSTILE_SITE_KEY` wird beim Build eingebacken:** Eine Änderung in Vercel wird erst nach einem Redeploy wirksam (`vercel redeploy <letzte-Production-URL>`).

Ein falscher Site Key legt das Formular still lahm: Cloudflare rendert dann gar kein Widget, niemand kann absenden, und es gibt keine Fehlermeldung. Dagegen greifen zwei Sicherungen:

- Der Production-Build bricht ab, wenn `PUBLIC_TURNSTILE_SITE_KEY` fehlt oder nicht dem Format `<Ziffer>x` + 22 Zeichen entspricht.
- Lädt das Widget zur Laufzeit trotzdem nicht (Key gesperrt, Domain nicht freigegeben), zeigt das Formular einen sichtbaren Hinweis mit Fehlercode und der Bewerbungs-E-Mail-Adresse.

## 🛠️ Technologie-Stack

- [Astro](https://astro.build) - Web Framework
- [Vercel](https://vercel.com) - Hosting & Serverless Functions
- [Resend](https://resend.com) - E-Mail-Versand
- [TypeScript](https://www.typescriptlang.org/) - Programmiersprache
- [Markdown](https://www.markdownguide.org/) - Content Format
- [MDX](https://mdxjs.com/) - Erweiterte Markdown-Funktionalität
