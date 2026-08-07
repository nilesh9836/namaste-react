# DSA Progress Dashboard

An interactive, offline-capable progress tracker for the 285 Java DSA questions across 19 modules.

## How to Launch

1. Clone or download this repository.
2. Open `dsa-dashboard/index.html` directly in any modern web browser (Chrome, Firefox, Edge, Safari).
   - No server, no build step, no internet connection required.
3. Start tracking your progress!

## Features

- **19 modules, 285 questions** populated from `DSA_JAVA_15_QUESTION_PRACTICE.md`.
- Per-question status: **Pending**, **In Progress**, **Solved**, **Needs Review**.
- Solve-count tracker (increment / decrement / clear) per question.
- Optional notes field per question.
- Per-module progress bars.
- Dashboard summary: total, solved, in-progress, pending, needs-review, total attempts, overall %.
- **Filter** by module, platform (LeetCode / GeeksforGeeks / HackerRank), status, or free-text search.
- **Expand / Collapse** all modules.
- **Export** progress to a JSON file and **Import** it back (with validation).
- **Optional File System Access API support** to connect an existing JSON progress file or choose a save file and keep it updated during the current page session.
- **Reset** all progress with confirmation.

## Storage and Backups

- **Default / fallback storage:** Progress is always saved to your browser's `localStorage`.
  - This is **device- and browser-specific** — data saved in one browser profile will not automatically appear in another browser or on another device.
  - Clearing browser site data removes the local copy.
- **Optional file-based saving:** In browsers that support the File System Access API, you can:
  - **Connect Progress File** to open an existing dashboard JSON file, validate it, and load its saved progress.
  - **Choose Save File** to pick or create a JSON file that the dashboard can write to.
  - **Save to Connected File** to force a save on demand.
- When a file is connected, normal dashboard edits continue saving to `localStorage` **and** also attempt to update the connected JSON file.
- The file handle is remembered **only for the current page session**. Reloading or closing the page clears the connection, so you must reconnect the file next time.
- If file access is unsupported, permission is denied, or a file write fails, the dashboard shows feedback and continues saving to `localStorage` so your progress is not lost.
- **Export JSON / Import JSON** remains the manual backup/restore workflow for every browser, including unsupported ones.

## Browser Support Notes

- The File System Access API is not available in every browser.
- When it is unavailable, the file buttons stay disabled and the dashboard keeps working with `localStorage` plus Export/Import.
- No backend, database, or repository write access is used — the dashboard remains a static-site feature that works on GitHub Pages.

## File Structure

```
dsa-dashboard/
  index.html   — Page structure and layout
  styles.css   — Dark-theme responsive styles
  app.js       — Question data + all logic (localStorage, optional file saving, filtering, export/import)
  README.md    — This file
```
