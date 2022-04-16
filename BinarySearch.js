//Speed is O(log n)
//log is base 2

const list = [1, 3, 5, 7, 9];

function binarySearch(list, target) {
  let leftIdx = 0;
  let rightIdx = list.length - 1;
  while (leftIdx <= rightIdx) {
    const midIdx = parseInt((leftIdx + rightIdx) / 2);
    if (list[midIdx] === target) return midIdx;
    else if (list[midIdx] < target) leftIdx = midIdx + 1;
    else rightIdx = midIdx - 1;
  }
  return null;
}

console.log(binarySearch(list, 11));
