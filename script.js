let focusDuration = 25;
let breakDuration = 5;
let timeLeft = focusDuration * 60;
let isRunning = false;
let isFocus = true;
let timerInterval;
let selectedSound = "ding.mp3";

const focusInput = document.getElementById("focusInput");
const breakInput = document.getElementById("breakInput");
const themeSelect = document.getElementById("themeSelect");
const soundSelect = document.getElementById("soundSelect");
const timeDisplay = document.getElementById("timeDisplay");
const phaseLabel = document.getElementById("phaseLabel");
const timerDiv = document.getElementById("timer");
const historyList = document.getElementById("historyList");
const progressCircle = document.getElementById("progressCircle");

const circumference = 2 * Math.PI * 54;

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(timeLeft);
  phaseLabel.textContent = isFocus ? "Focus" : "Break";
  timerDiv.className = `timer ${isFocus ? "focus" : "break"}`;
  updateProgress();
}

function updateProgress() {
  const total = (isFocus ? focusDuration : breakDuration) * 60;
  const offset = circumference - (timeLeft / total) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

function playSound() {
  new Audio(selectedSound).play();
}

function logSession() {
  if (isFocus) {
    const history = JSON.parse(localStorage.getItem("history") || "[]");
    history.push({
      duration: focusDuration,
      timestamp: new Date().toLocaleTimeString(),
      date: new Date().toDateString()
    });
    localStorage.setItem("history", JSON.stringify(history));
    renderHistory();
  }
}

function renderHistory() {
  const today = new Date().toDateString();
  const history = JSON.parse(localStorage.getItem("history") || "[]");
  historyList.innerHTML = "";
  history
    .filter((h) => h.date === today)
    .forEach((h) => {
      const li = document.createElement("li");
      li.textContent = `✓ ${h.duration}:00 focus — ${h.timestamp}`;
      historyList.appendChild(li);
    });
}

function tick() {
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    playSound();
    logSession();
    isFocus = !isFocus;
    timeLeft = (isFocus ? focusDuration : breakDuration) * 60;
    start();
  } else {
    timeLeft--;
    updateDisplay();
  }
}

function start() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(tick, 1000);
  }
}

function pause() {
  isRunning = false;
  clearInterval(timerInterval);
}

function reset() {
  pause();
  isFocus = true;
  timeLeft = focusDuration * 60;
  updateDisplay();
}

document.getElementById("startBtn").onclick = start;
document.getElementById("pauseBtn").onclick = pause;
document.getElementById("resetBtn").onclick = reset;

focusInput.onchange = () => {
  focusDuration = Number(focusInput.value);
  reset();
};
breakInput.onchange = () => {
  breakDuration = Number(breakInput.value);
  reset();
};
themeSelect.onchange = () => {
  document.querySelector(".app").className = `app ${themeSelect.value}`;
};
soundSelect.onchange = () => {
  selectedSound = soundSelect.value;
};

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    isRunning ? pause() : start();
  }
  if (e.code === "KeyR") {
    reset();
  }
});

updateDisplay();
renderHistory();
