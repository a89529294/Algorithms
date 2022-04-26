// Use Divide & Conquer to sort an arry
// two base cases: arrays with less than 2 elements & arrays with exactly 2 elements
// Its speed depends on the pivot we choose, in this case we use arr[0]
// If we choose the first element the speed is O(n^2)
// If we choose a random element the speed is O(nlog(n))

//ascending order
function quickSort(arr) {
  if (arr.length < 2) return arr;
  if (arr.length === 2) return arr[0] <= arr[1] ? arr : [arr[1], arr[0]];
  const leftArr = [];
  const rightArr = [];
  for (let i = 1; i < arr.length; i++) {
    arr[0] > arr[i] ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
  }
  return [...quickSort(leftArr), arr[0], ...quickSort(rightArr)];
}

console.log(quickSort([0, 99, -1]));
