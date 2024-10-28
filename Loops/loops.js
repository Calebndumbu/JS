const cats = ["leopard", "Cheater", "Panther", "Lion", "Jaguar", "Tigers"];

//for of lop
for (const cat of cats) {
  // console.log(cat);
}

//map
function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper);
// console.log(upperCats);

//filter
function lCat(cat) {
  return cat.toLowerCase().startsWith("l");
}

const filtered = cats.filter(lCat);
// console.log(filtered);

//using fxn expressions
const filtered1 = cats.filter((cat) => cat.toLowerCase().startsWith("l"));
console.log("Using fxn expression with filter: " + filtered1);

const upperCats1 = cats.map((cat) => cat.toUpperCase());
console.log("\nUppercase using fxn expressions: " + upperCats1);

//the standard for loop
console.log("\nUsing standard for loop");

let myFavoriteCats = "My favourite cats species are: ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    myFavoriteCats += ` and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]},`;
  }
}

console.log(myFavoriteCats);
