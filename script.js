const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector("#restart-button");
const xscore = document.querySelector("#xscore");
const oscore = document.querySelector("#oscore");
//loops through the cells
const startGame = () => {
  cells.forEach((cell) => cell.addEventListener("click", clickedCell));
};

function clickedCell() {
  e.target.cell;
}
