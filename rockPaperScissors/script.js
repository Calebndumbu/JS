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

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  let roundwinner;

  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  if (humanChoice === computerChoice) {
    resultDiv.innerHTML = `Both chose ${humanChoice}.`;
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundwinner = "human";

    resultDiv.innerHTML = `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}`;
    humanScore++;
  } else {
    roundwinner = "computer";
    computerScore++;
    resultDiv.innerHTML = `You Lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}`;
  }

  scoreDiv.innerHTML = `Score: You -> ${humanScore}, Computer -> ${computerScore}`;
  //check for winner
  if (humanScore === 5) {
    annouceWinner("You are the overall winner!");
  } else if (computerScore === 5) {
    annouceWinner("The computer is the overall winner");
  }
}

function annouceWinner(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = message;

  //disable buttons after game ends
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
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
