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
    return(computerSelection)
}

function getPlayerChoice () {
    playerSelection = (prompt("Will you play rock, paper or scissors?", "rock")).toLowerCase();
    return(playerSelection);
}

console.log("You chose " + getPlayerChoice() + ". The computer chose " + getComputerChoice() + ". " + playRound(playerSelection, computerSelection) + " " + describeGame (gameOutcome, computerSelection));

function playRound (playerSelection, computerSelection) {  
    
    if (computerSelection == playerSelection) {
        gameOutcome = "draw";
        return(`It's a ${gameOutcome}.`)
    }
    
    else if (computerSelection == "rock") {
        (playerSelection == "paper") ?
            gameOutcome = "win" :
            gameOutcome = "lose";
            return(`You ${gameOutcome}!`);
    }
    
    else if (computerSelection == "paper") {
        (playerSelection == "rock") ?
            gameOutcome = "lose" :
            gameOutcome = "win";
            return(`You ${gameOutcome}!`);

    }
    else if (computerSelection == "scissors") {
        (playerSelection == "rock") ?
            gameOutcome = "win" :
            gameOutcome = "lose";
            return(`You ${gameOutcome}!`);

    }
}

function describeGame (gameOutcome, computerSelection) {
    
    if ((gameOutcome == "win" && computerSelection == "rock") || (gameOutcome == "lose" && computerSelection == "paper")) {
        return("Paper covers rock.");        
    }        
    else if ((gameOutcome == "win" && computerSelection == "paper") || (gameOutcome == "lose" && computerSelection == "scissors")) {
        return("Scissors cut paper.");        
    }
    else if ((gameOutcome == "win" && computerSelection == "scissors") || (gameOutcome == "lose" && computerSelection == "rock")) {
        return("Rock crushes scissors.");        
    }
    else {
        return("You chose alike.");
    }        
}

