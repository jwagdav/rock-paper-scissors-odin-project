let computerSelection;
let playerSelection;

let playerScore = 0;
let computerScore = 0;

const btnList = document.querySelectorAll('button');

btnList.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.getAttribute('id');
        PlayRound();
    });
});

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

function PlayRound() {

    computerSelection = computerTurn();
    console.log(playerSelection, computerSelection);


    if(playerSelection === "rock" && computerSelection === "paper") {
        console.log("loss");
        computerScore++;
    }else if(playerSelection === "rock" && computerSelection === "scissors") {
        console.log("win");
        playerScore++;
    }else if(playerSelection === "paper" && computerSelection === "scissors") {
        console.log("loss");
        computerScore++;
    }else if(playerSelection === "paper" && computerSelection === "rock") {
        console.log("win");
        playerScore++;
    }else if(playerSelection === "scissors" && computerSelection === "paper") {
        console.log("win");
        playerScore++;
    }else if(playerSelection === "scissors" && computerSelection === "rock") {
        console.log("loss");
        computerScore++;
    } else {
        console.log("tie");
    }
    
}
/*
function Game(){
    for(i = 0; i < 5; i++) {
        PlayRound();
        console.log(`The score is Player: ${playerScore} - Computer: ${computerScore}`);
    }

    if(playerScore > computerScore){
        console.log("You Won!");
    } else if (playerScore < computerScore){
        console.log("You Lost");
    } else {
        console.log("Tie Game!");
    }
}

Game();
*/

