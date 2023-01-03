//function getComputerChoice () {
//    randomBelowThree = Math.floor(Math.random() * 3);
//    if (randomBelowThree < 1) {
//        getComputerChoice = "rock";
//    }
//    else if (randomBelowThree < 2) {
//        getComputerChoice = "paper";
//    }
//    else {
//        getComputerChoice = "scissors";
//    }
//}

let computerSelection;
let playerSelection;
let gameOutcome;

function getComputerChoice () {
    randomBelowThree = Math.floor(Math.random() * 3);
    (randomBelowThree < 1) ? computerSelection = "rock" :
    (randomBelowThree < 2) ? computerSelection = "paper" :
    computerSelection = "scissors";
}

function getPlayerChoice () {
    playerSelection = (prompt("Will you play rock, paper or scissors?", "rock")).toLowerCase();
}

getComputerChoice();

getPlayerChoice();

function playRound (playerSelection, computerSelection) {
       
    if (computerSelection == playerSelection) {
        gameOutcome = "draw";
        return(`It's a ${gameOutcome}.`)
    }
    
    else if (computerSelection == "rock") {
        (playerSelection == "paper") ? gameOutcome = "win" : gameOutcome = "lose";
    }
    
    else if (computerSelection == "paper") {
        (playerSelection == "rock") ? gameOutcome = "lose" : gameOutcome = "win";
        return(`You ${gameOutcome}!`);

    }
    else if (computerSelection == "scissors") {
        (playerSelection == "rock") ? gameOutcome = "win" : gameOutcome = "lose";
        return(`You ${gameOutcome}!`);

    }
}

console.log(playRound(playerSelection, computerSelection)); 

