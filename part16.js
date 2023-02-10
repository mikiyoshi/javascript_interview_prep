// sample 1

var color;

console.log('color: ', color);
// color:  undefined

var color = 'blue';

console.log('color: ', color);
// color:  blue

// sample 2
var getProduct;

// console.log('getProduct: ', getProduct(2, 3)); // this is error

var getProduct = function (num1, num2) {
  return num1 * num2;
};
console.log('getProduct: ', getProduct(2, 3));
// getProduct:  6

// sample 3
console.log('getProduct2: ', getProduct2(4, 8));
// getProduct2:  32

function getProduct2(num1, num2) {
  return num1 * num2;
}

// sample 4
var globalVar = 'global';

(function () {
  var name = 'Jen';

  var getAge = function () {
    return '30';
  };

  function getState() {
    return 'Delaware';
  }
})();
