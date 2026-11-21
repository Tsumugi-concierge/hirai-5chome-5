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

---

Small Display Fixes (2026-11-21)

- Manual page
  - Removed two placeholder images that referenced `../images/.png` and had alt texts `⑤.png` and `④.png`.
  - Converted the gas meter help markdown links to clickable anchors for all languages:
    - From `[Video](https://youtu.be/0YSmTuE4r2E?feature=shared)` etc. to `<a href="…">…</a>` with `target="_blank" rel="noopener"`.
  - File: `manual/index.html`.

- Airport page
  - Wrapped the plain URLs in clickable anchors with `target="_blank" rel="noopener"`:
    - `https://world.jorudan.co.jp/mln/en/?sub_lang=nosub`
    - `https://www.jorudan.co.jp/`
  - File: `airport/index.html`.

- Emergency page
  - Wrapped the plain URL in a clickable anchor with `target="_blank" rel="noopener"`:
    - `https://www.jnto.go.jp/emergency/eng/mi_guide.html`
  - File: `emergency/index.html`.

- Secrets check
  - Searched for key/lockbox/access-code related terms across HTML. No door codes, key box numbers, or access codes are present. Key information page contains guidance only.

- Deploy
  - Changes pushed directly to `main` (commit d54b7b9).

- Public site verification
  - Public URL: https://tsumugi-concierge.github.io/hirai-5chome-5/
  - Expected visible changes after GitHub Pages refresh:
    - Manual: no broken placeholder images under AC remote and Washlet sections; video links shown as clickable text per language.
    - Airport/Emergency: plain URLs now clickable.
  - Note: GitHub Pages may take a few minutes to refresh. Source on GitHub is updated (for reference):
    - https://raw.githubusercontent.com/Tsumugi-concierge/hirai-5chome-5/main/manual/index.html
    - https://raw.githubusercontent.com/Tsumugi-concierge/hirai-5chome-5/main/airport/index.html
    - https://raw.githubusercontent.com/Tsumugi-concierge/hirai-5chome-5/main/emergency/index.html
