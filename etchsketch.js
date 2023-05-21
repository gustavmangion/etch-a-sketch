const grid = document.querySelector(".grid");

function addGridChildren(n) {}

function clearGrid() {
	while (grid.firstChild) {
		grid.removeChild(grid.lastChild);
	}
}

addGridChildren(2);
