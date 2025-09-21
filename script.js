const character = document.getElementById("character");

character.addEventListener("click", () => {
  character.classList.toggle("paused");
});