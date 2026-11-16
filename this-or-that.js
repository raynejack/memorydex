
/* =========================================
   MEMORYDEX — THIS OR THAT
   PASS-THE-PHONE GAME
========================================= */

/* GAME QUESTIONS */

const questions = [
  {
    category: "DATE IDEAS",
    question: "Our ideal date?",
    a: "Japanese food date 🍣",
    b: "Museum date 🎨"
  },
  {
    category: "FOOD",
    question: "What would we rather eat?",
    a: "Ramen 🍜",
    b: "Sushi 🍣"
  },
  {
    category: "TRAVEL",
    question: "Where would we rather go?",
    a: "Beach vacation 🏖️",
    b: "Mountain getaway ⛰️"
  },
  {
    category: "ENTERTAINMENT",
    question: "Our perfect night in?",
    a: "Anime marathon 🍿",
    b: "Movie marathon 🎬"
  },
  {
    category: "POKÉMON",
    question: "Which Pokémon would we choose?",
    a: "Gardevoir 💗",
    b: "Jirachi ⭐"
  },
  {
    category: "DATE ACTIVITIES",
    question: "What sounds more fun?",
    a: "Arcade date 🕹️",
    b: "Photobooth date 📸"
  },
  {
    category: "EVERYDAY LIFE",
    question: "How would we rather communicate?",
    a: "Long phone calls 📞",
    b: "Endless texting 💬"
  },
  {
    category: "SWEET MOMENTS",
    question: "Which little gesture means more?",
    a: "Handwritten letters 💌",
    b: "Surprise gifts 🎁"
  },
  {
    category: "ADVENTURE",
    question: "Our kind of weekend?",
    a: "Spontaneous road trip 🚗",
    b: "Planned itinerary 🗺️"
  },
  {
    category: "FOOD AGAIN!",
    question: "Which dessert wins?",
    a: "Ice cream 🍦",
    b: "Cake 🍰"
  },
  {
    category: "PERSONALITY",
    question: "Who would we rather be?",
    a: "The planner 📋",
    b: "The spontaneous one ✨"
  },
  {
    category: "SHOPPING",
    question: "Where would we rather spend an afternoon?",
    a: "Bookstore 📚",
    b: "Shopping mall 🛍️"
  },
  {
    category: "MEMORIES",
    question: "Which memory would we rather make?",
    a: "A cute photobooth session 📸",
    b: "A long walk together 🌙"
  },
  {
    category: "POKÉMON ADVENTURE",
    question: "If we had a Pokémon partner?",
    a: "A cute and loyal companion 🐾",
    b: "A powerful battle partner ⚡"
  },
  {
    category: "US",
    question: "Our perfect day together?",
    a: "Going somewhere new 🌍",
    b: "Staying somewhere cozy 🏡"
  }
];


/* GAME STATE */

let playerOne = "";
let playerTwo = "";

let currentPlayer = 1;
let currentQuestion = 0;

let answersOne = [];
let answersTwo = [];


/* GET PAGE ELEMENTS */

const introScreen = document.getElementById("intro-screen");
const questionScreen = document.getElementById("question-screen");
const passScreen = document.getElementById("pass-screen");
const resultScreen = document.getElementById("result-screen");

const playerOneInput = document.getElementById("player-one");
const playerTwoInput = document.getElementById("player-two");

const startButton = document.getElementById("start-game");
const continueButton = document.getElementById("continue-game");

const currentPlayerText = document.getElementById("current-player");
const questionCounter = document.getElementById("question-counter");
const questionCategory = document.getElementById("question-category");
const questionText = document.getElementById("question-text");

const choiceA = document.getElementById("choice-a");
const choiceB = document.getElementById("choice-b");
const choiceBoth = document.getElementById("choice-both");

const progressFill = document.getElementById("question-progress-fill");

const passMessage = document.getElementById("pass-message");

const matchScore = document.getElementById("match-score");
const matchMessage = document.getElementById("match-message");
const answerComparison = document.getElementById("answer-comparison");

const playAgainButton = document.getElementById("play-again");


/* SCREEN MANAGEMENT */

function showScreen(screen) {
  introScreen.classList.add("hidden");
  questionScreen.classList.add("hidden");
  passScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");

  screen.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* START GAME */

startButton.addEventListener("click", () => {

  playerOne = playerOneInput.value.trim();
  playerTwo = playerTwoInput.value.trim();

  if (!playerOne || !playerTwo) {
    alert("Please enter both players' names first!");
    return;
  }

  if (playerOne.toLowerCase() === playerTwo.toLowerCase()) {
    alert("Please enter two different player names!");
    return;
  }

  currentPlayer = 1;
  currentQuestion = 0;

  answersOne = [];
  answersTwo = [];

  showQuestion();

});


/* DISPLAY QUESTION */

function showQuestion() {

  if (currentQuestion >= questions.length) {

    if (currentPlayer === 1) {
      showPassScreen();
    } else {
      showResults();
    }

    return;
  }

  const question = questions[currentQuestion];

  const playerName =
    currentPlayer === 1 ? playerOne : playerTwo;

  currentPlayerText.textContent =
    `${playerName.toUpperCase()}'S TURN`;

  questionCounter.textContent =
    `QUESTION ${currentQuestion + 1} OF ${questions.length}`;

  questionCategory.textContent = question.category;
  questionText.textContent = question.question;

  choiceA.textContent = question.a;
  choiceB.textContent = question.b;
  choiceBoth.textContent = "BOTH! ♡";

  progressFill.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

  showScreen(questionScreen);

}


/* RECORD ANSWER */

function selectAnswer(answer) {

  if (currentPlayer === 1) {
    answersOne.push(answer);
  } else {
    answersTwo.push(answer);
  }

  currentQuestion++;

  showQuestion();

}


choiceA.addEventListener("click", () => {
  selectAnswer("a");
});

choiceB.addEventListener("click", () => {
  selectAnswer("b");
});

if (choiceBoth) {
  choiceBoth.addEventListener("click", function () {
    selectAnswer("both");
  });
}


/* PASS THE PHONE */

function showPassScreen() {

  passMessage.textContent =
    `${playerOne} has finished! Please pass the phone to ${playerTwo}. Make sure ${playerTwo} cannot see the previous answers.`;

  showScreen(passScreen);

}


continueButton.addEventListener("click", () => {

  currentPlayer = 2;
  currentQuestion = 0;

  showQuestion();

});


/* SHOW RESULTS */

function showResults() {

  let matches = 0;

  answerComparison.innerHTML = "";

  questions.forEach((question, index) => {

    const answerOne = answersOne[index];
    const answerTwo = answersTwo[index];

    const matched = answerOne === answerTwo;

    if (matched) {
      matches++;
    }

    function getAnswerText(answer) {

      if (answer === "a") {
        return question.a;
      }

      if (answer === "b") {
        return question.b;
      }

      return `${question.a} + ${question.b} ♡`;

    }

    const selectedOne = getAnswerText(answerOne);
    const selectedTwo = getAnswerText(answerTwo);

    const item = document.createElement("div");

    item.className =
      `comparison-item ${matched ? "match" : ""}`;

    item.innerHTML = `
      <h3>${index + 1}. ${question.question}</h3>

      <div class="comparison-answer">
        <strong>${playerOne}:</strong> ${selectedOne}
      </div>

      <div class="comparison-answer">
        <strong>${playerTwo}:</strong> ${selectedTwo}
      </div>

      <span class="match-label">
        ${matched ? "♡ MATCH!" : "✦ DIFFERENT PICKS"}
      </span>
    `;

    answerComparison.appendChild(item);

  });


  const percentage =
    Math.round((matches / questions.length) * 100);

  matchScore.textContent = `${percentage}%`;

  if (percentage === 100) {

    matchMessage.textContent =
      "Perfect match! You two think alike! 💗";

  } else if (percentage >= 80) {

    matchMessage.textContent =
      "Almost perfectly in sync! You have so much in common! ✨";

  } else if (percentage >= 60) {

    matchMessage.textContent =
      "A lovely match! You share plenty of favorites. 💕";

  } else if (percentage >= 40) {

    matchMessage.textContent =
      "Different choices, but that's what makes things interesting! 🌷";

  } else {

    matchMessage.textContent =
      "Opposites attract! You have lots of new things to discover about each other. 💫";

  }

  showScreen(resultScreen);

}


/* PLAY AGAIN */

playAgainButton.addEventListener("click", () => {

  currentPlayer = 1;
  currentQuestion = 0;

  answersOne = [];
  answersTwo = [];

  showScreen(introScreen);

});


/* INITIAL STATE */

showScreen(introScreen);
