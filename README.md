# Pomodoro Timer

A single-screen Pomodoro timer with daily history, theme toggle, and configurable durations.
A single-screen Pomodoro timer with daily history, theme toggle, sound selector, progress ring animation, and configurable durations. Built with **vanilla HTML, CSS, and JavaScript** ; no frameworks, no build step.

---
## 🚀 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/Priyanka331/POMODORO-TIMER
   cd pomodoro-timer

2. Open index.html in any modern browser (Chrome, Edge, Firefox, Safari).

That’s it — no installation required.

### 🌐 Deployed URL
Live demo: https://priyanka331.github.io/POMODORO-TIMER/

### ✨ Features
Configurable durations — set focus and break times.

Start / Pause / Reset controls — intuitive timer management.

Automatic cycle transitions — focus → break → focus.

Audible cue — plays a sound when a cycle ends.

Sound selector — choose between ding, bell, or chime.

Theme toggle — light and dark mode.

Circular progress ring — visual countdown animation.

Daily history log — shows completed focus sessions for the current day, persists across reloads.

Keyboard shortcuts — Space to start/pause, R to reset.

Responsive design — works on phones (360px) and laptops (1440px).

### 📂 Project Structure
Code
pomodoro-timer/
├── index.html        # Main entry point
├── style.css         # Styling (themes, UI, progress ring)
├── script.js         # Timer logic, history, 
├── ding.mp3          # Default notification sound
├── bell.mp3          # Optional sound
├── chime.mp3         # Optional sound
├── README.md         # Run instructions & project overview
└── ANSWERS.md        # Assessment answers

### 📱 Responsive Behavior
Mobile (360px): Controls stack vertically, timer shrinks but stays centered.

Desktop (1440px): Timer and history sit side-by-side with whitespace.

### ♿ Accessibility
Keyboard shortcuts for timer control.

Clear color contrast between focus (blue) and break (green).

Headers structured (H1 for app title, H2 for phase, H3 for history).

### 🔧 Future Improvements
Add streak counter for motivation.

Animate history entries (fade-in).

Integrate Google Fonts (e.g., Inter, Poppins) for cleaner typography.

Add aria-live for screen reader countdown narration.