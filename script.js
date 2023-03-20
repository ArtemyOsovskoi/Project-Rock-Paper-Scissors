function getComputerChoice() {  
    const choices = ["rock", "paper", "scissors"];
    let randomChoices = choices[Math.floor(Math.random()*choices.length)]; 
    return randomChoices;
}
//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Player won! Rock beats Scissors"
    } 
    else if (playerSelection === "rock" && computerSelection === "paper")  {
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
       return("Wrong choice, please choose between rock, paper or scissors");
    } 
};

const playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));