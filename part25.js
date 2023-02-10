'use strict';

// Question:

// What does using 'strict made' do to your code?
// What are the benefits of using 'strict made'?

// Main purpose:
// Enforce stricter parsing and error handling in your code
// 1. Prevents the use of global variables

city = 'London';
console.log('city: ', city);
// var, let, const

// strict mode
// error

// not strict mode
// city:  London

function myFunc(a, a, b) {
  console.log('a, a, b: ', a, a, b);
  // strict mode
  // error

  // not strict mode
  // a, a, b:  2 2 3
}

myFunc(1, 2, 3);

delete Object.prototype;
// fail fast & fail loudly

// strict mode
// error

// not strict mode
// false // tested only web browser
