function getComputerChoice() {
  const randomNumber = Math.random();

  // by using 0.33 each choice has approximately equal
  //  chance of  being selected

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "scissors";
  } else {
    return "paper";
  }
}
console.log(getComputerChoice());

function getHumanChoice() {
  let choice;

  while (true) {
    choice = prompt("Enter rock,paper or scissors").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    } else {
      console.log("Please enter 'rock', 'paper' or 'scissors'");
    }
  }
}
console.log(getHumanChoice());
