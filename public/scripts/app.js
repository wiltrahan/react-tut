'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  return a + b;
};

// this keyword - no longer bound

var user = {
  name: 'Willis',
  cities: ['Fall River', 'North Providence', 'Pawtucket'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());
console.log(user.cities);

var multiplier = {
  numbers: [4, 6, 8],
  multiply: function multiply(multiplyBy) {
    return this.numbers.map(function (number) {
      return number * multiplyBy;
    });
  }
};
console.log(multiplier.multiply(4));
