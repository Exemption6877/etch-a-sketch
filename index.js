const grid = document.querySelector(".grid");

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    for (let k = 0; k < num; k++) {
      const square = document.createElement("div");

      square.classList.add("square");
      line.appendChild(square);
    }
    grid.appendChild(line);
  }
}

createGrid(16);

// do it by creating a whole div with row of smaller divs
