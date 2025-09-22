document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Create overlay for blur effect
  const overlay = document.createElement("div");
  overlay.classList.add("menu-overlay");
  document.body.appendChild(overlay);

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    // Close the menu when clicking a nav link
    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
      });
    });

    // Close the menu when clicking outside (on overlay)
    overlay.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const breathingCircle = document.querySelector(".breathing-circle");
  const breathingText = document.querySelector(".breathing-text");
  const startBreathingBtn = document.getElementById("start-breathing");
  const resetBreathingBtn = document.getElementById("reset-breathing");

  const timerDisplay = document.getElementById("timer");
  const timeOptions = document.querySelectorAll(".time-option");
  const startTimerBtn = document.getElementById("start-timer");
  const pauseTimerBtn = document.getElementById("pause-timer");
  const resetTimerBtn = document.getElementById("reset-timer");

  const soundOptions = document.querySelectorAll(".sound-option");
  const rainSound = document.getElementById("rain-sound");
  const forestSound = document.getElementById("forest-sound");
  const wavesSound = document.getElementById("waves-sound");
  const fireSound = document.getElementById("fire-sound");

  const sessionsCount = document.getElementById("sessions-count");
  const totalTime = document.getElementById("total-time");
  const currentStreak = document.getElementById("current-streak");

  // Variables
  let breathingInterval;
  let isBreathingActive = false;
  let isInhalePhase = true;

  let timerInterval;
  let isTimerActive = false;
  let timerDuration = 25 * 60; // 25 minutes
  let currentTimerTime = timerDuration;

  let activeSound = null;

  // Initialize from localStorage
  function initializeFromStorage() {
    const savedSessions = localStorage.getItem("meditationSessions");
    const savedTime = localStorage.getItem("totalMeditationTime");
    const savedStreak = localStorage.getItem("currentStreak");

    sessionsCount.textContent = savedSessions || "0";
    totalTime.textContent = savedTime || "0";
    currentStreak.textContent = savedStreak || "0";
  }

  // --- Breathing Functions ---
  function startBreathing() {
    if (isBreathingActive) return;
    isBreathingActive = true;
    startBreathingBtn.textContent = "Pause";

    breathingInterval = setInterval(() => {
      if (isInhalePhase) {
        breathingText.textContent = "Breathe In";
        breathingCircle.classList.remove("exhale-anim");
        breathingCircle.classList.add("inhale-anim");
      } else {
        breathingText.textContent = "Breathe Out";
        breathingCircle.classList.remove("inhale-anim");
        breathingCircle.classList.add("exhale-anim");
      }
      isInhalePhase = !isInhalePhase;
    }, 4000);
  }

  function pauseBreathing() {
    clearInterval(breathingInterval);
    isBreathingActive = false;
    startBreathingBtn.textContent = "Resume";
  }

  function resetBreathing() {
    clearInterval(breathingInterval);
    isBreathingActive = false;
    isInhalePhase = true;
    breathingText.textContent = "Breathe In";
    breathingCircle.classList.remove("inhale-anim", "exhale-anim");
    startBreathingBtn.textContent = "Start";
  }

  // --- Timer Functions ---
  function updateTimerDisplay() {
    const minutes = Math.floor(currentTimerTime / 60);
    const seconds = currentTimerTime % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  function startTimer() {
    if (isTimerActive) return;

    isTimerActive = true;
    startTimerBtn.textContent = "Pause";

    // Play sound continuously if selected
    if (activeSound) activeSound.loop = true;

    timerInterval = setInterval(() => {
      if (currentTimerTime > 0) {
        currentTimerTime--;
        updateTimerDisplay();
      } else {
        completeSession();
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timerInterval);
    isTimerActive = false;
    startTimerBtn.textContent = "Resume";

    // Pause sound if playing
    if (activeSound) activeSound.pause();
  }

  function resetTimer() {
    clearInterval(timerInterval);
    isTimerActive = false;
    currentTimerTime = timerDuration;
    updateTimerDisplay();
    startTimerBtn.textContent = "Start";

    if (activeSound) activeSound.pause();
  }

  function completeSession() {
    clearInterval(timerInterval);
    isTimerActive = false;
    startTimerBtn.textContent = "Start";

    // Stop sound
    if (activeSound) activeSound.pause();

    // Update stats
    const sessionCount = parseInt(sessionsCount.textContent) + 1;
    const totalMinutes = parseInt(totalTime.textContent) + timerDuration / 60;

    sessionsCount.textContent = sessionCount;
    totalTime.textContent = totalMinutes;

    // Save to localStorage
    localStorage.setItem("meditationSessions", sessionCount);
    localStorage.setItem("totalMeditationTime", totalMinutes);

    alert("Meditation session completed! 🎉");
    currentTimerTime = timerDuration;
    updateTimerDisplay();
  }

  // --- Sound Functions ---
  function playSound(sound) {
    // Pause all sounds first
    [rainSound, forestSound, wavesSound, fireSound].forEach((s) => s.pause());

    // Remove active class
    soundOptions.forEach((option) => option.classList.remove("active"));

    if (sound) {
      sound.currentTime = 0;
      sound.loop = true; // Loop continuously
      sound.play().catch((err) => console.log("Audio play failed:", err));
      activeSound = sound;
    } else {
      activeSound = null;
    }
  }

  // --- Event Listeners ---
  startBreathingBtn.addEventListener("click", () => {
    if (isBreathingActive) pauseBreathing();
    else startBreathing();
  });
  resetBreathingBtn.addEventListener("click", resetBreathing);

  timeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      timeOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      timerDuration = parseInt(option.dataset.time) * 60;
      currentTimerTime = timerDuration;
      updateTimerDisplay();
    });
  });

  startTimerBtn.addEventListener("click", startTimer);
  pauseTimerBtn.addEventListener("click", pauseTimer);
  resetTimerBtn.addEventListener("click", resetTimer);

  soundOptions.forEach((option) => {
    option.addEventListener("click", () => {
      if (option.classList.contains("active")) {
        option.classList.remove("active");
        playSound(null);
      } else {
        option.classList.add("active");
        switch (option.dataset.sound) {
          case "rain":
            playSound(rainSound);
            break;
          case "forest":
            playSound(forestSound);
            break;
          case "waves":
            playSound(wavesSound);
            break;
          case "fire":
            playSound(fireSound);
            break;
        }
      }
    });
  });

  // Initialize
  initializeFromStorage();
  updateTimerDisplay();
});
