# The Daily Plan — Personal Operating System

An elegant, black-and-white newspaper-themed personal operating system and execution dashboard. Designed to replace long, overwhelming planning documents with an intuitive, interactive, day-by-day companion.

---

## Highlights & Features

- **Newspaper / Editorial Aesthetic**: High-contrast, clean monochrome layout inspired by broadsheet newspapers with Newsreader serif headings, crisp double rules, and clean multi-column layouts.
- **Auto-Day Detection**: Automatically detects the current day of the week (e.g., Sunday) and highlights that day's schedule upon loading.
- **Live Active Task Tracker**: Real-time IST clock and live banner displaying the exact task scheduled for the current hour.
- **Complete 39-Page Life Plan Coverage**:
  - **7-Day Master Schedule**: Every block from 05:30 AM wake-up, cold shower, deep work, prayers, meal timings, gym, and 10:30 PM wind-down.
  - **Kerala Meal Portion Calculator**: Instant grams-to-calories/protein calculator for Kerala staples (Matta rice, chicken breast, eggs, lentils/dal, fish curry, peanut butter toast, curd).
  - **AI & Cloud Engineering Roadmap**: 8-week phased curriculum covering Python/ML fundamentals, PyTorch, LangChain/LlamaIndex, RAG architectures, model fine-tuning, Docker, and AWS foundational deployment.
  - **Gym & Strength Splits**: Full Push / Pull / Legs routine, warm-ups, progressive overload tracking, and core finishers.
  - **Habit Tracker & Quick Logger**: 2-minute end-of-day checklist with one-click clipboard report generator.
  - **Universal Search**: Real-time instant search across all routines, supplements, protocols, and study topics.
- **100% Private & Anonymized**: Stripped of personal identifying information, ready for safe self-hosting or public deployment.
- **Local Storage Persistence**: Checkbox states and custom notes persist locally in browser `localStorage`.

---

## File Structure

```text
├── daily-plan/       # Self-contained project directory
│   ├── index.html    # Semantic broadsheet HTML layout
│   ├── style.css     # Broadsheet typography, responsive grid, newspaper borders
│   ├── app.js        # Schedules, Kerala meal calculator, live clock, search, calendar sync
│   ├── open_plan.bat # One-click Windows desktop launcher
│   ├── server.py     # Local no-cache Python dev server
│   ├── vercel.json   # Vercel configuration
│   ├── .gitignore    # Local git ignore
│   └── README.md     # Project documentation
└── .gitignore        # Root safeguard for external files
```

---

## How to Run Locally

### Option 1: One-Click Desktop Launcher (Windows)
Double-click `open_plan.bat` from File Explorer to launch directly in your default browser.

### Option 2: Local HTTP Server (Python)
```bash
python -m http.server 3000
```
Then open `http://localhost:3000/index.html` in your browser.

---

## How to Host Online

This application is completely static (HTML, CSS, Vanilla JS) with zero backend requirements:

1. **GitHub Pages**:
   - Push this repository to GitHub.
   - Go to **Settings** > **Pages** > select branch `main` and root `/` > Save.
2. **Vercel / Netlify**:
   - Import the repository; framework preset: `Other` / Static site.
   - Deploy in one click.

---

## Privacy Notice
The `.gitignore` in this repository strictly ignores all PDFs, images, credentials, and identity files (`*.pdf`, `*.jpg`, `*.jpeg`, `*.png`, etc.) to ensure that personal documents remain strictly local and private.
