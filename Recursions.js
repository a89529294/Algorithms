// Divide & Conquer:
// 1. Figure out a simple case as the base case.
// 2. Figure out how to reduce your problem and get to the base case.

// Example 1. Find biggest suqare that fills up the whole rectangle (Euclidean Algorithm)
// The base case is where one side is a multiple of the other side

function findBiggestSquare(width, height) {
  if (width % height === 0 || height % width === 0) {
    return width <= height ? width : height;
  } else {
    if (width > height) {
      const newWidth = width - parseInt(width / height) * height;
      return findBiggestSquare(newWidth, height);
    } else {
      const newHeight = height - parseInt(height / width) * width;
      return findBiggestSquare(width, newHeight);
    }
  }
}

console.log(findBiggestSquare(1680, 640));

// Example 2. Summation of an array
// base case is when the array is empty

// assuming arr is an array of numbers
function sum(arr) {
  if (arr.length === 0) return 0;
  else {
    return arr[0] + sum(arr.slice(1));
  }
}

console.log(sum([1, 2, 3, 101]));

// Example 3. Binary Search using recursion
// base case is where array[mid] === target

function binarySearch(arr, target) {
  const left = 0;
  const right = arr.length - 1;
  const mid = parseInt((left + right) / 2);

  if (arr[mid] === undefined) return "not found";
  if (arr[mid] === target) return target;
  if (arr[mid] > target) return binarySearch(arr.slice(0, mid - 1), target);
  return binarySearch(arr.slice(mid + 1), target);
}

console.log(binarySearch([-10, 1, 10, 999], 999));
console.log(binarySearch([-10, 1, 10, 999], 0));
