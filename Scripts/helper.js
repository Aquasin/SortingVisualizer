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
