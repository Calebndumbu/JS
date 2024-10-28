//length
const fruits = ["Banana", "orange", "Mangoes", "Apple"];
console.log(fruits.length);

//array to string. Convert array to a comma separated values
const cars = ["Toyota", "Voxwagen", "BMW", "Ferrari", "Aston Martin"];
console.log(cars.toString());

//array at(). The at() method returns the same as [].
console.log(cars[2]);
console.log(cars[3]);

//It behaves just like toString(), but you can specify the separator:
console.log(cars.join("*"));

//pop() method removes the last element from an array:
console.log(fruits.pop());

//The push() method adds a new element to an array (at the end):
// The push() method returns the new array length:
console.log(fruits.push("Pineapple"));
console.log(fruits);

//Shift() method removes the first array element
//and "shifts" all other elements to a lower index.

//Returns the shifted value
console.log(fruits.shift());
console.log(fruits);

//unshift() method adds a new element to an array (at the beginning),
// and "unshifts" older elements:

//Returns the length of new array
console.log(fruits.unshift("Water melon"));
console.log(fruits);

// The length property provides an easy way to append
//a new element to an array:
fruits[fruits.length] = "Lemon";
console.log(fruits);

// The concat() method creates a new array by merging (concatenating)
// existing arrays:

//doesnt change the original arrays but returns a new one
const girls = ["Vanessa", "Mbithe"];
const boys = ["Calvin", "Muuo"];
const myChildren = girls.concat(boys);
console.log(myChildren);

//takes several args
const parents = ["Caleb", "Stella"];
const myFamily = girls.concat(boys, parents);
console.log(myFamily);

//doesnt change the original arrays but returns a new one
console.log(girls);

//concat accepts strings
moreGirls = girls.concat("Christina");
console.log(moreGirls);

//copywithin
fruits.copyWithin(2, 0);
console.log(fruits);
let arr = [1, 2, 3, 4, 5];

// Copy elements starting from index 3 to index 0
arr.copyWithin(0, 3);
console.log(arr); // Output: [4, 5, 3, 4, 5]

//flattening is useful when you want to convert a
//multi-dimensional array into a one-dimensional array.

const myArr = [
  [1, 2],
  [2, 3],
  [5, 8],
];
const newArray = myArr.flat();
console.log(myArr);
console.log(newArray);

const myNewArr = [1, 2, 3, 4, 5];
const myArrNew = myNewArr.flatMap((x) => [x, x * 10]);
console.log(myArrNew);

//splice
const newFruits = ["Banana", "Orange", "Apple", "Mango"];
newFruits.splice(2, 1, "Lemon", "Kiwi");
console.log(newFruits);

newFruits.splice(0, 1);
console.log(newFruits);

// The difference between the new toSpliced() method
// and the old splice() method is that the new method
// creates a new array, keeping the original array unchanged,
//  while the old method altered the original array.
const months = ["Jan", "Feb", "mar", "Apr", "May"];
const spliced = months.toSpliced(0, 1);
console.log(spliced);

//The slice() method slices out a piece of an array into a new array:
const citrus = fruits.slice(1);
console.log(citrus);
