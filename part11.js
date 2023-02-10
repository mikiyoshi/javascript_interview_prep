// jsbin.com
// tested at jsbin.com

// old JS
function createButtons() {
  for (let i = 1; i <= 5; i++) {
    // var is old JS // new is "let" will work
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
