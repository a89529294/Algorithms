// Find biggest suqare that fills up the whole rectangle (Euclidean Algorithm)

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
