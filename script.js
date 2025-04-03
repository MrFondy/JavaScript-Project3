let steps = 0;
const goal = 10000;

const stepsDisplay = document.getElementById('steps');
const progressDisplay = document.getElementById('progress');
const statusMessage = document.getElementById('status-message');
const addStepsButton = document.getElementById('add-steps');
const resetButton = document.getElementById('reset-steps');

function updateDisplay() {
    stepsDisplay.textContent = steps;
    const percentage = Math.round((steps / goal) * 100);
    progressDisplay.textContent = percentage + '%';

    if (percentage >= 100) {
        statusMessage.textContent = "Goal reached! You're awesome!";
        statusMessage.className = "good";
    } else if (percentage >= 50) {
        statusMessage.textContent = "Halfway there! Keep going!";
        statusMessage.className = "warning";
    } else {
        statusMessage.textContent = "Let's get moving!";
        statusMessage.className = ""; // Remove any existing class
    }
}

addStepsButton.addEventListener('click', () => {
    steps += 100;
    updateDisplay();
});

resetButton.addEventListener('click', () => {
    steps = 0;
    updateDisplay();
});

// Initial display
updateDisplay();