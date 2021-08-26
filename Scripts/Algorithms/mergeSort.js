const mergeSort = async () => {
	// Disable all buttons
	disableAllButtons();
	mergeButton.style.borderBottom = "2px solid #fff";

	await mergePartition(0, sortArray.length - 1);

	// Enable all buttons
	enableAllButtons();
	mergeButton.style.borderBottom = "none";
};

const mergePartition = async (start, end) => {
	if (start < end) {
		const mid = Math.floor((start + end) / 2);

		await waitForNextLine();

		await mergePartition(start, mid);
		await mergePartition(mid + 1, end);

		await merge(start, mid, end);
	}
};

const merge = async (start, mid, end) => {
	const n1 = mid - start + 1;
	const n2 = end - mid;

	let a = [];
	let b = [];

	for (let i = 0; i < n1; i++) {
		a.push(sortArray[start + i]);
	}
	for (let i = 0; i < n2; i++) {
		b.push(sortArray[mid + 1 + i]);
	}

	let i = 0;
	let j = 0;
	let k = start;
	let iBar;
	let jBar;

	while (i < n1 && j < n2) {
		iBar = document.getElementsByClassName("array-element")[i + start];
		iBar.style.backgroundColor = "red";
		await waitForNextLine();
		jBar = document.getElementsByClassName("array-element")[j + mid + 1];
		jBar.style.backgroundColor = "red";
		await waitForNextLine();

		if (a[i] < b[j]) {
			sortArray[k] = a[i];
			k++;
			i++;
		} else {
			sortArray[k] = b[j];
			k++;
			j++;
		}
	}
	while (i < n1) {
		sortArray[k] = a[i];
		k++;
		i++;
	}
	while (j < n2) {
		sortArray[k] = b[j];
		k++;
		j++;
	}
	// await waitForNextLine();
	let color = "green";
	if (start === 0 && k === sortArray.length) color = "blue";
	for (let i = start; i < k; i++) {
		await waitForNextLine();
		let kBar = document.getElementsByClassName("array-element")[i];
		kBar.style.backgroundColor = color;
		kBar.style.height = `${sortArray[i]}px`;
		// To change the value of swapped bars
		kBar.innerHTML = `${sortArray[i]}`;
	}
};
