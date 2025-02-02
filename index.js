const grid = document.querySelector(".grid");

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    const line = document.createElement("div");
    for (let k = 0; k < num; k++) {
      const square = document.createElement("div");

      square.classList.add("square");
      line.appendChild(square);
    }
    grid.appendChild(line);
  }
}

// do it by creating a whole div with row of smaller divs
