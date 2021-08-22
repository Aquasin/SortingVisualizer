// All imports, getting elements
const sortingContainer = document.getElementById("sorting-container");
const speed = document.getElementById("speed");
// const speedText = document.getElementById("speedText");
const generateArrayButton = document.getElementsByClassName("btn")[0];
const bubbleButton = document.getElementsByClassName("btn")[1];
const selectionButton = document.getElementsByClassName("btn")[2];
const quickButton = document.getElementsByClassName("btn")[3];
const mergeButton = document.getElementsByClassName("btn")[4];

// All Variables
const screenWidth = window.innerWidth; // 1536
const sortingContainerWidth = screenWidth - 400;
let sortArray;

// All functions
const generateArray = () => {
	// Resetting elements in sorting-container
	sortingContainer.innerHTML = "";
	// console.log("HI");

	const arrayLength = randomIntFromInterval(5, 75);
	// const arrayLength = 25;

	sortArray = [];
	for (let i = 0; i < arrayLength; i++) {
		sortArray.push(randomIntFromInterval(20, 600));

		var node = document.createElement("div");
		node.classList.add("array-element");
		node.style.width = `${
			(sortingContainerWidth - arrayLength * 4) / arrayLength
		}px`;
		node.style.height = `${sortArray[i]}px`;

		if (arrayLength < 31) {
			node.innerText = `${sortArray[i]}`;
			node.style.color = "#fff";
		}

		sortingContainer.appendChild(node);
	}
};

const disableAllButtons = () => {
	generateArrayButton.disabled = true;
	bubbleButton.disabled = true;
	selectionButton.disabled = true;
	quickButton.disabled = true;
	mergeButton.disabled = true;
};

const enableAllButtons = () => {
	generateArrayButton.disabled = false;
	bubbleButton.disabled = false;
	selectionButton.disabled = false;
	quickButton.disabled = false;
	mergeButton.disabled = false;
};
// All Changes to elements
// sortingContainer.style.width = `${sortingContainerWidth}px`;

// To load a random array when screen is loaded
window.onload = generateArray();
