// 1. Alert window with prompt "Choose rock, paper, or scissors"

// 2. Rock: win S, Tie R, Lose P
// Paper: win R, Tie P, Lose S
// Scissors: win P, Tie S, Lose R

// Stat board

// OK or cancel


//COMPUTER CHOICE
function computerChoose() {
    var random = Math.random();

    if (random < 0.33) {
        random = "R";

    } else if (random <= 0.66){
        random = "P";

    } else {
        random = "S";
    }

    return random;
}

function userChoose(){
    var loadPage = prompt("Choose R, P, or S");
    if (!input){
    return;}
    else {userChoose()};
}


//USER CHOICE with outcome conditions
var playChoice = function(user, computer){

    if (user === computer){
        alert("It's a tie!");
    }

    if (user === "R"){
        if (computer === "P") {
            alert("Computer chose Paper... You lose!");
        } else {
            alert("Computer chose Paper... You win!");
        }
    }

    if (user === "S"){
        if (computer === "P") {
            alert("Computer chose Paper... You win!");
        } else {
            alert("Computer chose Paper... You lose!");
        }
    }

    if (user === "P"){
        if (computer === "S") {
            alert("Computer chose Scissors... You lose!");
        } else{
            alert("Computer chose Scissors... You win!");
        }
    }

}


for (i=0; i<1000; i++)
{

var userChoice = userChoose();
var computerChoice = computerChoose();

playChoice(userChoice, computerChoice);

}



var userWins = 0;
var computerWins = 0;
var draws = 0;

function determineWin(){
    alert("Amount of wins: " + "Amount of losses: " + "Amount of ties: ");
userWins++;
computerWins++;
draws++;
}