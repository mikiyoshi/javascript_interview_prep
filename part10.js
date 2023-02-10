// jsbin.com
// tested at jsbin.com
// Auto-run JS のチェックは外すこと

function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName('BODY')[0];
    var button = document.createElement('BUTTON');
    button.innerHTML = 'Button ' + i;

    // IIFE なし // どの
    // button.onclick = function () {
    //   alert('This is button ' + i);
    // };

    // IIFE あり
    // (function (num) {
    //   button.onclick = function () {
    //     alert('This is button ' + num);
    //   };
    // })(i);

    // 外部 function
    addClickFunctionality(button, i);
    body.appendChild(button);
  }
}

createButtons();

function addClickFunctionality(button, num) {
  button.onclick = function () {
    alert('This is button ' + num);
  };
}
