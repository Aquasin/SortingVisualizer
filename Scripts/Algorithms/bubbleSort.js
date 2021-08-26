const bubbleSort = async () => {
	// Disable all buttons
	disableAllButtons();
	bubbleButton.style.borderBottom = "2px solid #fff";

	// sortArray
	let bar1;
	let bar2;
	for (let i = 1; i < sortArray.length; i++) {
		await waitForNextLine();

		for (let j = 0; j < sortArray.length - i; j++) {
			bar1 = document.getElementsByClassName("array-element")[j];
			bar2 = document.getElementsByClassName("array-element")[j + 1];
			bar1.style.backgroundColor = "red";
			bar2.style.backgroundColor = "red";
			if (sortArray[j] > sortArray[j + 1]) {
				await waitForNextLine();
				bar1.style.backgroundColor = "green";
				bar2.style.backgroundColor = "green";
				swap(sortArray, j, j + 1);
				// To change the height of swapped bars
				const H = bar1.style.height;
				bar1.style.height = bar2.style.height;
				bar2.style.height = H;
				// To change the value of swapped bars
				const value = bar1.innerHTML;
				bar1.innerHTML = bar2.innerHTML;
				bar2.innerHTML = value;
			}
			await waitForNextLine();
			bar1.style.backgroundColor = "#121212";
			bar2.style.backgroundColor = "#121212";
		}
		bar2.style.backgroundColor = "blue";
	}
	bar1.style.backgroundColor = "blue";
	// Enable all buttons
	enableAllButtons();
	bubbleButton.style.borderBottom = "none";
};
