// IIFE
// IIFE: Immediately Invoked Function Expression // 即座に呼び出される関数式

function doubleNumber(num) {
  return num * 2;
}
console.log('doubleNumber: ', doubleNumber(5));
// doubleNumber:  10
console.log(
  'IIFE: ',
  (function doubleNumber(num) {
    return num * 2;
  })(10)
);
// IIFE: 20;
// IIFE: 下記のコードですぐ結果が出る
// (function doubleNumber(num) {
//   return num * 2;
// })(10)

// it's sample jQuery
(function () {
  function getTotal(a, b) {
    return a + b;
  }

  var $ = 'currency';

  if (true) console.log('hello world');
})();
// hello world
