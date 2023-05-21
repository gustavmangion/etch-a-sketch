const grid = document.querySelector(".grid");

function addGridChildren(n) {
	for (let i = 0; i < n; i++) {
		const row = document.createElement("div");
		for (let j = 0; j < n; j++) {
			const rowChild = document.createElement("div");
			rowChild.className = "grid-child";
			rowChild.style.backgroundColor = generateRandomColor();
			rowChild.dataset.originalColor = "test";
			rowChild.addEventListener("mouseover", hoverColorChange);
			row.appendChild(rowChild);
		}
		grid.appendChild(row);
	}
}

function generateRandomColor() {
	return `rgb(${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)})`;
}

function clearGrid() {
	while (grid.firstChild) {
		grid.removeChild(grid.lastChild);
	}
}

function hoverColorChange(e) {
	let backgroundColor = window
		.getComputedStyle(e.target, null)
		.getPropertyValue("background-color");
	let index = backgroundColor.lastIndexOf(",");
	let currentOpacity = backgroundColor.substring(index + 1).slice(0, -1);
	let newColor = "";
	//when opacity is 1, it is omitted from rgb string}
	if (currentOpacity > 1) {
		newColor = backgroundColor.slice(0, -1) + ", " + 0.9 + ")";
	} else if (currentOpacity == 0) return;
	else {
		console.log(backgroundColor.substring(0, index + 2));
		newColor =
			backgroundColor.substring(0, index + 2) +
			Math.round((currentOpacity - 0.1) * 10) / 10 +
			")";
	}
	console.log(newColor);
	e.target.style.backgroundColor = newColor;
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
console.log(generateRandomColor());
console.log(generateRandomColor());
console.log(generateRandomColor());
console.log(generateRandomColor());
console.log(generateRandomColor());
console.log(generateRandomColor());
