//score and round counter
let playerScore = 0;
let computerScore = 0;
let rounds = 0; 

//buttons for player choice
let buttonRock = document.querySelector("#brock");
buttonRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    updateScore(playerScore, computerScore);
    updateRounds(rounds);
}); 

let buttonPaper = document.querySelector("#bpaper");
buttonPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    updateScore(playerScore, computerScore);
    updateRounds(rounds);
}); 

let buttonScissors = document.querySelector("#bscissors");
buttonScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    updateScore(playerScore, computerScore);
    updateRounds(rounds);
}); 

//generate computer choice
let computerSelection = getComputerChoice();
function getComputerChoice() {  
    const choices = ["rock", "paper", "scissors"];
    let randomChoices = choices[Math.floor(Math.random()*choices.length)]; 
    return randomChoices;
};

//play one round 
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        rounds++;
        gameLog.textContent = ("Player won! Rock beats Scissors");
    } 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        rounds++;
        gameLog.textContent = ("Computer won! Paper beats Rock");
    } 
    else if (playerSelection == "rock" && computerSelection == "rock") {
        rounds++;
        gameLog.textContent = ("Draw! Rock can't beat Rock");
    } 
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        rounds++;
        gameLog.textContent = ("Computer won! Scissors beats Paper");
    } 
    else if(playerSelection === "paper" && computerSelection === "paper") {     
        rounds++;
        gameLog.textContent = ("Draw! Paper can't beat Paper");
    } 
    else if(playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        rounds++;
        gameLog.textContent = ("Player won! Paper beats Rock");
    } 
    else if(playerSelection === "scissors" && computerSelection === "scissors" ){
        rounds++;
        gameLog.textContent = ("Draw! Scissors can't beat Scissors");
    } 
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        rounds++;
        gameLog.textContent = ("Player won! Scissors beats Paper.");
    } 
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        rounds++;
        gameLog.textContent = ("Computer won! Rock beats Scissors");
    }
    
    if(rounds === 5) {
        finGame();
    }
};

//finished game, show final scores
function finGame() {
    if(rounds == 5 && playerScore > computerScore) {
        gameLog.textContent = ("Player won!!! Computer lose... Final score:"
        +"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
        hideButtons();
        resetGame();
        document.querySelector("#playAgainButton").style.visibility = "visible";
        document.querySelector("#resetButton").style.visibility = "hidden";
        document.querySelector("#scoreAndRound").style.visibility = "hidden";//new
    } else if(rounds == 5 && playerScore < computerScore) {
        gameLog.textContent = ("Computer won!!! You lose... Final score:"
        +"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
        hideButtons();
        resetGame();
        document.querySelector("#playAgainButton").style.visibility = "visible";
        document.querySelector("#resetButton").style.visibility = "hidden";
        document.querySelector("#scoreAndRound").style.visibility = "hidden";//new
    } else if(rounds == 5 && playerScore === computerScore) {
        gameLog.textContent = ("Draw!!! Try again... Final score:"
        +"Player"+":"+ playerScore + "-" + "Computer"+":"+computerScore);
       hideButtons();
        resetGame();
        document.querySelector("#playAgainButton").style.visibility = "visible";
        document.querySelector("#resetButton").style.visibility = "hidden";
        document.querySelector("#scoreAndRound").style.visibility = "hidden";//new
    }
};

//reset game button
function resetGame (){
    rounds = 0;
    playerScore = 0;
    computerScore = 0;
    updateScore(playerScore, computerScore);
    updateRounds(rounds);
};
let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", () => {
    resetGame()
    gameLog.textContent = ("Reset done!"); 
});

//hide buttons function
function hideButtons () {
    document.querySelector("#brock").style.visibility = "hidden";
    document.querySelector("#bpaper").style.visibility = "hidden";
    document.querySelector("#bscissors").style.visibility = "hidden";
};

//play again function
function playAgain () {
    document.querySelector("#brock").style.visibility = "visible";
    document.querySelector("#bpaper").style.visibility = "visible";
    document.querySelector("#bscissors").style.visibility = "visible";
    document.querySelector("#resetButton").style.visibility = "visible";
    document.querySelector("#scoreAndRound").style.visibility = "visible";
    document.querySelector("#playAgainButton").style.visibility = "hidden";
    gameLog.textContent = "";
};

//play again button
let playAgainButton = document.querySelector("#playAgainButton");
playAgainButton.addEventListener("click", () => {
    playAgain();
});

//hide play again button 
document.querySelector("#playAgainButton").style.visibility = "hidden";

//add score counter on the page - update scores
function updateScore (playerScore, computerScore) {
    document.querySelector("#pScore").innerText = playerScore;
    document.querySelector("#cScore").innerText = computerScore;
};

//round counter box
function updateRounds (rounds) {
    document.querySelector("#roundCounter").innerText = rounds;
};

//game log container
let gameLog = document.querySelector("#gameLogContainer");
    gameLog.textContent = ""