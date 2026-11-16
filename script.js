
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

function showTimeline() {
  alert("Our 12 memories are coming soon, lablab! ♡");
}
