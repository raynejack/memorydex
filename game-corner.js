
/* =========================================
   MEMORYDEX — GAME CORNER
   WHO'S THAT POKÉMON?
========================================= */

const pokemonQuestions = [
  {
    name: "Ditto",
    icon: "🟣",
    clue: "This Pokémon can transform into other Pokémon.",
    options: ["Ditto", "Ralts", "Jirachi", "Feebas"]
  },
  {
    name: "Ralts",
    icon: "👒",
    clue: "This small Pokémon senses the emotions of people.",
    options: ["Kirlia", "Ralts", "Oshawott", "Altaria"]
  },
  {
    name: "Kirlia",
    icon: "💃",
    clue: "This elegant Pokémon evolves from Ralts.",
    options: ["Gardevoir", "Milotic", "Kirlia", "Charcadet"]
  },
  {
    name: "Oshawott",
    icon: "🦦",
    clue: "This Water-type Pokémon carries a shell on its belly.",
    options: ["Feebas", "Oshawott", "Jirachi", "Ditto"]
  },
  {
    name: "Gardevoir",
    icon: "✨",
    clue: "This elegant Psychic and Fairy-type Pokémon protects its Trainer.",
    options: ["Kirlia", "Altaria", "Gardevoir", "Milotic"]
  },
  {
    name: "Jirachi",
    icon: "⭐",
    clue: "This Mythical Pokémon is associated with wishes.",
    options: ["Jirachi", "Ditto", "Ralts", "Armarouge"]
  },
  {
    name: "Charcadet",
    icon: "🔥",
    clue: "This Fire-type Pokémon can evolve into Armarouge or Ceruledge.",
    options: ["Ceruledge", "Oshawott", "Charcadet", "Feebas"]
  },
  {
    name: "Feebas",
    icon: "🐟",
    clue: "This Water-type Pokémon evolves into the beautiful Milotic.",
    options: ["Milotic", "Feebas", "Altaria", "Kirlia"]
  },
  {
    name: "Milotic",
    icon: "🐍",
    clue: "This graceful Water-type Pokémon evolves from Feebas.",
    options: ["Gardevoir", "Milotic", "Jirachi", "Ralts"]
  },
  {
    name: "Altaria",
    icon: "☁️",
    clue: "This Dragon and Flying-type Pokémon resembles a cloud.",
    options: ["Altaria", "Ditto", "Armarouge", "Oshawott"]
  }
];

const startButton = document.getElementById("start-game");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const questionNumber = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score-display");
const progressFill = document.getElementById("progress-fill");
const pokemonSilhouette = document.getElementById("pokemon-silhouette");
const quizInstruction = document.getElementById("quiz-instruction");
const answerOptions = document.getElementById("answer-options");
const answerFeedback = document.getElementById("answer-feedback");
const nextButton = document.getElementById("next-question");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const playAgainButton = document.getElementById("play-again");
const gameMenu = document.querySelector(".game-menu");

let currentQuestion = 0;
let score = 0;
let questions = [];
let answered = false;

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function startGame() {
  currentQuestion = 0;
  score = 0;
  answered = false;

  questions = shuffleArray(pokemonQuestions);

  gameMenu.classList.add("hidden");
  resultSection.classList.add("hidden");
  quizSection.classList.remove("hidden");

  scoreDisplay.textContent = "SCORE: 0";

  showQuestion();
}

function showQuestion() {
  answered = false;

  const question = questions[currentQuestion];

  questionNumber.textContent =
    `QUESTION ${currentQuestion + 1} / ${questions.length}`;

  scoreDisplay.textContent = `SCORE: ${score}`;

  progressFill.style.width =
    `${(currentQuestion / questions.length) * 100}%`;

  pokemonSilhouette.textContent = question.icon;
  quizInstruction.textContent = question.clue;

  answerFeedback.textContent = "";
  answerFeedback.className = "";

  nextButton.classList.add("hidden");

  answerOptions.innerHTML = "";

  const shuffledOptions = shuffleArray(question.options);

  shuffledOptions.forEach(option => {
    const button = document.createElement("button");

    button.className = "answer-option";
    button.textContent = option;
    button.type = "button";

    button.addEventListener("click", () => {
      checkAnswer(option, button);
    });

    answerOptions.appendChild(button);
  });
}

function checkAnswer(selected, selectedButton) {
  if (answered) return;

  answered = true;

  const question = questions[currentQuestion];
  const buttons = answerOptions.querySelectorAll(".answer-option");

  buttons.forEach(button => {
    button.disabled = true;

    if (button.textContent === question.name) {
      button.classList.add("correct");
    }
  });

  if (selected === question.name) {
    score++;

    answerFeedback.textContent = "Correct! You got it! ♡";
    answerFeedback.className = "correct";
  } else {
    selectedButton.classList.add("incorrect");

    answerFeedback.textContent =
      `Not quite! It's ${question.name}.`;
    answerFeedback.className = "incorrect";
  }

  scoreDisplay.textContent = `SCORE: ${score}`;

  progressFill.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  nextButton.textContent =
    currentQuestion === questions.length - 1
      ? "SEE MY RESULTS →"
      : "NEXT QUESTION →";

  nextButton.classList.remove("hidden");
}

function nextQuestion() {
  if (!answered) return;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  finalScore.textContent = `${score} / ${questions.length}`;

  if (score === 10) {
    resultMessage.textContent =
      "A perfect score! You're a true Pokémon Master!";
  } else if (score >= 7) {
    resultMessage.textContent =
      "Amazing work! You really know your Pokémon!";
  } else if (score >= 4) {
    resultMessage.textContent =
      "Not bad! Keep learning about your Pokémon!";
  } else {
    resultMessage.textContent =
      "Every Pokémon journey starts somewhere. Try again!";
  }
}

function resetGame() {
  resultSection.classList.add("hidden");
  quizSection.classList.add("hidden");
  gameMenu.classList.remove("hidden");

  progressFill.style.width = "0%";
}

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
playAgainButton.addEventListener("click", startGame);

