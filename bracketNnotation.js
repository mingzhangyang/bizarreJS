/**
 * Created by yangm11 on 2/14/2018.
 */
'use strict';

let v = {
  x: '3',
  y: '4',
  z: '5'
};

console.log(v['x']);
console.log(v[['x']]);
console.log(v[[['x']]]);
console.log(v[[[[[['x']]]]]]);

if (typeof module !== 'undefined' && module.parent) {

} else {
  // test code go here
}