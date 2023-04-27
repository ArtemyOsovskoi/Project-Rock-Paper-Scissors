/* let playerScore = 0;
let computerScore = 0;
let ties = 0; */
//Add an event listener to the buttons that call   playRound function 
//with the correct playerSelection every time a button is clicked. 
let computerSelection = getComputerChoice();

function getComputerChoice() {  
    const choices = ["rock", "paper", "scissors"];
    let randomChoices = choices[Math.floor(Math.random()*choices.length)]; 
    return randomChoices;
};

let buttonRock = document.querySelector("#brock");
buttonRock.addEventListener("click", () => {
    playRound("rock", computerSelection);
}); 

let buttonPaper = document.querySelector("#bpaper");
buttonPaper.addEventListener("click", () => {
    playRound("paper", computerSelection);
}); 

let buttonScissors = document.querySelector("#bscissors");
buttonScissors.addEventListener("click", () => {
    playRound("scissors", computerSelection);
}); 


function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("Player won! Rock beats Scissors");
    } 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("Computer won! Paper beats Rock");
    } 
    else if (playerSelection == "rock" && computerSelection == "rock") {
        alert("Draw! Rock vs Rock");
    } 
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        alert("Computer won! Scissors beats Paper");
    } 
    else if(playerSelection === "paper" && computerSelection === "paper") {     
        alert("Draw! Paper vs Paper");
    } 
    else if(playerSelection === "paper" && computerSelection === "rock") {
        alert("Player won! Paper beats Rock");
    } 
    else if(playerSelection === "scissors" && computerSelection === "scissors" ){
        alert("Draw! Scissors vs Scissors");
    } 
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        alert("Player won! Scissors beats Paper");
    } 
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        alert("Computer won! Rock beats Scissors");
    } 
};


 /* function game() {    
    for (let i = 0; i < 5; i++) { 
        const playerSelection = prompt("Please choose - Rock, Paper, Scissors?").toLowerCase(); //player move
        let computerSelection = getComputerChoice();//computer move
        let roundScore = playRound(playerSelection, computerSelection);//score one round
        console.log(playRound(playerSelection, computerSelection));         

        playRound() //play one round and assign scores
            if (roundScore === "Player won! Rock beats Scissors" || roundScore === "Player won! Paper beats Rock" || roundScore === "Player won! Scissors beats Paper") {
            alert("You won! Computer lose."+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
            playerScore++;
            } else if (roundScore === "Computer won! Paper beats Rock" || roundScore ===  "Computer won! Scissors beats Paper" || roundScore === "Computer won! Rock beats Scissors") {
            alert("Computer won! You lose."+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
            computerScore++;
            } else if (roundScore === "Draw!") {
            alert("Draw!"+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
            } else {
            alert("Wrong choice.");
            } 
    } 
    //final evaluation and declaring a winner and loser
    if (playerScore > computerScore) {
        alert("Player won!!! Computer lose..."+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } else if (computerScore > playerScore) {
        alert("Computer won!!! You lose..."+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } else if (computerScore === playerScore && computerScore !=0 && playerScore !=0 ) {
        alert("Draw!!! Try again..."+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } else {
        alert("Wrong choice, please try again");
    }
} 
 */