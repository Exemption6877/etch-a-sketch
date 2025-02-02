const grid = document.querySelector(".grid");
const size = document.querySelector("#size");
const reset = document.querySelector("#reset");

let currentGridSize = 16;

createGrid(currentGridSize);

reset.addEventListener("click", (event) => {
  removeGrid();
  createGrid(currentGridSize);
});

size.addEventListener("click", () => {
  removeGrid();
  createGrid(getResponse());
});

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    for (let k = 0; k < num; k++) {
      const square = document.createElement("div");
      square.addEventListener("mouseover", (event) => {
        square.classList.add("hover");
      });

      square.classList.add("square");
      line.appendChild(square);
    }
    grid.appendChild(line);
  }
}

function removeGrid() {
  const squares = document.querySelectorAll(".square");
  const lines = document.querySelectorAll(".line");

  squares.forEach((element) => {
    element.remove();
  });

  lines.forEach((element) => {
    element.remove();
  });
}

function getResponse() {
  let response = parseInt(prompt("Enter your grid size under 100: "));

  if (!Number.isInteger(response)) {
    alert("Type error, please provide a number below 100: ");
    return getResponse();
  } else if (response > 100) {
    alert("The number is too big, please enter the number below 100: ");
    return getResponse();
  } else if (response < 1) {
    alert("The number is too low, please enter the bigger than 0: ");
    return getResponse();
  } else {
    currentGridSize = response;
    return currentGridSize;
  }
}
