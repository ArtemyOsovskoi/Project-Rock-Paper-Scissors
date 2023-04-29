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
    
    if(rounds === 5){
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