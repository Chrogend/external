// js/quiz.js
// MathVibe Interactive Quiz Controller

let currentQuestionIndex = 0;
let timerInterval = null;
let timeLimitSeconds = TIME_LIMIT; // Injected from PHP
let totalQuestions = TOTAL_QUESTIONS; // Injected from PHP
const startTime = Date.now();

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize display
    showQuestionCard(currentQuestionIndex);
    updateProgressBar();
    
    // 2. Load cached progress if exists
    loadCachedQuizProgress();

    // 3. Start Timer
    if (timeLimitSeconds > 0) {
        startQuizTimer();
    }

    // 4. Input listeners to trigger caching
    document.querySelectorAll('.quiz-radio-input, .fib-input').forEach(input => {
        input.addEventListener('change', () => {
            cacheQuizProgress();
        });
        input.addEventListener('input', () => {
            cacheQuizProgress();
        });
    });

    // 5. Form submission clean up
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        quizForm.addEventListener('submit', (e) => {
            // Save time spent
            const elapsedSeconds = Math.round((Date.now() - startTime) / 1000);
            document.getElementById('time_spent_input').value = elapsedSeconds;

            // Clear cache
            localStorage.removeItem(`quiz_attempt_${QUIZ_ID}`);
        });
    }
});

/**
 * Display a specific question card
 */
function showQuestionCard(index) {
    document.querySelectorAll('.quiz-question-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const activeCard = document.getElementById(`question-card-${index}`);
    if (activeCard) {
        activeCard.classList.add('active');
    }

    // Update navigation buttons
    const prevBtn = document.getElementById('prev-question-btn');
    const nextBtn = document.getElementById('next-question-btn');
    const submitBtn = document.getElementById('submit-quiz-btn');

    if (prevBtn) prevBtn.style.display = index === 0 ? 'none' : 'block';
    
    if (index === totalQuestions - 1) {
        if (nextBtn) nextBtn.style.display = 'none';
        if (submitBtn) submitBtn.style.display = 'block';
    } else {
        if (nextBtn) nextBtn.style.display = 'block';
        if (submitBtn) submitBtn.style.display = 'none';
    }
}

/**
 * Move between questions
 */
function navigateQuestion(direction) {
    const newIndex = currentQuestionIndex + direction;
    if (newIndex >= 0 && newIndex < totalQuestions) {
        currentQuestionIndex = newIndex;
        showQuestionCard(currentQuestionIndex);
        updateProgressBar();
    }
}

/**
 * Update quiz progress bar percentage
 */
function updateProgressBar() {
    const bar = document.getElementById('quiz-progress-bar');
    if (bar) {
        const percentage = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);
        bar.style.width = `${percentage}%`;
    }
}

/**
 * Visual radio option styling selection toggler
 */
function selectOption(inputEl, labelId) {
    // Unselect all options of this question
    const questionCard = inputEl.closest('.quiz-question-card');
    questionCard.querySelectorAll('.quiz-option-label').forEach(label => {
        label.classList.remove('selected');
    });
    
    // Select the current option
    const activeLabel = document.getElementById(labelId);
    if (activeLabel) {
        activeLabel.classList.add('selected');
    }
    
    cacheQuizProgress();
}

/**
 * Timer implementation
 */
function startQuizTimer() {
    const display = document.getElementById('timer-display');
    if (!display) return;

    let timeRemaining = timeLimitSeconds;

    // Check if there is cached timer remaining
    const cacheKey = `quiz_timer_${QUIZ_ID}_${startTime}`;
    // We can also just run standard countdown
    
    timerInterval = setInterval(() => {
        timeRemaining--;

        // Format and Display
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            display.textContent = "00:00";
            showToast("Time is up! Submitting your answers automatically...", "warning");
            setTimeout(() => {
                const quizForm = document.getElementById('quiz-form');
                if (quizForm) quizForm.submit();
            }, 1000);
        }
    }, 1000);
}

/**
 * Cache answers into LocalStorage for auto-save recovery
 */
function cacheQuizProgress() {
    const answers = {};
    
    // MCQs and TFs
    document.querySelectorAll('.quiz-radio-input:checked').forEach(radio => {
        answers[radio.getAttribute('data-question-id')] = radio.value;
    });

    // FIBs
    document.querySelectorAll('.fib-input').forEach(fib => {
        if (fib.value.trim() !== '') {
            answers[fib.getAttribute('data-question-id')] = fib.value;
        }
    });

    localStorage.setItem(`quiz_attempt_${QUIZ_ID}`, JSON.stringify(answers));
}

/**
 * Load cached quiz answers on page reload
 */
function loadCachedQuizProgress() {
    const cachedData = localStorage.getItem(`quiz_attempt_${QUIZ_ID}`);
    if (!cachedData) return;

    try {
        const answers = JSON.parse(cachedData);
        for (const [q_id, value] of Object.entries(answers)) {
            // Check if it's MCQ / TF (radio option)
            const radio = document.querySelector(`.quiz-radio-input[data-question-id="${q_id}"][value="${value}"]`);
            if (radio) {
                radio.checked = true;
                const label = radio.closest('.quiz-option-label');
                if (label) label.classList.add('selected');
            } else {
                // Check if FIB text input
                const fib = document.querySelector(`.fib-input[data-question-id="${q_id}"]`);
                if (fib) {
                    fib.value = value;
                }
            }
        }
        showToast("Restored your quiz progress automatically.", "info");
    } catch (e) {
        console.error("Error loading cached quiz answers", e);
    }
}
