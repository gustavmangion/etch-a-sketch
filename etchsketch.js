const grid = document.querySelector(".grid");

function addGridChildren(n) {
	for (let i = 0; i < n; i++) {
		const row = document.createElement("div");
		for (let j = 0; j < n; j++) {
			const row_child = document.createElement("div");
			row_child.className = "grid-child";
			row.appendChild(row_child);
		}
		grid.appendChild(row);
	}
}

function clearGrid() {
	while (grid.firstChild) {
		grid.removeChild(grid.lastChild);
	}
}

const resizeBtn = document.getElementById("grid-size-confirm");
resizeBtn.addEventListener("click", updateGrid);

const gridSizeInput = document.getElementById("grid-size");

function updateGrid() {
	let newGridSize = gridSizeInput.value;
	clearGrid();
	addGridChildren(newGridSize);
}

updateGrid();
