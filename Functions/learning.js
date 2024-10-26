function getCoodinates() {
  return [10, 20];
}

const coordinates = getCoodinates();
console.log(coordinates[0]);

function getPerson() {
  return { name: "Charmer Beats", age: 30 };
}

const person = getPerson();
console.log(person.age);

function outer() {
  return function inner() {
    console.log("Hello from inner");
  };
}

const inn = outer();
inn();

const caleb = function (name) {
  console.log(`Hello ${name}`);
};

caleb("kyama");
