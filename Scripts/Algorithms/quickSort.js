const quickSort = async () => {
	// Disable all buttons
	disableAllButtons();
	quickButton.style.borderBottom = "2px solid #fff";

	await quick(0, sortArray.length - 1);

	for (let i = 0; i < sortArray.length; i++) {
		await waitForNextLine();
		let iBar = document.getElementsByClassName("array-element")[i];
		iBar.style.backgroundColor = "blue";
	}

	// Enable all buttons
	enableAllButtons();
	quickButton.style.borderBottom = "none";
};

const partition = async (left, right) => {
	let pivot = sortArray[right];
	let pivotBar = document.getElementsByClassName("array-element")[right];
	pivotBar.style.backgroundColor = "#ffff00";
	await waitForNextLine();

	let i = left - 1;

	for (let j = left; j < right; j++) {
		let jBar = document.getElementsByClassName("array-element")[j];
		jBar.style.backgroundColor = "yellow";
		if (sortArray[j] < pivot) {
			i++;
			let iBar = document.getElementsByClassName("array-element")[i];
			iBar.style.backgroundColor = "yellow";
			await waitForNextLine();

			iBar.style.backgroundColor = "red";
			jBar.style.backgroundColor = "red";

			const temp = iBar.style.height;
			iBar.style.height = jBar.style.height;
			jBar.style.height = temp;

			// To change the value of swapped bars
			const value = iBar.innerHTML;
			iBar.innerHTML = jBar.innerHTML;
			jBar.innerHTML = value;

			await waitForNextLine();
			swap(sortArray, i, j);
			iBar.style.backgroundColor = "#121212";
			jBar.style.backgroundColor = "#121212";
			await waitForNextLine();
		}
		await waitForNextLine();
		jBar.style.backgroundColor = "#121212";
	}
	iBar = document.getElementsByClassName("array-element")[i + 1];
	jBar = document.getElementsByClassName("array-element")[right];
	iBar.style.backgroundColor = "red";
	jBar.style.backgroundColor = "red";
	await waitForNextLine();

	const temp = iBar.style.height;
	iBar.style.height = jBar.style.height;
	jBar.style.height = temp;

	// To change the value of swapped bars
	const value = iBar.innerHTML;
	iBar.innerHTML = jBar.innerHTML;
	jBar.innerHTML = value;

	iBar.style.backgroundColor = "#121212";
	jBar.style.backgroundColor = "#121212";
	await waitForNextLine();
	swap(sortArray, i + 1, right);

	return i + 1;
};

const quick = async (left, right) => {
	if (left < right) {
		let pi = await partition(left, right);

		await quick(left, pi - 1);
		await quick(pi + 1, right);
	}
};
