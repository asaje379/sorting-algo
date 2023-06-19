const data = [5, 3, 2, 7, 0, -1, 10, 3, 6, 8, 3];

function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }

  return arr;
}

console.log(selectionSort(data));
console.log(data);
