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

## 🛠️ Technologie-Stack

- [Astro](https://astro.build) - Web Framework
- [TypeScript](https://www.typescriptlang.org/) - Programmiersprache
- [Markdown](https://www.markdownguide.org/) - Content Format
- [MDX](https://mdxjs.com/) - Erweiterte Markdown-Funktionalität
