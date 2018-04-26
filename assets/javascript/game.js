// DECLARE VARIABLES
// Declare letters, starting Wins, Losses and Guesses left.

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var winsDisplay = document.getElementById("wins");  //same as $("#wins")
var lossesDisplay = document.getElementById("losses");
var guessDisplay = document.getElementById("guessLeft");
var userGuessDisplay = document.getElementById("userGuess");



var userGuess;

var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log (computerGuess)


// FUNCTIONS
function updateScore() {
    if (userGuessDisplay === computerGuess) {
        winsDisplay = winsDisplay++;
        winsDisplay = document.getElementById("wins").textContent;
        console.log("Correct!")
    }
    else {
        lossesDisplay = lossesDisplay++;
        lossesDisplay = document.getElementById("losses").textContent;
        console.log("Wrong!")
    }

}

function updateUserGuessDisplay() {
    for (var i=0; i<letters.length; i++) {
        userGuessDisplay = userGuessDisplay[i];
        userGuessDisplay = document.getElementById("userGuess").textContent;
        guessDisplay = GuessDisplay--;
        guessDisplay = document.getElementById("guessLeft").textContent;
        console.log(userGuessDisplay + guessDisplay)
    }
}

// function updateGuessDisplay() {
//     guessDisplay = GuessDisplay--;
//     guessDisplay = document.getElementById("guessLeft").textContent;
// }

//================================================================

// MAIN PROCESS


// When user presses a key, go through this process
document.onkeyup = function(event) {
    
    // If the guessDisplay is more than 0, run functions
    if (guessDisplay = 0) {
        return;
    } 
    
    // Determine which key was pressed, make it lowercase and set it to userGuessDisplay
    userGuess = event.key.toLowerCase();

    // Only run if computerGuess equals userGuess
    if (userGuess === computerGuess) {
        updateScore();
        updateUserGuessDisplay();
        // updateGuessDisplay();
    }
   
    
}

