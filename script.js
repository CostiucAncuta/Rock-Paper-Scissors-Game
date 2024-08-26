const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;
let playerChoice = null;

function playGame() {
  if (!playerChoice) {
    alert("Please first choose between ROCK, PAPER and SCISSORS !");
    return;
  }
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  resultDisplay.classList.remove("greenText", "redText");

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "YOU WIN!";
    playerScore++;
    resultDisplay.classList.add("greenText");
  } else {
    result = "YOU LOSE!";
    computerScore++;
    resultDisplay.classList.add("redText");
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  playerChoice = null;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = "";
  playerDisplay.textContent = "";
  computerDisplay.textContent = "";
  resultDisplay.classList.remove("greenText", "redText");
  playerChoice = null;
}

document.getElementById("rock").addEventListener("click", function () {
  playerChoice = "rock";
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
});

document.getElementById("paper").addEventListener("click", function () {
  playerChoice = "paper";
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
});
document.getElementById("scissors").addEventListener("click", function () {
  playerChoice = "scissors";
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
});

document.getElementById("playButton").addEventListener("click", playGame);
document.getElementById("playAgain").addEventListener("click", resetGame);
