let computerSelection = computerTurn();
let playerSelection = PlayerChoice();

function computerTurn() {

    let computerSelection = Math.ceil(Math.random() * 3);
    
    if(computerSelection=== 1) {
        computerSelection = "rock";
    } else if (computerSelection === 2) {
        computerSelection = "paper";
    } else if (computerSelection === 3) {
        computerSelection ="scissors";
    }

    return computerSelection;
}

function PlayerChoice() {
    const playerSelection = window.prompt("Choose rock, paper, or scissors").toLowerCase();
    return playerSelection;
}

console.log(playerSelection, computerSelection);

function PlayRound(playerSelection, computerSelection) {

    if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("loss");
    }else if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log("win");
    }else if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("loss");
    }else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("win");
    }else if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("win");
    }else if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log("loss");
    } else{
        console.log("tie");
    }
    
}

PlayRound();


