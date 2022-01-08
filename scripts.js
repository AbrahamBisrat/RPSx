// This will be a game of Rock paper scissors 
// At the beginning it was all empty, and Abraham Happened lol



const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const player = "player";
const computer = "computer";
const maxScore = 3; // You might want this to be an input from the user later on

let randomPick = () => Math.floor(Math.random() * 3) + 1;
let cPick;
let playerSelection;

function humanPlay(){
    playerSelection = rock;
    // more to come, since we are gonna be asking the user for input later.
    return playerSelection;
}

function computerPlay(){
    let randNum = randomPick();
    cPick = randNum === 1 ? "rock" : randNum === 2 ? "paper" : randNum === 3 ?  "scissors" : "error";
    return cPick;
}


function computeWinner(player, computer){
    player = player.toLowerCase();

    if(player === computer) return;
    else if(player === rock && computer === scissors) return true;
    else if(player === paper && computer === rock) return true;
    else if(player === scissors && computer === paper) return true;
    
    else if(player === rock && computer === paper) return false;
    else if(player === paper && computer === scissors) return false;
    else if(player === scissors && computer === rock) return false;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let finalWinner;

    while(computerScore < maxScore && playerScore < maxScore){
        let currentWinner = computeWinner(humanPlay(), computerPlay());
        if(currentWinner) playerScore++;
        else if(currentWinner === false) computerScore++;
        if(playerScore === maxScore) finalWinner = player;
        else if(computerScore === maxScore) finalWinner = computer;
        console.log("H : " + playerSelection);
        console.log("C : " + cPick);
        currentWinner === true ? console.log("player Won!") : currentWinner === false ? console.log("Computer Won! ") : console.log("Draw!")
        console.log("H : " + playerScore + "\t C: " + computerScore);
        console.log(" \n");
    }
    displayWinner(finalWinner);
}

function displayWinner(winner){
    if(winner === player){
        console.log(`\n You Won! ${playerSelection.toUpperCase()} beats ${cPick.toUpperCase()} !`);
    }
    else if(winner === computer){
        console.log(`\n You Lose! ${cPick.toUpperCase()} beats ${playerSelection.toUpperCase()} !`);
    }
    else{
        console.log(`\n SAME TOOLS => ${cPick.toUpperCase()}`)
    }
}


game();

