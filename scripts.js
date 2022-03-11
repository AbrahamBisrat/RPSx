function p(text){
    console.log(text);
}
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const player = "player";
const computer = "computer";
let maxScore = 3; // You might want this to be an input from the user later on

let randomPick = () => Math.floor(Math.random() * 3) + 1;
let cPick;
let playerSelection;
// let finalWinner;
let playerScore = 0;
let computerScore = 0;

// buttons for user input
const rockB = document.querySelector('#rock-btn');
const paperB = document.querySelector('#paper-btn');
const scissorB = document.querySelector('#scissor-btn');

rockB.addEventListener('click', clickHandler);
paperB.addEventListener('click', clickHandler);
scissorB.addEventListener('click', clickHandler);

function clickHandler(event){
    playerSelection = this.value;
    playRound(this.value);
}

function humanPlay(){
    // playerSelection = takeUserInput();
    // playerSelection = rock;
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
    p('compute Winner : ' + player + "  : :  " + computer);
    if(player === computer) return;
    else if(player === rock && computer === scissors) return true;
    else if(player === paper && computer === rock) return true;
    else if(player === scissors && computer === paper) return true;
    
    else if(player === rock && computer === paper) return false;
    else if(player === paper && computer === scissors) return false;
    else if(player === scissors && computer === rock) return false;
    else p('edge case caught ' + player + "  :  " + computer);
}
function displayStatus(cWinner, plScore, compScore){
    p("H : " + playerSelection);
    p("C : " + cPick);
    cWinner === true ? p("player Won!") : 
                cWinner === false ? p("Computer Won! ") 
                : console.log("Draw!");
    p("H : " + plScore + "\t C: " + compScore);
    p(" \n");
}
function playRound(userMove){
    if(computerScore < maxScore && playerScore < maxScore){
        // p("Player selection : " + userMove);
        let winner = computeWinner(userMove, computerPlay());
        p('playRound : ' + winner);
        if(winner === true) playerScore++;
        if(winner === false) computerScore++;
        displayStatus(winner, playerScore, computerScore);
        // check for winner
        if(playerScore === maxScore) displayWinner(player);
        else if(computerScore === maxScore) displayWinner(computer);
    } else{
        p('Game has been concluded, refresh tab for another one.')
        // reset game function;
    }
}

function displayWinner(winner){
    if(winner === player){
        p(`\n You Won! ${playerSelection.toUpperCase()} beats ${cPick.toUpperCase()} !`);
    }
    else if(winner === computer){
        p(`\n You Lose! ${cPick.toUpperCase()} beats ${playerSelection.toUpperCase()} !`);
    }
    else{
        p(`\n SAME TOOLS => ${cPick.toUpperCase()}`)
    }
}

// game(3);