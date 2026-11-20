Multilingual upgrade (6 languages)

Changes made on branch feat/i18n-6lang:

- Implemented client-side i18n toggling:
  - Added assets/i18n.js for language detection (browser/localStorage), persistence, and switcher wiring.
  - Extended assets/site.css with language visibility rules and language switcher styles.

- Added a language switcher (EN / 日本語 / 中文 / 한국어 / Français / Español) near the top of every page.

- Converted all visible text on all pages to language-specific blocks (lang-en/ja/zh/ko/fr/es). Existing pl-en/pl-ja labels on the top page are mapped in CSS to the i18n system and extended with four new languages.

- Translated all copy to cover 6 languages across pages:
  - index, access, airport, emergency, key, manual, nearby, taxi, transportation, wifi.
  - Proper nouns (addresses, station names) are left as-is per brief.
  - No access codes were added; key page contains guidance text only.

- Kept URLs, images, and layout/design unchanged.

Result: Each page can switch fully among the 6 languages; selection persists and defaults to browser language when supported, else English.
