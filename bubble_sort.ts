const data = [5, 3, 2, 7, 0, -1, 10, 3, 6, 8, 3];

function bubbleSort(arr: number[]) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        isSorted = false;
      }
    }
  }
}

bubbleSort(data);
console.log(data);
