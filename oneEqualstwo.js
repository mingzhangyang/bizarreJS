/**
 * Created by yangm11 on 2/14/2018.
 */
'use strict';
let o = {
  v: 1,
  valueOf: () => o.v++
};

console.log(o == 1); // true
console.log(o == 2); // true
console.log(o == 3); // true

if (typeof module !== 'undefined' && module.parent) {

} else {
  // test code go here
}
