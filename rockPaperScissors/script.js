let humanScore = 0;
let computerScore = 0;

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

// function getHumanChoice() {
//   while (true) {
//     let choice = prompt("Enter 'rock','paper' or 'scissors'").toLowerCase();
//     if (choice === "rock" || choice === "paper" || choice === "scissors") {
//       return choice;
//     } else {
//       console.log("Please enter 'rock', 'paper' or 'scissors'");
//     }
//   }
// }

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  let roundwinner;

  if (humanChoice === computerChoice) {
    console.log(`Both chose ${humanChoice}.`);
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundwinner = "human";
    humanScore++;
  } else {
    roundwinner = "computer";
    computerScore++;
  }

  if (roundwinner === "human") {
    console.log(
      `You win! ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}`
    );
    console.log(
      `You Lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice}`
    );
  }
}

document.getElementById("rock").addEventListener("click", () => {
  playRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
  playRound("paper");
});
document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors");
});
// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//   }

//   console.log(
//     `Final score: You -> ${humanScore}, computer -> ${computerScore}`
//   );
//   if (humanScore > computerScore) {
//     console.log("You are the winner");
//   } else if (computerScore > humanScore) {
//     console.log("The computer is the overall winner");
//   } else {
//     console.log("It's a tie");
//   }
// }

// playGame();
