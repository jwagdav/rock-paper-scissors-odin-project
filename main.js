function computerTurn() {

    const computerChoice = Math.ceil(Math.random() * 3);

    if(computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else if (computerChoice === 3) {
        return "scissors";
    }
}

function playerChoice() {
    const playerInput = Window.prompt("Choose rock, paper, or scissors");
    
    if(playerInput.toLowerCase() == "rock") {
        return "rock";
    } else if(playerInput.toLowerCase() == "paper") {
        return "paper";
    } else if (playerInput.toLowercase() == "scissors") {
        return "scissors";
    } else {
        alert("Please choose rock, paper, or scissors");
        return undefined;
    }
}

function TrackScore() {

    PlayRound();
    let playerScore = 0;
    let computerScore = 0;
    let numOfTies = 0;

    if(PlayRound() == "win") {
        playerScore++;
    } else if(PlayRound() == "loss") {
        computerScore++;
    } else {
        numOfTies++;
    }

    console.log(`The score is: Player: ${playerScore} Computer: ${computerScore} Tie: ${numOfTies}`);
}

function PlayRound(playerChoice, computerTurn) {
    

    switch (playerSelection) {
        case "rock" :
            if(computerSelection == "rock") {
                return "tie";
            } else if (computerSelection == "paper") {
                return "loss";
            } else {
                return "win";
            }

        break;

        case "paper" :
            if(computerSelection == "rock") {
                return "win";
            } else if (computerSelection == "paper") {
                return "tie";
            } else {
                return "loss";
            }
        break;

        case "scissors" :
            if(computerSelection == "rock") {
                return "loss";
            } else if (computerSelection == "paper") {
                return "win";
            } else {
                return "tie";
            }
        break;

        default : 
            return "tie";
        
    }
    
    PlayRound();
    TrackScore();
}