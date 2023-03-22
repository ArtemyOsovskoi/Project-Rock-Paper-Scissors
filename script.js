function getComputerChoice() {  
    const choices = ["rock", "paper", "scissors"];
    let randomChoices = choices[Math.floor(Math.random()*choices.length)]; 
    return randomChoices;
}
//console.log(getComputerChoice())
//keep score

    let playerScore = 0;
    let computerScore = 0;
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++; 
        return("Player won! Rock beats Scissors");
    } 
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Computer won! Paper beats Rock"
    } 
    else if (playerSelection === "rock" && computerSelection === "rock") {
        computerScore++;
        playerScore++;
        return "Draw!"
    } 
    else if(playerSelection === "paper" && computerSelection === "scissors"){
         computerScore++;
        return "Computer won! Scissors beats Paper"
    } 
    else if(playerSelection === "paper" && computerSelection === "paper") {
        computerScore++;
        playerScore++;
        return "Draw!"
    } 
    else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++; 
        return "Player won! Paper beats Rock"
    } 
    else if(playerSelection === "scissors" && computerSelection === "scissors" ){
        computerScore++;
        playerScore++;
        return "Draw!"
    } 
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++; 
        return "Player won! Scissors beats Paper"
    } 
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Computer won! Rock beats Scissors"
    } 
    else {
       return "Wrong choice, please choose between rock, paper or scissors";
    } 
};

const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    let roundScore = playRound();

    for (let i = 0; i < 5; i++) { 
        playRound()
        if (roundScore === "Player won! Rock beats Scissors" || roundScore === "Player won! Paper beats Rock" || roundScore === "Player won! Scissors beats Paper") {
        playerScore++; 
        } else if (roundScore === "Computer won! Paper beats Rock" || roundScore ===  "Computer won! Scissors beats Paper" || roundScore === "Computer won! Rock beats Scissors") {
        computerScore++;
        }    
    
        if (playerScore > computerScore) {
        alert("Player won! Computer lose...");
        } else if (computerScore > playerScore) {
        alert("Computer won! You lose...");
        } else {
        alert("Draw! Try again");
        }
    }
}
console.log(game())

