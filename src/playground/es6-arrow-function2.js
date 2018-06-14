// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  return a + b;
};

// this keyword - no longer bound

const user = {
  name: 'Willis',
  cities: ['Fall River', 'North Providence', 'Pawtucket'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());
console.log(user.cities);

const multiplier = {
  numbers: [4, 6, 8],
  multiply(multiplyBy) {
    return this.numbers.map((number) => number * multiplyBy);
  }
};
console.log(multiplier.multiply(4));