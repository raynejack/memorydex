
/* ==========================================
   MEMORYDEX — RAYMOND × VINCENT
========================================== */

// ==========================================
// PASSWORD
// REMEMBER UNLOCK DURING BROWSER SESSION
// ==========================================

const correctPassword = "October 29, 2026";

const passwordScreen = document.getElementById("password-screen");
const memorydexHome = document.getElementById("memorydex-home");

const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const errorMessage = document.getElementById("error-message");


// Check whether the website was already unlocked
// during this browser session

if (sessionStorage.getItem("memorydexUnlocked") === "true") {

  passwordScreen.classList.add("hidden");
  memorydexHome.classList.remove("hidden");

}


// Password submission

passwordForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const enteredPassword = passwordInput.value.trim();

  if (
    enteredPassword.toLowerCase() ===
    correctPassword.toLowerCase()
  ) {

    // Remember the successful unlock
    sessionStorage.setItem("memorydexUnlocked", "true");

    passwordScreen.classList.add("hidden");
    memorydexHome.classList.remove("hidden");

    errorMessage.textContent = "";

  } else {

    errorMessage.textContent =
      "Not our special day, lablab. Try again! ♡";

    passwordInput.value = "";

  }

});


// ==========================================
// OUR 12 MEMORYDEX ENTRIES
// ==========================================

const memories = [
  {
    number: "001",
    date: "JULY 29, 2026",
    pokemon: "Ditto",
    art: "🟣",
    title: "The First Conversation",
    location: "Our OJT chat",
    story: "It started with a simple conversation about OJT. Little did we know how many memories would follow.",
    type: "normal"
  },
  {
    number: "002",
    date: "AUGUST 5, 2026",
    pokemon: "Ralts",
    art: "🤍",
    title: "Day One Together",
    location: "Our first OJT day",
    story: "Our first day of OJT together. A new chapter began, even when we were still just getting to know each other.",
    type: "psychic"
  },
  {
    number: "003",
    date: "AUGUST 12, 2026",
    pokemon: "Kirlia",
    art: "💚",
    title: "Out on Site",
    location: "Our first site visit",
    story: "Our first site visit together. Another little memory added to our growing story.",
    type: "psychic"
  },
  {
    number: "004",
    date: "SEPTEMBER 11, 2026",
    pokemon: "Oshawott",
    art: "🦦",
    title: "The First Card Expo",
    location: "Ayala Malls Manila Bay",
    story: "Our first card expo, our first Pokémon TCG pack, and a new shared interest to enjoy together.",
    type: "water"
  },
  {
    number: "005",
    date: "SEPTEMBER 18, 2026",
    pokemon: "Gardevoir",
    art: "💚",
    title: "A Little Closer",
    location: "SM Makati · Nitori Store",
    story: "Another card expo, but this time with a first hand-holding moment. A small gesture that became a big memory.",
    type: "psychic"
  },
  {
    number: "006",
    date: "OCTOBER 1, 2026",
    pokemon: "Jirachi",
    art: "⭐",
    title: "A Wish Come True",
    location: "SM Mall of Asia",
    story: "Our first Pokémon Center pop-up together. A little Pokémon adventure worth remembering.",
    type: "steel"
  },
  {
    number: "007",
    date: "OCTOBER 4, 2026",
    pokemon: "Charcadet",
    art: "🔥",
    title: "The Furina Guy",
    location: "CosplayMania · SMX Convention",
    story: "Our CosplayMania date, complete with the unforgettable Furina guy inside joke.",
    type: "fire"
  },
  {
    number: "008",
    date: "OCTOBER 18, 2026",
    pokemon: "Feebas",
    art: "🐟",
    title: "Picture Perfect",
    location: "One Ayala Convention Area",
    story: "Our first Pokémon card-inspired photobooth. A little snapshot of a memory we get to keep.",
    type: "water"
  },
  {
    number: "009",
    date: "OCTOBER 24, 2026",
    pokemon: "Milotic",
    art: "🌊",
    title: "A Japanese-Inspired Date",
    location: "GALA Foodpark",
    story: "A special date in yukata. A different kind of adventure, and another lovely day together.",
    type: "water"
  },
  {
    number: "010",
    date: "OCTOBER 29, 2026",
    pokemon: "Altaria",
    art: "☁️",
    title: "Officially Us",
    location: "Sleepzone · Intramuros",
    story: "The day we officially became boyfriends. Our first kiss, and the beginning of our next chapter.",
    type: "special"
  },
  {
    number: "011",
    date: "OCTOBER 30, 2026",
    pokemon: "Armarouge",
    art: "🛡️",
    title: "Celebrating You",
    location: "ADELA BRB · A Studios Popup Photobooth",
    story: "A day to celebrate Vincent's school achievement, with dinner and three photobooths to remember it by.",
    type: "fire"
  },
  {
    number: "012",
    date: "OCTOBER 31, 2026",
    pokemon: "Ceruledge",
    art: "⚔️",
    title: "Our First Staycation",
    location: "Winterhotel · Quiapo",
    story: "Our first staycation together. A cozy memory to close the first chapter of our Memorydex.",
    type: "fire"
  }
];


// ==========================================
// EXACT PHOTO FILENAMES
// ==========================================

const photoFiles = {
  "001": ["memory-001-1.jpg"],

  "002": [
    "memory-002-1.jpg",
    "memory-002-2.jpeg"
  ],

  "003": [
    "memory-003-1.jpeg",
    "memory-003-2.jpeg"
  ],

  "004": [
    "memory-004-1.jpg",
    "memory-004-2.jpg",
    "memory-004-3.jpg"
  ],

  "005": [
    "memory-005-1.jpeg",
    "memory-005-2.jpeg",
    "memory-005-3.jpg",
    "memory-005-4.jpg"
  ],

  "006": [
    "memory-006-1.jpg",
    "memory-006-2.jpg",
    "memory-006-3.jpg"
  ],

  "007": [
    "memory-007-1.jpg",
    "memory-007-2.jpg",
    "memory-007-3.jpg",
    "memory-007-4.jpeg"
  ],

  "008": [
    "memory-008-1.jpg",
    "memory-008-2.jpg",
    "memory-008-3.jpg",
    "memory-008-4.jpg",
    "memory-008-5.jpg"
  ],

  "009": [
    "memory-009-1.jpg",
    "memory-009-2.jpg",
    "memory-009-3.jpg",
    "memory-009-4.jpg",
    "memory-009-5.jpg"
  ],

  "010": [
    "memory-010-1.jpeg"
  ],

  "011": [
    "memory-011-1.jpeg",
    "memory-011-2.jpeg",
    "memory-011-3.jpeg",
    "memory-011-4.jpeg",
    "memory-011-5.jpeg",
    "memory-011-6.jpeg"
  ],

  "012": [
    "memory-012-1.jpg",
    "memory-012-2.jpg",
    "memory-012-3.jpg"
  ]
};


// ==========================================
// PHOTOS THAT NEED 90° CLOCKWISE ROTATION
// ==========================================

const rotatedPhotos = new Set([
  "004-1",
  "004-3",
  "005-3",
  "006-2",
  "006-3",
  "007-2",
  "007-3",
  "008-1",
  "008-5",
  "009-1",
  "009-3",
  "009-4",
  "012-1",
  "012-2",
  "012-3"
]);


// ==========================================
// GALLERY STATE
// ==========================================

let currentMemoryIndex = 0;
let currentPhotoIndex = 0;


// ==========================================
// DISPLAY MEMORY CARDS
// ==========================================

function renderMemories() {

  const grid = document.getElementById("memory-grid");

  grid.innerHTML = memories.map((memory, index) => `
    <article
      class="memory-card ${memory.type}"
      data-memory-index="${index}"
      tabindex="0"
      role="button"
      aria-pressed="false"
      aria-label="Reveal memory ${memory.number}: ${memory.title}"
    >

      <div class="memory-card-inner">

        <div class="memory-card-back">
          <span class="memory-number">
            NO. ${memory.number}
          </span>
        </div>

        <div class="memory-card-front">

          <div class="memory-card-top">
            <span class="memory-number">
              MEMORY NO. ${memory.number}
            </span>

            <span class="memory-symbol">♡</span>
          </div>

          <div class="memory-art">
            ${memory.art}
          </div>

          <p class="memory-date">
            ${memory.date}
          </p>

          <h3>${memory.title}</h3>

          <div class="pokemon-name">
            ${memory.pokemon}
          </div>

          <p class="memory-location">
            📍 ${memory.location}
          </p>

          <p class="memory-story">
            ${memory.story}
          </p>

          <div class="memory-card-bottom">
            <span>RAYMOND × VINCENT</span>
            <span>♡ ${memory.number}</span>
          </div>

          <p class="card-click-hint">
            CLICK TO VIEW PHOTOS ↗
          </p>

        </div>

      </div>

    </article>
  `).join("");


  // CARD INTERACTIONS

  grid.querySelectorAll(".memory-card").forEach(card => {

    function handleCardInteraction() {

      const index = Number(card.dataset.memoryIndex);

      if (card.classList.contains("flipped")) {

        openMemory(index);

      } else {

        card.classList.add("flipped");

        card.setAttribute("aria-pressed", "true");

        const memory = memories[index];

        card.setAttribute(
          "aria-label",
          `Open memory ${memory.number}: ${memory.title}`
        );

      }
    }


    card.addEventListener("click", handleCardInteraction);


    card.addEventListener("keydown", event => {

      if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        handleCardInteraction();

      }

    });

  });

}


// ==========================================
// DISPLAY PHOTO
// ==========================================

function displayPhoto() {

  const memory = memories[currentMemoryIndex];

  const photos = photoFiles[memory.number] || [];

  const photo = document.getElementById("modal-photo");

  const placeholder =
    document.getElementById("modal-photo-placeholder");

  const controls =
    document.getElementById("gallery-controls");

  const counter =
    document.getElementById("photo-counter");

  const filename = photos[currentPhotoIndex];

  photo.onload = null;
  photo.onerror = null;

  photo.classList.add("hidden");
  placeholder.classList.add("hidden");

  photo.style.transform = "rotate(0deg)";

  if (!filename) {

    placeholder.classList.remove("hidden");

    placeholder.querySelector("p").textContent =
      "No photo assigned to this memory.";

    controls.classList.add("hidden");

    return;
  }


  photo.onload = function() {

    photo.classList.remove("hidden");

    placeholder.classList.add("hidden");

  };


  photo.onerror = function() {

    photo.classList.add("hidden");

    placeholder.classList.remove("hidden");

    placeholder.querySelector("p").textContent =
      `Could not load ${filename}. Check that the file is in the repository root.`;

  };


  photo.alt =
    `Memory ${memory.number}: ${memory.title}, photo ${currentPhotoIndex + 1}`;


  const rotationKey =
    `${memory.number}-${currentPhotoIndex + 1}`;

  if (rotatedPhotos.has(rotationKey)) {

    photo.style.transform = "rotate(90deg)";

  } else {

    photo.style.transform = "rotate(0deg)";

  }


  photo.src = encodeURI(filename);


  counter.textContent =
    `${currentPhotoIndex + 1} / ${photos.length}`;


  controls.classList.remove("hidden");


  document.getElementById("prev-photo").disabled =
    currentPhotoIndex === 0;

  document.getElementById("next-photo").disabled =
    currentPhotoIndex === photos.length - 1;

}


// ==========================================
// NEXT / PREVIOUS PHOTO
// ==========================================

function changePhoto(direction) {

  const memory = memories[currentMemoryIndex];

  const photos = photoFiles[memory.number] || [];

  const newIndex = currentPhotoIndex + direction;

  if (newIndex < 0 || newIndex >= photos.length) {
    return;
  }

  currentPhotoIndex = newIndex;

  displayPhoto();

}


// ==========================================
// OPEN MEMORY
// ==========================================

function openMemory(index) {

  const memory = memories[index];

  if (!memory) return;

  currentMemoryIndex = index;
  currentPhotoIndex = 0;

  document.getElementById("modal-number").textContent =
    `MEMORY NO. ${memory.number}`;

  document.getElementById("modal-date").textContent =
    memory.date;

  document.getElementById("modal-title").textContent =
    memory.title;

  document.getElementById("modal-pokemon").textContent =
    `♡ ${memory.pokemon} ${memory.art}`;

  document.getElementById("modal-location").textContent =
    `📍 ${memory.location}`;

  document.getElementById("modal-story").textContent =
    memory.story;

  displayPhoto();

  document.getElementById("memory-modal")
    .classList.remove("hidden");

  document.body.classList.add("modal-open");

  document.querySelector(".modal-close").focus();

}


// ==========================================
// CLOSE MEMORY
// ==========================================

function closeMemory() {

  document.getElementById("memory-modal")
    .classList.add("hidden");

  document.body.classList.remove("modal-open");

}


// ==========================================
// CLOSE BY CLICKING OUTSIDE MODAL
// ==========================================

document.getElementById("memory-modal")
  .addEventListener("click", event => {

    if (event.target.id === "memory-modal") {
      closeMemory();
    }

  });


// ==========================================
// KEYBOARD CONTROLS
// ==========================================

document.addEventListener("keydown", event => {

  const modal =
    document.getElementById("memory-modal");

  if (modal.classList.contains("hidden")) {
    return;
  }

  if (event.key === "Escape") {
    closeMemory();
  }

  if (event.key === "ArrowRight") {
    changePhoto(1);
  }

  if (event.key === "ArrowLeft") {
    changePhoto(-1);
  }

});


// ==========================================
// NAVIGATION
// ==========================================

function showTimeline() {

  renderMemories();

  document.getElementById("memorydex-timeline")
    .classList.remove("hidden");

  document.querySelector(".hero")
    .classList.add("hidden");

  document.getElementById("memorydex-timeline")
    .scrollIntoView({
      behavior: "smooth"
    });

}


function backToHome() {

  closeMemory();

  document.getElementById("memorydex-timeline")
    .classList.add("hidden");

  document.querySelector(".hero")
    .classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
