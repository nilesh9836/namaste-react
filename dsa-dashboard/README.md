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
- **Reset** all progress with confirmation.

## localStorage Note

> **Important:** Progress is stored in your browser's `localStorage`.  
> It is **device- and browser-specific** — data saved in Chrome on your laptop will not appear in Firefox or on another device.  
> Clear your browser site data and your progress will be lost.  
> **Export your progress regularly** using the Export button to back it up.

## File Structure

```
dsa-dashboard/
  index.html   — Page structure and layout
  styles.css   — Dark-theme responsive styles
  app.js       — Question data + all logic (localStorage, filtering, export/import)
  README.md    — This file
```
