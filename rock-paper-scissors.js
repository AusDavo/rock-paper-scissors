function getComputerChoice() {
  randomBelowThree = Math.floor(Math.random() * 3);
  randomBelowThree < 1
    ? (computerSelection = "rock")
    : randomBelowThree < 2
    ? (computerSelection = "paper")
    : (computerSelection = "scissors");
  return computerSelection;
}
function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection) {
    gameOutcome = "draw";
    return `It's a ${gameOutcome}.`;
  } else if (computerSelection == "rock") {
    playerSelection == "paper" ? (gameOutcome = "win") : (gameOutcome = "lose");
    return `You ${gameOutcome}!`;
  } else if (computerSelection == "paper") {
    playerSelection == "rock" ? (gameOutcome = "lose") : (gameOutcome = "win");
    return `You ${gameOutcome}!`;
  } else if (computerSelection == "scissors") {
    playerSelection == "rock" ? (gameOutcome = "win") : (gameOutcome = "lose");
    return `You ${gameOutcome}!`;
  }
}

function describeGame(gameOutcome, computerSelection) {
  if (
    (gameOutcome == "win" && computerSelection == "rock") ||
    (gameOutcome == "lose" && computerSelection == "paper")
  ) {
    return "Paper covers rock.";
  } else if (
    (gameOutcome == "win" && computerSelection == "paper") ||
    (gameOutcome == "lose" && computerSelection == "scissors")
  ) {
    return "Scissors cut paper.";
  } else if (
    (gameOutcome == "win" && computerSelection == "scissors") ||
    (gameOutcome == "lose" && computerSelection == "rock")
  ) {
    return "Rock crushes scissors.";
  } else {
    return "You chose alike.";
  }
}

let playerSelection = "";
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
let i = 0;
let winCount = 0;
let drawCount = 0;

function announceWinnerOrDraw(winCount, drawCount, i) {
  if (winCount + drawCount / 2 == i / 2) {
    return "I declare this tournament a draw.";
  } else if (winCount + drawCount / 2 > i / 2) {
    return "I declare you the winner!";
  } else {
    return "The computer is the winner!";
  }
}

function incrementAndReport() {
  i++;

  let roundDescription = playRound(
    playerSelection,
    getComputerChoice(winCount, drawCount, i)
  );
  let choicesCompared = describeGame(gameOutcome, computerSelection);

  gameOutcome == "win" ? winCount++ : null;
  gameOutcome == "draw" ? drawCount++ : null;

  if (i < 5) {
    let msg = (document.getElementById(
      "gameResults"
    ).textContent += `Round ${i}: You chose ${playerSelection}. The computer chose ${computerSelection}. ${roundDescription} ${choicesCompared}`);
  } else {
    document.getElementById(
      "gameResults"
    ).textContent += `Round ${i}: You chose ${playerSelection}. The computer chose ${computerSelection}. ${roundDescription} ${choicesCompared}
        Game over. You won ${winCount} of ${i} games and drew ${drawCount}. ${announceWinnerOrDraw()}`;
  }
}

buttonRock.addEventListener("click", function () {
  playerSelection = "rock";
  console.log("rock");
  if (i < 5) {
    incrementAndReport();
  }
});

buttonPaper.addEventListener("click", function () {
  playerSelection = "paper";
  if (i < 5) {
    incrementAndReport();
  }
});

buttonScissors.addEventListener("click", function () {
  playerSelection = "scissors";
  if (i < 5) {
    incrementAndReport();
  }
});
