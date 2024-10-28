//Array.indexOf() returns -1 if the item is
//not found. If the item is present more than once,
//it returns the position of the first occurrence.

const fruits = ["Apple", "orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position);

position = fruits.lastIndexOf("Apple") + 1;
console.log(position);

console.log(fruits.includes("Mango"));

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(first);

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast((x) => x > 40);
console.log(high);
