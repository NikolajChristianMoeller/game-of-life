import * as controller from "./controller.js";
let generationCount = 0;

function init() {
  console.log("Viewet kører");
}

function renderGrid(grid) {
  const board = document.querySelector("#board");
  for (let row = 0; row < controller.GRID_HEIGHT; row++) {
    for (let col = 0; col < controller.GRID_WIDTH; col++) {
      const cell = board.querySelector(
        `[data-row='${row}'][data-col='${col}']`
      );
      if (grid.get(row, col) === 1) {
        cell.style.backgroundColor = "black";
      } else {
        cell.style.backgroundColor = "white";
      }
    }
  }
}

function createBoard() {
  const board = document.querySelector("#board");
  board.style.setProperty("--GRID_HEIGHT", controller.GRID_HEIGHT);
  board.style.setProperty("--GRID_WIDTH", controller.GRID_WIDTH);
}

function iterateGenerationCount() {
  generationCount++;
  document.querySelector(
    "#count"
  ).textContent = `Generation nr: ${generationCount}`;
}

export { init, renderGrid, createBoard, iterateGenerationCount };
