function tripleAdd(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

console.log('tripleAdd: ', tripleAdd(10)(20)(30));
// tripleAdd:  60

function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log('tripleAdd1: ', tripleAdd1(10, 20, 30));
// tripleAdd:  60

function quadrupleAdd(num1) {
  return function (num2) {
    return function (num3, num4) {
      return num1 + num2 + num3 + num4;
    };
  };
}

console.log('quadrupleAdd: ', quadrupleAdd(10)(20)(30, 40));
// quadrupleAdd:  100
