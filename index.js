const grid = document.querySelector(".grid");

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

createGrid(16);

const reset = document.querySelector("#reset");

reset.addEventListener("click", (event) => {
  document.querySelectorAll(".square").forEach((element) => {
    element.classList.remove("hover");
  });
});

const size = document.querySelector("#size");

size.addEventListener("click", () => {
  let response = parseInt(prompt("Enter your size under 100: "));

  if (response > 100) {
    response = parseInt(
      prompt("The number is too big, please enter the number below 100: ")
    );
  } else if (response < 1) {
    response = parseInt(
      prompt("The number is too low, please enter the bigger than 0: ")
    );
  }

  removeGrid();
  createGrid(response);
});
