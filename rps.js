//This section is the computer selection.
let HumanPlayers = 0
let computerScore = 0
let roundWinner = ''


function computerPlay() {

const options = ["rock", "paper", "scissors"];
const choices = Math.floor(Math.random() * options.length);
return options[choices];
 
} 
console.log("Computer chooses: " + computerPlay());


// This section is for HumanPlayers input.

//Function that plays a single round,

function roundPlay(playerSelection, computerSelection) {
 playerSelection = prompt(" Please select rock paper or scissors? ");
if (playerSelection === computerPlay) 
displayResults( "it is a tie");
}
if (playerSelection === 'rock' && computerSelection === 'scissors')||
   (playerSelection === 'scissors' && computerSelection === 'paper')||
   (computerSelection === 'paper' && computerSelection === 'rock') ||
  
   

