// Find the max of a list O(n)
// Remove that item from the list
// Repeat the process n times
// SelectionSort speed therefore is O(n^2)

const list = [1, 3, 7, 0, 2, 2];

function findMax(list) {
  let max = Number.NEGATIVE_INFINITY;
  let maxIdx = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
      maxIdx = i;
    }
  }
  return maxIdx;
}

function selectionSort(list) {
  const newList = list.slice();
  const sortedList = [];
  while (newList.length) {
    const idx = findMax(newList);
    sortedList.push(newList[idx]);
    newList.splice(idx, 1);
  }
  return sortedList;
}

console.log(selectionSort(list));
