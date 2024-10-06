const questions = [
    {
        question: "What powers the Ionica Ocean?",
        options: ["Photosynthesis", "Chemical Reactions", "Nuclear Reactions"],
        answer: 1, // Index of the correct answer
        explanation: "The Ionica Ocean is powered by chemical reactions rather than photosynthesis."
    },
    {
        question: "Which of the following is a hypothetical species of the Ionica Ocean?",
        options: ["Planktonium", "Chemotrophis", "Hydrothermae"],
        answer: 0,
        explanation: "Planktonium is one of the species thriving in the Ionica Ocean."
    },
    {
        question: "What is the primary energy currency in the Ionica Ocean ecosystem?",
        options: ["ATP", "NADPH", "Acidic Energy"],
        answer: 0,
        explanation: "ATP is the primary energy currency in most biological systems, including the Ionica Ocean."
    },
    {
        question: "What is a common byproduct of chemical reactions in the Ionica Ocean?",
        options: ["Oxygen", "Hydrogen Sulfide", "Carbon Dioxide"],
        answer: 1,
        explanation: "Hydrogen sulfide is a common byproduct of the chemosynthetic processes in the Ionica Ocean."
    },
    {
        question: "Which role do both predators and prey play in the Ionica Ocean?",
        options: ["Chemical Balance", "Photosynthesis", "Nutrient Cycling"],
        answer: 2,
        explanation: "Both predators and prey contribute to the nutrient cycling within their ecosystems."
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let correctCount = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultMessageElement = document.getElementById("result-message");

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        optionsElement.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(index);
            optionsElement.appendChild(button);
        });

        resultMessageElement.textContent = "";
    } else {
        displayFinalMessage();
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultMessageElement = document.getElementById("result-message");

    if (selectedIndex === currentQuestion.answer) {
        correctCount++;
        resultMessageElement.innerHTML = `<span class="correct">You are right!</span> ${currentQuestion.explanation}`;
    } else {
        resultMessageElement.innerHTML = `<span class="wrong">Oops, seems you're wrong!</span> ${currentQuestion.explanation}`;
    }
    currentQuestionIndex++;
}

function nextQuestion() {
    loadQuestion();
}

function displayFinalMessage() {
    const finalMessageElement = document.getElementById("final-message");
    let message = "";

    if (correctCount >= 5) {
        message = "You're a professional!";
    } else if (correctCount >= 3) {
        message = "Nice job!";
    } else {
        message = "Don't worry! You will do better next time!";
    }

    finalMessageElement.textContent = `You got ${correctCount} out of ${questions.length} correct. ${message}`;
    finalMessageElement.classList.remove("hidden");
    document.getElementById("quiz-container").classList.add("hidden");
}

// Load the first question when the page loads
window.onload = loadQuestion;
