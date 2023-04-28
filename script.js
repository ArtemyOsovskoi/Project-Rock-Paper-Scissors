//score and round counter
let playerScore = 0;
let computerScore = 0;
let rounds = 0; 

//UI buttons for player choice
let buttonRock = document.querySelector("#brock");
buttonRock.addEventListener("click", () => {
    playRound("rock", computerSelection);
    rounds++;
    if 
}); 
let buttonPaper = document.querySelector("#bpaper");
buttonPaper.addEventListener("click", () => {
    playRound("paper", computerSelection);
    rounds++;
}); 
let buttonScissors = document.querySelector("#bscissors");
buttonScissors.addEventListener("click", () => {
    playRound("scissors", computerSelection);
    rounds++;
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
        alert("Player won! Rock beats Scissors");
        playerScore++;
    } 
    else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("Computer won! Paper beats Rock");
        computerScore++;
    } 
    else if (playerSelection == "rock" && computerSelection == "rock") {
        alert("Draw! Rock can't beat Rock");
        rounds++;
    } 
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        alert("Computer won! Scissors beats Paper");
        computerScore++;
    } 
    else if(playerSelection === "paper" && computerSelection === "paper") {     
        alert("Draw! Paper can't beat Paper");
        rounds++;
    } 
    else if(playerSelection === "paper" && computerSelection === "rock") {
        alert("Player won! Paper beats Rock");
        playerScore++;
    } 
    else if(playerSelection === "scissors" && computerSelection === "scissors" ){
        alert("Draw! Scissors can't beat Scissors");
        rounds++;
    } 
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        alert("Player won! Scissors beats Paper");
        playerScore++;
    } 
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        alert("Computer won! Rock beats Scissors");
        computerScore++;
    }
    
    if(rounds == 5 && playerScore >= 5 || computerScore >= 5 || playerScore === computerScore){
        finGame();
    }
};

//finished game
function finGame() {
    if(playerScore >= 5) {
        alert("Player won! Congrats!");
    } else if(computerScore >= 5) {
        alert("Computer won");
    } else if(rounds = 5 && playerScore === computerScore) {
        alert("Tie!");
    }
};







/* I ended up adding event listeners to the ui buttons, 
which called the play round with different player selections 
depending on the button clicked. - DONE

The play round stored a counter, in my case I did it with the score, - DONE
and after the round is played, I checked if the finish game condition is met, 
in that point I congratulated the player, asked for a new game, etc. */


/* so you're just missing the finish game condition, 
your playRound function could conditionally call a finishGame function 
in which you set up everything to finish the game */


/*   function game() {    
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

game() */