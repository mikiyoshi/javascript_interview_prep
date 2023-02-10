/*
var (function scoped)
- global scope
- function scope

const, let (block scoped)
- global scope
- function scope
- block scope // for loop, if else, while loop
*/

function getTotal() {
  console.log('multiplier: ', multiplier);
  console.log('total: ', total);

  let total = 0;

  for (var i = 0; i < 10; i++) {
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }

  return total;
}

getTotal();
