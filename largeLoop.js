'use strict';

function largeLoop() {
  let res = 0;
  for (let i = 0; i < 40000; i++) {
    for (let j = 0; j < 40000; j++) {
      res += i*j
    }
  }
  return res
}

console.log(largeLoop());
// 639968000401775400
// JavaScript run fast! But the result is wrong.
// The correct answer is 639968000400000000