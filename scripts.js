// This will be a game of Rock paper scissors 
// At the beginning it was all empty, and Abraham Happened lol


let randomPick = () => Math.floor(Math.random() * 3) + 1;
let cPick;

function computerPlay(){
    cPick = randomPick();
    let choice = cPick === 1 ? "rock" : cPick === 2 ? "paper" : cPick === 3 ?  "scissors" : "error";
    console.log("C : " + choice);
    return choice;
}

let playerSelection = "scissors";
console.log("H : " + playerSelection);

function computeWinner(player, computer){

    if(player === computer) return;
    else if(player === "rock" && computer === "scissors") return true;
    else if(player === "paper" && computer === "rock") return true;
    else if(player === "scissors" && computer === "paper") return true;
    
    else if(player === "rock" && computer === "paper") return false;
    else if(player === "paper" && computer === "scissors") return false;
    else if(player === "scissors" && computer === "rock") return false;
}

function whoWon(){
    let winner = computeWinner(playerSelection, computerPlay());
    
    if(winner){
        console.log("\n Human Won!");
    }
    else if(winner === false){
        console.log("\n Computer Won!");
    }
    else{
        console.log("\n Draw occured!");
    }
}

whoWon();
