var arr = Array.apply(null, new Array(10000)).map(Number.prototype.valueOf, 1);

function calcSqrt(i) {
  // Hard computational task
  return Math.sqrt(Math.sqrt(Math.pow(139, 4))) * i;
}

function forLoopCompareWithLength(arr) {
  for (var i = 0; i < arr.length; i++) {
    calcSqrt(arr[i]);
  }
}

function forLoopCompare2Vars(arr) {
  for (var i = 0, j = arr.length; i < j; i++) {
    calcSqrt(arr[i]);
  }
}

function forLoopCompareWithZqro(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    calcSqrt(arr[i]);
  }
}

function forLoopCompareWithMinusOne(arr) {
  for (var i = arr.length - 1; i > -1; i--) {
    calcSqrt(arr[i]);
  }
}

function forLoopCompareWithDifferentZero(arr) {
  for (var i = arr.length; i !== 0; i--) {
    // use - arr[i-1]
    calcSqrt(arr[i - 1]);
  }
}
