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

function game() {    
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
console.log(game())
