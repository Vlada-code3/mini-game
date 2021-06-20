const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const colors = [
  "#ff3377",
  "#990033",
  "#66ccff",
  "#ff6666",
  "#e60000",
  "#6666ff",
  "#ff0066",
  "#cc0066",
  "#b300b3",
  "#3366ff",
  "#862d86",
  "#cc00cc",
  "#9933ff"
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = "#ffb3ff";
  element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
