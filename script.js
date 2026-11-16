
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
      document.getElementById("error-message")
        .textContent =
        "Not our special day, lablab. Try again! ♡";

      document.getElementById("password-input").value = "";
    }
  });

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

function renderMemories() {
  const grid = document.getElementById("memory-grid");

  grid.innerHTML = memories.map(memory => `
    <article class="memory-card ${memory.type}">
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
    </article>
  `).join("");
}

function showTimeline() {
  renderMemories();

  document.getElementById("memorydex-timeline")
    .classList.remove("hidden");

  document.querySelector(".hero")
    .classList.add("hidden");

  document.getElementById("memorydex-timeline")
    .scrollIntoView({ behavior: "smooth" });
}

function backToHome() {
  document.getElementById("memorydex-timeline")
    .classList.add("hidden");

  document.querySelector(".hero")
    .classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
