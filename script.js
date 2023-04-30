//score and round counter
let playerScore = 0;
let computerScore = 0;
let rounds = 0; 

//UI buttons for player choice
let buttonRock = document.querySelector("#brock");
buttonRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
}); 

let buttonPaper = document.querySelector("#bpaper");
buttonPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());   
}); 

let buttonScissors = document.querySelector("#bscissors");
buttonScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
}); 

//generate computer choice
let computerSelection = getComputerChoice();
function getComputerChoice() {  
    const choices = ["rock", "paper", "scissors"];
    let randomChoices = choices[Math.floor(Math.random()*choices.length)]; 
    return randomChoices;
};

//play one round and show scores
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        rounds++;
        alert("Player won! Rock beats Scissors. "+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        rounds++;
        alert("Computer won! Paper beats Rock. "+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } 
    else if (playerSelection == "rock" && computerSelection == "rock") {
        rounds++;
        alert("Draw! Rock can't beat Rock. "+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } 
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        rounds++;
        alert("Computer won! Scissors beats Paper. "+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } 
    else if(playerSelection === "paper" && computerSelection === "paper") {     
        rounds++;
        alert("Draw! Paper can't beat Paper. "+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } 
    else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        rounds++;
        alert("Player won! Paper beats Rock. "+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } 
    else if(playerSelection === "scissors" && computerSelection === "scissors" ){
        rounds++;
        alert("Draw! Scissors can't beat Scissors. "+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } 
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        rounds++;
        alert("Player won! Scissors beats Paper. "+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } 
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        rounds++;
        alert("Computer won! Rock beats Scissors. "+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    }
    
    if(rounds === 5) {
        finGame();
    }
};

//finished game, show final scores
function finGame() {
    if(rounds == 5 && playerScore > computerScore) {
        alert("Player won!!! Computer lose... Final score:"+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } else if(rounds == 5 && playerScore < computerScore) {
        alert("Computer won!!! You lose... Final score:"+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    } else if(rounds == 5 && playerScore === computerScore) {
        alert("Draw!!! Try again... Final score:"+"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
    }
};

//reset game button
function resetGame (){
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    alert("Reset done. Let's play again!");
};

let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", () => {
    resetGame()
});

//add score counter on the page
document.querySelector("#playerScore").innerHTML = playerScore;
document.querySelector("#computerScore").innerHTML = computerScore;
