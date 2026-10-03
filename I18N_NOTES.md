# Internationalization update

The portfolio now supports six client-side languages without changing routes:

- English (`en`) — default
- Spanish (`es`)
- French (`fr`)
- German (`de`)
- Danish (`da`)
- Simplified Chinese (`zh` / `zh-CN`)

## How it works

- `src/i18n/translations.json` contains the UI and project translations.
- `src/scripts/i18n.ts` applies translations instantly and persists the selected language in `localStorage` under `portfolio-language`.
- `src/components/ui/LanguageSelector.astro` renders the global selector in the header.
- Project case-study content and table-of-contents entries update when the language changes.
- English is always the default for a new visitor; browser-language detection is intentionally not used.

## CV files

The CV dropdown includes all six languages:

- `/public/files/AlfredoRamosGarcia_en.pdf`
- `/public/files/AlfredoRamosGarcia_es.pdf`
- `/public/files/AlfredoRamosGarcia_fr.pdf`
- `/public/files/AlfredoRamosGarcia_de.pdf`
- `/public/files/AlfredoRamosGarcia_da.pdf`
- `/public/files/AlfredoRamosGarcia_zh.pdf`

The original English and Spanish CVs were preserved. French, German, Danish and Simplified Chinese versions were created from the English CV content and visually verified after PDF rendering.
