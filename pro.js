document.addEventListener("DOMContentLoaded", () => {
  const timeDisplay = document.getElementById("time-display");
  const startBtn = document.getElementById("start-btn");
  const resetBtn = document.getElementById("reset-btn");
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  let timerInterval;
  let timeLeft = 25 * 60;

  const updateTimeDisplay = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const startTimer = () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimeDisplay();
      } else {
        clearInterval(timerInterval);
        alert("Time is up!");
      }
    }, 1000);
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    timeLeft = 25 * 60;
    updateTimeDisplay();
  };

  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      taskInput.value = "";
    }
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  startBtn.addEventListener("click", startTimer);
  resetBtn.addEventListener("click", resetTimer);
  addTaskBtn.addEventListener("click", addTask);
  darkModeToggle.addEventListener("click", toggleDarkMode);

  updateTimeDisplay();
});
