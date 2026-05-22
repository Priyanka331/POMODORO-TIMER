# Assessment Answers

## 1. How to run
- Clone repo, open `index.html` in browser.
- Deployed at: https://github.com/Priyanka331/POMODORO-TIMER
- Open `index.html` in any modern browser; no installation required.
- Deployed at: https://priyanka331.github.io/POMODORO-TIMER/

## 2. Stack & design choices
- **Stack**: Vanilla HTML/CSS/JS — simplest, portable, no dependencies.
- **Decision 1**: Added theme toggle (light/dark) so users can work in their preferred environment. I used gradient backgrounds for light and dark themes. This makes the app feel modern and helps users distinguish between focus and break states more clearly.
- **Decision 2**: Timer text is huge and centered, making it readable at a glance even when multitasking.
- **Decision 3**: I added a circular progress ring around the timer. This makes the countdown feel alive and gives users a quick visual sense of progress without reading numbers.

## 3. Responsive & accessibility
- On a 360px-wide phone: the timer shrinks to fit the screen, controls stack vertically, and the history section becomes a single column.
- On a 1440px laptop: the timer and history sit side-by-side with extra whitespace, making use of the larger viewport.
- Accessibility handled: I added keyboard shortcuts (Space to start/pause, R to reset) so users can control the timer without a mouse.
- Skipped: I did not add screen reader narration of the countdown. With more time, I’d use `aria-live` to announce time changes for visually impaired users.

## 4. AI usage
- I changed one major output: Copilot suggested a fixed grid layout for the history list. I rewrote it to a flex-column list with separators so it reflows naturally on narrow screens and looks cleaner.
- I also hand‑crafted the CSS gradients and progress ring animation instead of using AI‑suggested plain backgrounds.

## 5. Honest gap
- The UI is functional but the **typography and header hierarchy** are not fully polished. With another day, I’d:
- Introduce a modern Google Font (like *Inter* or *Poppins*) for cleaner readability.
- Add subtle animations (fade-in for headers, pulsing glow during focus mode) to make the interface feel more dynamic.
- Improve button styling with consistent color palettes and hover states that match focus/break themes.
- History styling is minimal. With another day, I’d add animations (fade-in entries) and a streak counter.