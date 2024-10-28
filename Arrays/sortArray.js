const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
console.log(fruits.reverse());

//toSorted does not alter the original array
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(sorted);

const reversed = fruits.toReversed();
console.log(reversed);

const points = [40, 100, 1, 5, 25, 10];
console.log(
  points.sort(function (a, b) {
    return a - b;
  })
);

console.log(
  points.sort(function (a, b) {
    return b - a;
  })
);

//sorting arrays in random order

// The value 0.5 is the midpoint of the range [0, 1].
// By subtracting 0.5, we get an approximately equal chance of
// the result being positive or negative, which gives us a 50-50
// chance to either keep the order of two elements or swap them.
// This randomization is what creates the shuffled effect.

console.log(
  points.sort(function () {
    return 0.5 - Math.random();
  })
);

// The Fisher Yates Method

for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

//find the lowest and highest value

let sorted1 = points.toSorted(function (a, b) {
  return a - b;
});

let largest = sorted1[sorted1.length - 1];
let smallest = sorted1[0];
console.log(largest, smallest);

//Sorting a whole array is a very inefficient method if you
//only want to find the highest (or lowest) value.

//using math.min()

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

//max

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

const numbers = [10, 20, 5, 3, 7];
const minNUmber = Math.min.apply(null, numbers);
console.log(minNUmber);

const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber);

const cars = [
  { type: "Volvo", year: 2008 },
  { type: "Saab", year: 2002 },
  { type: "BMW", year: 2019 },
];

let sortedCars = cars.toSorted(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toUpperCase();
  if (x > y) {
    return -1;
  }
  if (x < y) {
    return 1;
  }
  return 0;
});

console.log(sortedCars);
