// All imports, getting elements
const sortingContainer = document.getElementById("sorting-container");
const speed = document.getElementById("speed");
const generateArrayButton = document.getElementsByClassName("btn")[0];
const bubbleButton = document.getElementsByClassName("btn")[1];
const selectionButton = document.getElementsByClassName("btn")[2];
const quickButton = document.getElementsByClassName("btn")[3];
const mergeButton = document.getElementsByClassName("btn")[4];

// All Variables
const screenWidth = window.innerWidth; // 1536
const sortingContainerWidth = screenWidth - 400;
let sortArray;

// Helper Functions
const randomIntFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const swap = (array, i, j) => {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

const waitForNextLine = async () => {
	await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, speed.value)
	);
};

// All functions
const generateArray = () => {
	// Resetting elements in sorting-container
	sortingContainer.innerHTML = "";

	const arrayLength = randomIntFromInterval(5, 75);

	sortArray = [];
	for (let i = 0; i < arrayLength; i++) {
		sortArray.push(randomIntFromInterval(40, 600));

		var node = document.createElement("div");
		node.classList.add("array-element");
		// subtraction because of margin of 2px each side of bar
		node.style.width = `${
			(sortingContainerWidth - arrayLength * 4) / arrayLength
		}px`;
		node.style.height = `${sortArray[i]}px`;

		if (arrayLength < 41) {
			const sizeText =
				arrayLength < 10
					? 32
					: arrayLength < 20
					? 24
					: arrayLength < 30
					? 16
					: 12;
			node.innerText = `${sortArray[i]}`;
			node.style.fontSize = `${sizeText}px`;
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

// To load a random array when screen is loaded
window.onload = generateArray();
