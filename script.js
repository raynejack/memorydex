
/* ==========================================
   MEMORYDEX — RAYMOND × VINCENT
========================================== */

// PASSWORD
const correctPassword = "October 29, 2026";

document.getElementById("password-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredPassword =
      document.getElementById("password-input").value;

    if (enteredPassword === correctPassword) {
      document.getElementById("password-screen")
        .classList.add("hidden");

      document.getElementById("memorydex-home")
        .classList.remove("hidden");
    } else {
      document.getElementById("error-message").textContent =
        "Not our special day, lablab. Try again! ♡";

      document.getElementById("password-input").value = "";
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
    type: "normal",
    photoCount: 1
  },
  {
    number: "002",
    date: "AUGUST 5, 2026",
    pokemon: "Ralts",
    art: "🤍",
    title: "Day One Together",
    location: "Our first OJT day",
    story: "Our first day of OJT together. A new chapter began, even when we were still just getting to know each other.",
    type: "psychic",
    photoCount: 2
  },
  {
    number: "003",
    date: "AUGUST 12, 2026",
    pokemon: "Kirlia",
    art: "💚",
    title: "Out on Site",
    location: "Our first site visit",
    story: "Our first site visit together. Another little memory added to our growing story.",
    type: "psychic",
    photoCount: 2
  },
  {
    number: "004",
    date: "SEPTEMBER 11, 2026",
    pokemon: "Oshawott",
    art: "🦦",
    title: "The First Card Expo",
    location: "Ayala Malls Manila Bay",
    story: "Our first card expo, our first Pokémon TCG pack, and a new shared interest to enjoy together.",
    type: "water",
    photoCount: 3
  },
  {
    number: "005",
    date: "SEPTEMBER 18, 2026",
    pokemon: "Gardevoir",
    art: "💚",
    title: "A Little Closer",
    location: "SM Makati · Nitori Store",
    story: "Another card expo, but this time with a first hand-holding moment. A small gesture that became a big memory.",
    type: "psychic",
    photoCount: 4
  },
  {
    number: "006",
    date: "OCTOBER 1, 2026",
    pokemon: "Jirachi",
    art: "⭐",
    title: "A Wish Come True",
    location: "SM Mall of Asia",
    story: "Our first Pokémon Center pop-up together. A little Pokémon adventure worth remembering.",
    type: "steel",
    photoCount: 3
  },
  {
    number: "007",
    date: "OCTOBER 4, 2026",
    pokemon: "Charcadet",
    art: "🔥",
    title: "The Furina Guy",
    location: "CosplayMania · SMX Convention",
    story: "Our CosplayMania date, complete with the unforgettable Furina guy inside joke.",
    type: "fire",
    photoCount: 4
  },
  {
    number: "008",
    date: "OCTOBER 18, 2026",
    pokemon: "Feebas",
    art: "🐟",
    title: "Picture Perfect",
    location: "One Ayala Convention Area",
    story: "Our first Pokémon card-inspired photobooth. A little snapshot of a memory we get to keep.",
    type: "water",
    photoCount: 5
  },
  {
    number: "009",
    date: "OCTOBER 24, 2026",
    pokemon: "Milotic",
    art: "🌊",
    title: "A Japanese-Inspired Date",
    location: "GALA Foodpark",
    story: "A special date in yukata. A different kind of adventure, and another lovely day together.",
    type: "water",
    photoCount: 5
  },
  {
    number: "010",
    date: "OCTOBER 29, 2026",
    pokemon: "Altaria",
    art: "☁️",
    title: "Officially Us",
    location: "Sleepzone · Intramuros",
    story: "The day we officially became boyfriends. Our first kiss, and the beginning of our next chapter.",
    type: "special",
    photoCount: 1
  },
  {
    number: "011",
    date: "OCTOBER 30, 2026",
    pokemon: "Armarouge",
    art: "🛡️",
    title: "Celebrating You",
    location: "ADELA BRB · A Studios Popup Photobooth",
    story: "A day to celebrate Vincent's school achievement, with dinner and three photobooths to remember it by.",
    type: "fire",
    photoCount: 6
  },
  {
    number: "012",
    date: "OCTOBER 31, 2026",
    pokemon: "Ceruledge",
    art: "⚔️",
    title: "Our First Staycation",
    location: "Winterhotel · Quiapo",
    story: "Our first staycation together. A cozy memory to close the first chapter of our Memorydex.",
    type: "fire",
    photoCount: 3
  }
];


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
      aria-label="Open memory: ${memory.title}"
    >
      <div class="memory-card-top">
        <span class="memory-number">NO. ${memory.number}</span>
        <span class="memory-symbol">♡</span>
      </div>

      <div class="memory-art">${memory.art}</div>

      <p class="memory-date">${memory.date}</p>

      <h3>${memory.title}</h3>

      <div class="pokemon-name">${memory.pokemon}</div>

      <p class="memory-location">📍 ${memory.location}</p>

      <p class="memory-story">${memory.story}</p>

      <div class="memory-card-bottom">
        <span>RAYMOND × VINCENT</span>
        <span>♡ ${memory.number}</span>
      </div>

      <p class="card-click-hint">CLICK TO OPEN MEMORY ↗</p>
    </article>
  `).join("");

  grid.querySelectorAll(".memory-card").forEach(card => {
    card.addEventListener("click", () => {
      openMemory(Number(card.dataset.memoryIndex));
    });

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMemory(Number(card.dataset.memoryIndex));
      }
    });
  });
}


// ==========================================
// LOAD PHOTO WITH EXTENSION FALLBACK
// Supports .jpg, .jpeg, .JPG and .JPEG
// ==========================================

function displayPhoto() {
  const memory = memories[currentMemoryIndex];

  const photo = document.getElementById("modal-photo");
  const placeholder =
    document.getElementById("modal-photo-placeholder");
  const controls =
    document.getElementById("gallery-controls");
  const counter =
    document.getElementById("photo-counter");

  const photoNumber = currentPhotoIndex + 1;

  const basePath =
    `images/memory-${memory.number}-${photoNumber}`;

  const extensions = [".jpg", ".jpeg", ".JPG", ".JPEG"];

  let extensionIndex = 0;

  photo.onload = null;
  photo.onerror = null;

  photo.classList.add("hidden");
  placeholder.classList.add("hidden");

  placeholder.querySelector("p").textContent =
    "Our photo will live here.";

  function tryNextExtension() {
    if (extensionIndex >= extensions.length) {
      photo.classList.add("hidden");
      placeholder.classList.remove("hidden");

      placeholder.querySelector("p").textContent =
        "Photo not found. Please check the filename.";

      return;
    }

    const imagePath = basePath + extensions[extensionIndex];
    extensionIndex++;

    photo.src = imagePath;
  }

  photo.onload = function() {
    photo.classList.remove("hidden");
    placeholder.classList.add("hidden");
  };

  photo.onerror = function() {
    tryNextExtension();
  };

  photo.alt =
    `Memory ${memory.number}: ${memory.title}, photo ${photoNumber}`;

  tryNextExtension();

  // Update counter
  counter.textContent =
    `${photoNumber} / ${memory.photoCount}`;

  // Show navigation
  controls.classList.remove("hidden");

  // Disable arrows at the beginning and end
  document.getElementById("prev-photo").disabled =
    currentPhotoIndex === 0;

  document.getElementById("next-photo").disabled =
    currentPhotoIndex === memory.photoCount - 1;
}


// ==========================================
// NEXT / PREVIOUS PHOTO
// ==========================================

function changePhoto(direction) {
  const memory = memories[currentMemoryIndex];

  const newIndex = currentPhotoIndex + direction;

  if (newIndex < 0 || newIndex >= memory.photoCount) {
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


// Close by clicking outside the modal
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
  const modal = document.getElementById("memory-modal");

  if (modal.classList.contains("hidden")) return;

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
