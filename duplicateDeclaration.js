/**
 * Created by yangm11 on 4/9/2018.
 */
'use strict';

function foo(a, b, c) {
  console.log(a);
  var b, c; // duplicate declaration. It will not pass compilation in C/C++, Go.
  //let c; // This is another reason you should use 'let' instead of 'var'
  console.log(b);
  console.log(c);
}

foo(1, 2, 3);

if (typeof module !== 'undefined' && module.parent) {

} else {
  // test code go here
}