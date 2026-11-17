
// ==========================================
// MEMORYDEX — LETTERS TO EACH OTHER
// Supabase connection and letter management
// ==========================================

// SUPABASE CONNECTION
const SUPABASE_URL = "https://mmzedmqetlkpznrvepxn.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_FK2I8P0-XviUoQlhpxRKWA_gNm003YK";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

// ==========================================
// PAGE ELEMENTS
// ==========================================

const loginScreen = document.getElementById("login-screen");
const dashboard = document.getElementById("letters-dashboard");

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");

const welcomeMessage = document.getElementById("welcome-message");

const writeLetterButton = document.getElementById("write-letter-button");
const letterFormContainer = document.getElementById("letter-form-container");
const letterForm = document.getElementById("letter-form");
const letterFormHeading = document.getElementById("letter-form-heading");

const letterTitleInput = document.getElementById("letter-title");
const letterContentInput = document.getElementById("letter-content");

const saveLetterButton = document.getElementById("save-letter-button");
const cancelLetterButton = document.getElementById("cancel-letter-button");

const lettersList = document.getElementById("letters-list");
const lettersMessage = document.getElementById("letters-message");
const logoutButton = document.getElementById("logout-button");

// ==========================================
// CURRENT USER AND EDITING STATE
// ==========================================

let currentUser = null;
let editingLetterId = null;

// ==========================================
// HELPER FUNCTIONS
// ==========================================

// GET DISPLAY NAME FROM SUPABASE USER METADATA
function getDisplayName(user) {
  return user?.user_metadata?.display_name || "Friend";
}

function showLoginMessage(message) {
  loginMessage.textContent = message;
}

function showLettersMessage(message) {
  lettersMessage.textContent = message;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function showDashboard(user) {
  currentUser = user;

  loginScreen.classList.add("hidden");
  dashboard.classList.remove("hidden");

  welcomeMessage.textContent =
    `Welcome back, ${getDisplayName(user)} ♡`;

  showLoginMessage("");
  loadLetters();
}

function showLogin() {
  currentUser = null;

  dashboard.classList.add("hidden");
  loginScreen.classList.remove("hidden");

  letterFormContainer.classList.add("hidden");
  letterForm.reset();

  editingLetterId = null;
}

// ==========================================
// LOGIN
// ==========================================

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  loginButton.disabled = true;
  loginButton.textContent = "SIGNING IN...";
  showLoginMessage("");

  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) throw error;

    showDashboard(data.user);
    passwordInput.value = "";

  } catch (error) {
    console.error("Login error:", error);
    showLoginMessage(
      "Unable to sign in. Please check your email and password."
    );

  } finally {
    loginButton.disabled = false;
    loginButton.textContent = "SIGN IN ♡";
  }
});

// ==========================================
// LOGOUT
// ==========================================

logoutButton.addEventListener("click", async function () {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error("Logout error:", error);
    showLettersMessage("Unable to sign out. Please try again.");
    return;
  }

  showLogin();
});

// ==========================================
// OPEN NEW LETTER FORM
// ==========================================

writeLetterButton.addEventListener("click", function () {
  editingLetterId = null;

  letterForm.reset();
  letterFormHeading.textContent = "A New Letter";
  saveLetterButton.textContent = "SAVE LETTER ♡";

  letterFormContainer.classList.remove("hidden");

  letterFormContainer.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// ==========================================
// CANCEL LETTER FORM
// ==========================================

cancelLetterButton.addEventListener("click", function () {
  letterForm.reset();

  editingLetterId = null;
  letterFormContainer.classList.add("hidden");
});

// ==========================================
// SAVE OR UPDATE LETTER
// ==========================================

letterForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (!currentUser) return;

  const title = letterTitleInput.value.trim();
  const content = letterContentInput.value.trim();

  if (!title || !content) {
    showLettersMessage("Please complete your letter first.");
    return;
  }

  saveLetterButton.disabled = true;
  saveLetterButton.textContent = "SAVING...";

  try {
    if (editingLetterId) {
      // UPDATE EXISTING LETTER
      const { error } = await supabaseClient
        .from("letters")
        .update({
          title: title,
          content: content
        })
        .eq("id", editingLetterId);

      if (error) throw error;

      showLettersMessage("Your letter has been updated ♡");

    } else {
      // CREATE NEW LETTER
      const { error } = await supabaseClient
        .from("letters")
        .insert({
          user_id: currentUser.id,
          title: title,
          content: content
        });

      if (error) throw error;

      showLettersMessage("Your letter has been saved ♡");
    }

    letterForm.reset();
    editingLetterId = null;
    letterFormContainer.classList.add("hidden");

    await loadLetters();

  } catch (error) {
    console.error("Saving letter error:", error);
    showLettersMessage("Something went wrong. Please try again.");

  } finally {
    saveLetterButton.disabled = false;
    saveLetterButton.textContent = "SAVE LETTER ♡";
  }
});

// ==========================================
// LOAD ALL LETTERS
// ==========================================

async function loadLetters() {
  if (!currentUser) return;

  lettersList.replaceChildren();

  const loadingMessage = document.createElement("p");
  loadingMessage.className = "empty-letters";
  loadingMessage.textContent = "Opening our letters... ♡";

  lettersList.appendChild(loadingMessage);

  try {
    const { data: letters, error } = await supabaseClient
      .from("letters")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    lettersList.replaceChildren();

    if (!letters || letters.length === 0) {
      const emptyMessage = document.createElement("div");
      emptyMessage.className = "empty-letters";
      emptyMessage.textContent =
        "No letters here yet. Maybe you can write the first one? ♡";

      lettersList.appendChild(emptyMessage);
      return;
    }

    letters.forEach(function (letter) {
      renderLetter(letter);
    });

  } catch (error) {
    console.error("Loading letters error:", error);

    lettersList.replaceChildren();

    const errorMessage = document.createElement("div");
    errorMessage.className = "empty-letters";
    errorMessage.textContent =
      "We couldn't load the letters. Please refresh and try again.";

    lettersList.appendChild(errorMessage);
  }
}

// ==========================================
// DISPLAY A LETTER
// ==========================================

function renderLetter(letter) {
  const card = document.createElement("article");
  card.className = "letter-card";

  const title = document.createElement("h3");
  title.textContent = letter.title;

  const meta = document.createElement("p");
  meta.className = "letter-meta";

  const author = letter.user_id === currentUser.id
    ? "YOU"
    : "YOUR PERSON";

  meta.textContent =
    `${author} · ${formatDate(letter.created_at)}`;

  const body = document.createElement("p");
  body.className = "letter-body";
  body.textContent = letter.content;

  card.appendChild(title);
  card.appendChild(meta);
  card.appendChild(body);

  // Only the letter's author sees these controls.
  if (letter.user_id === currentUser.id) {
    const actions = document.createElement("div");
    actions.className = "letter-actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.textContent = "EDIT";

    editButton.addEventListener("click", function () {
      editLetter(letter);
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "DELETE";

    deleteButton.addEventListener("click", function () {
      deleteLetter(letter.id);
    });

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    card.appendChild(actions);
  }

  lettersList.appendChild(card);
}

// ==========================================
// EDIT LETTER
// ==========================================

function editLetter(letter) {
  editingLetterId = letter.id;

  letterTitleInput.value = letter.title;
  letterContentInput.value = letter.content;

  letterFormHeading.textContent = "Edit Your Letter";
  saveLetterButton.textContent = "UPDATE LETTER ♡";

  letterFormContainer.classList.remove("hidden");

  letterFormContainer.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// ==========================================
// DELETE LETTER
// ==========================================

async function deleteLetter(letterId) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this letter? This cannot be undone."
  );

  if (!confirmed || !currentUser) return;

  try {
    const { error } = await supabaseClient
      .from("letters")
      .delete()
      .eq("id", letterId);

    if (error) throw error;

    showLettersMessage("Letter deleted.");
    await loadLetters();

  } catch (error) {
    console.error("Deleting letter error:", error);
    showLettersMessage("Unable to delete this letter. Please try again.");
  }
}

// ==========================================
// CHECK EXISTING LOGIN SESSION
// ==========================================

async function initializeLettersPage() {
  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    console.error("Session error:", error);
    showLogin();
    return;
  }

  if (data.session) {
    showDashboard(data.session.user);
  } else {
    showLogin();
  }
}

// Listen for sign-in and sign-out changes.
supabaseClient.auth.onAuthStateChange(function (_event, session) {
  if (session) {
    showDashboard(session.user);
  } else {
    showLogin();
  }
});

// Start the page.
initializeLettersPage();
