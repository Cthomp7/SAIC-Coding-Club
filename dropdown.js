const hamburger = document.getElementById('hamburger');


if (hamburger != null) {
  hamburger.addEventListener("click", triggerDropdown);
}

function triggerDropdown() {
  console.log("triggered");
}