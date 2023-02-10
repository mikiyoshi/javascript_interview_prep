var num = 50;

function logNumber() {
  // at terminal // num:  undefined
  // var num;
  // console.log('num: ', num);
  // num = 100;
  //
  // at terminal // num:  50
  // console.log('num: ', num);
  //
  // at terminal // num:  undefined
  console.log('num: ', num);
  var num = 100;
  //
  // at terminal // error
  // console.log('num: ', num);
  // let num = 100;
}

logNumber();
