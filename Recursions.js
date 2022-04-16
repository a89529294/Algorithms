// Divide & Conquer:
// 1. Figure out a simple case as the base case.
// 2. Figure out how to reduce your problem and get to the base case.

// Example 1. Find biggest suqare that fills up the whole rectangle (Euclidean Algorithm)
// In this example the base case is where one side is a multiple of the other side

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
// base case is when the array is one single item

// assuming arr is an array of numbers
function sum(arr) {
  if (arr.length === 0) return 0;
  else {
    return arr[0] + sum(arr.slice(1));
  }
}

console.log(sum([1, 2, 3, 101]));
