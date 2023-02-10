var house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Taylor',
  getPricePerSquareFoot: function () {
    // return house.price / house.squareFeet;
    return this.price / this.squareFeet;
  },
};

console.log('house.price: ', house.price);
console.log('house.getPricePerSquareFoot: ', house.getPricePerSquareFoot());
// house.price:  100000
// house.getPricePerSquareFoot:  50

// using 'this' instead of 'house'
// house.price:  100000
// house.getPricePerSquareFoot:  50
