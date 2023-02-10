// jsbin.com
// tested at jsbin.com

// old JS
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName('BODY')[0];
    var button = document.createElement('BUTTON');
    button.innerHTML = 'Button ' + i;
    button.onclick = function () {
      alert('This is button ' + i);
    };
    body.appendChild(button);
  }
}

createButtons();

// new JS
// function createButtons() {
//   for (let i = 1; i <= 5; i++) { // at new JS "let" will correct
//     var body = document.getElementsByTagName('BODY')[0];
//     var button = document.createElement('BUTTON');
//     button.innerHTML = 'Button ' + i;
//     button.onclick = function () {
//       alert('This is button ' + i);
//     };
//     body.appendChild(button);
//   }
// }

// createButtons();
