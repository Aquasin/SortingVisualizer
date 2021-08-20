const selectionSort = async () => {
	// Disable all buttons
	disableAllButtons();
	selectionButton.style.borderBottom = "2px solid #fff";

	// sortArray
	let bar1, bar2, minBar;
	for (let i = 0; i < sortArray.length - 1; i++) {
		await waitForNextLine();
		bar1 = document.getElementsByClassName("array-element")[i];
		let minHeight = i;
		bar1.style.backgroundColor = "red";
		for (let j = i + 1; j < sortArray.length; j++) {
			minBar =
				document.getElementsByClassName("array-element")[minHeight];
			bar2 = document.getElementsByClassName("array-element")[j];
			bar2.style.backgroundColor = "green";
			await waitForNextLine();
			if (sortArray[j] < sortArray[minHeight]) {
				if (minHeight !== i) {
					minBar.style.backgroundColor = "#121212";
				}
				minHeight = j;
			} else {
				bar2.style.backgroundColor = "#121212";
			}
			await waitForNextLine();
		}
		minBar = document.getElementsByClassName("array-element")[minHeight];
		swap(sortArray, i, minHeight);
		const H = bar1.style.height;
		bar1.style.height = minBar.style.height;
		minBar.style.height = H;
		minBar.style.backgroundColor = "#121212";
		bar1.style.backgroundColor = "blue";
	}
	bar2.style.backgroundColor = "blue";
	// Enable all buttons
	enableAllButtons();
	selectionButton.style.borderBottom = "none";
};
