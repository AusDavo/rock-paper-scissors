function getComputerChoice () {
    randomBelowThree = Math.floor(Math.random() * 3);
    (randomBelowThree < 1) ? computerSelection = "rock" :
    (randomBelowThree < 2) ? computerSelection = "paper" :
    computerSelection = "scissors";
    return(computerSelection)
}

//function getPlayerChoice () {
//    playerSelection = (prompt("Will you play rock, paper or scissors?", "rock")).toLowerCase();
//    return(playerSelection);
//}

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

let playerSelection = "";
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");

buttonRock.addEventListener("click", function() {
    playerSelection = "rock";
    console.log('rock clicked');
    i = 0;
    winCount = 0;
    drawCount = 0;

    let roundDescription = playRound(playerSelection, getComputerChoice());

    let choicesCompared = describeGame(gameOutcome, computerSelection);

    (gameOutcome == "win") ? winCount++ : null ;
    (gameOutcome == "draw") ? drawCount++ : null ;

    alert("The computer chose " + computerSelection + ". " + roundDescription + " " + choicesCompared + " You've won " + winCount + " of " + (i +1) + " games and drawn " + drawCount + ".");
});

buttonPaper.addEventListener("click", function() {
    playerSelection = "paper";
    console.log('paper clicked');
    i = 0;
    winCount = 0;
    drawCount = 0;

    let roundDescription = playRound(playerSelection, getComputerChoice());

    let choicesCompared = describeGame(gameOutcome, computerSelection);

    (gameOutcome == "win") ? winCount++ : null ;
    (gameOutcome == "draw") ? drawCount++ : null ;

    alert("The computer chose " + computerSelection + ". " + roundDescription + " " + choicesCompared + " You've won " + winCount + " of " + (i +1) + " games and drawn " + drawCount + ".");
});

buttonScissors.addEventListener("click", function() {
    playerSelection = "scissors";
    console.log('scissors clicked');
    i = 0;
    winCount = 0;
    drawCount = 0;

    let roundDescription = playRound(playerSelection, getComputerChoice());

    let choicesCompared = describeGame(gameOutcome, computerSelection);

    (gameOutcome == "win") ? winCount++ : null ;
    (gameOutcome == "draw") ? drawCount++ : null ;

    alert("The computer chose " + computerSelection + ". " + roundDescription + " " + choicesCompared + " You've won " + winCount + " of " + (i +1) + " games and drawn " + drawCount + ".");
});

//for (let i = 0, winCount = 0, drawCount = 0; i < 5; i++) {   

//i = 0;
//winCount = 0;
//drawCount = 0;

//let roundDescription = playRound(playerSelection, getComputerChoice());

//let choicesCompared = describeGame(gameOutcome, computerSelection);

//(gameOutcome == "win") ? winCount++ : null ;
//(gameOutcome == "draw") ? drawCount++ : null ;
    
//alert("You chose " + playerSelection + ". The computer chose " + computerSelection + ". " + roundDescription + " " + choicesCompared + " You've won " + winCount + " of " + (i +1) + " games and drawn " + drawCount + ".");
  
//}

