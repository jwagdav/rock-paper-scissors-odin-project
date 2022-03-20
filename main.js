let computerSelection;
let playerSelection;

let playerScore = 0;
let computerScore = 0;

let gameOver = false;

const btnList = document.querySelectorAll('button');
const winnerDisplay = document.querySelector('.winner');

btnList.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.getAttribute('id');
        PlayGame();
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

function PlayGame() {

    

    if(gameOver){
        return;
    }

    computerSelection = computerTurn();
    console.log(playerSelection, computerSelection);

    const resultDisplay = document.querySelector('.results');
    const scoreDisplay = document.querySelector('.score')

    if(playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        resultDisplay.textContent = 'LOSS';
        scoreDisplay.textContent = `Player : ${playerScore} Computer : ${computerScore}`;
        
    }else if(playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        resultDisplay.textContent = 'WIN';
        scoreDisplay.textContent = `Player : ${playerScore} Computer : ${computerScore}`;
        
    }else if(playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        resultDisplay.textContent = 'LOSS';
        scoreDisplay.textContent = `Player : ${playerScore} Computer : ${computerScore}`;
        
    }else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        resultDisplay.textContent = 'WIN';
        scoreDisplay.textContent = `Player : ${playerScore} Computer : ${computerScore}`;
        
    }else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        resultDisplay.textContent = 'WIN';
        scoreDisplay.textContent = `Player : ${playerScore} Computer : ${computerScore}`;
        
    }else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        resultDisplay.textContent = 'LOSS';
        scoreDisplay.textContent = `Player : ${playerScore} Computer : ${computerScore}`;
        
    } else {
        resultDisplay.textContent = 'TIE';
        scoreDisplay.textContent = `Player : ${playerScore} Computer : ${computerScore}`;
    }

    checkGameOver();
    
}

function checkGameOver(){
    if(playerScore >= 5 || computerScore >= 5){
        gameOver = true;
        let winner = playerScore >= 5 ? "player" : "computer";
        winnerDisplay.textContent = `${winner}`;
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

