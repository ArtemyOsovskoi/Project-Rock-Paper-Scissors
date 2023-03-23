function getComputerChoice() {  
    const choices = ["rock", "paper", "scissors"];
    let randomChoices = choices[Math.floor(Math.random()*choices.length)]; 
    return randomChoices;
}
//console.log(getComputerChoice())
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        
        return("Player won! Rock beats Scissors");
    } 
    else if (playerSelection === "rock" && computerSelection === "paper") {
       
        return "Computer won! Paper beats Rock"
    } 
    else if (playerSelection === "rock" && computerSelection === "rock") {
       
        return "Draw!"
    } 
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        
        return "Computer won! Scissors beats Paper"
    } 
    else if(playerSelection === "paper" && computerSelection === "paper") {
       
        return "Draw!"
    } 
    else if(playerSelection === "paper" && computerSelection === "rock") {
       
        return "Player won! Paper beats Rock"
    } 
    else if(playerSelection === "scissors" && computerSelection === "scissors" ){
     
        return "Draw!"
    } 
    else if(playerSelection === "scissors" && computerSelection === "paper") {
       
        return "Player won! Scissors beats Paper"
    } 
    else if(playerSelection === "scissors" && computerSelection === "rock") {
       
        return "Computer won! Rock beats Scissors"
    } 
    else {
       return "Wrong choice, please choose between rock, paper or scissors";
    } 
};

let playerScore = 0;
let computerScore = 0;

const playerSelection = prompt("Let,s go! Rock, Paper, Scissors?").toLowerCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    let roundScore = playRound(playerSelection, computerSelection);
    console.log(roundScore)
    
    for (let i = 0; i < 5; i++) { 
        playRound()
        let playerInput = prompt("Rock, Paper, Scissors?").toLowerCase;
        console.log(roundScore)
            if (roundScore === "Player won! Rock beats Scissors" || roundScore === "Player won! Paper beats Rock" || roundScore === "Player won! Scissors beats Paper") {
            alert("Player won! Computer lose.");
            playerScore++;
            } else if (roundScore === "Computer won! Paper beats Rock" || roundScore ===  "Computer won! Scissors beats Paper" || roundScore === "Computer won! Rock beats Scissors") {
            alert("Computer won! You lose.");
            computerScore++;
            } else if (roundScore === "Draw!") {
            alert("Draw!");
            } else {
            alert("Wrong choice.");
            } 
    }
    
    if (playerScore > computerScore) {
        alert("Player won!!! Computer lose...");
    } else if (computerScore > playerScore) {
        alert("Computer won!!! You lose...");
    } else if (computerScore === playerScore && computerScore !=0 && playerScore !=0 ) {
        alert("Draw!!! Try again...");
    } else {
        alert("Wrong choice, please try again");
    }
}
console.log(game())
