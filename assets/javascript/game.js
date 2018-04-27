// DECLARE VARIABLES
// Declare letters, starting Wins, Losses and Guesses left.

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var winsDisplay = 0; //document.getElementById("wins").textContent;  //same as $("#wins")
var lossesDisplay = 0; //document.getElementById("losses").textContent;
var guessDisplay = 10; //document.getElementById("guessLeft").textContent;
var userGuessDisplay = []; //document.getElementById("userGuess").textContent;

// Declare letters user has clicked and the letter computer has chosen
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess)


// FUNCTIONS
function reset(){
    winsDisplay = 0;
    lossesDisplay = 0;
    guessDisplay = 0;
    userGuessDisplay = [];
}
function updateScore(chicken) {
    if (chicken === computerGuess) {
        winsDisplay++;
        document.getElementById("wins").innerHTML = winsDisplay;

        console.log("Correct!")
    }
    else {
        console.log("ug", chicken)
        console.log("cg", computerGuess)
        lossesDisplay++;
        document.getElementById("losses").innerHTML = lossesDisplay;
        console.log("Wrong!")
    }

}

// function updateUserGuessDisplay() {
//     for (var i=0; i<letters.length; i++) {
//         userGuessDisplay = letters[i];
//         document.getElementById("userGuess").innerHTML = guessDisplay;
//         //console.log(userGuessDisplay + guessDisplay)
//     }
// }

// function updateGuessDisplay() {
//     guessDisplay = GuessDisplay--;
//     guessDisplay = document.getElementById("guessLeft").textContent;
// }

//================================================================

// MAIN PROCESS

// When user presses a key, go through this process
document.onkeyup = function (event) {

    // If the guessDisplay is more than 0, run functions
    // if (guessDisplay<= 0) {
    //     return;
    // } 


    // Determine which key was pressed, make it lowercase and set it to userGuessDisplay
    var userGuess = event.key.toLowerCase();
    // check if value is in arrary

    for (var i = 0; i < userGuessDisplay.length; i++) {
        console.log("hellur")
        if (userGuess === userGuessDisplay[i]) {
            alert("You already guessed that letter.")
            return;
        }
        
    }





        userGuessDisplay.push(userGuess)
        console.log(userGuessDisplay)
        // Only run if computerGuess equals userGuess
        if (userGuess === computerGuess) {
            updateScore(userGuess);

            // updateGuessDisplay();
        }
        else {
            //updateUserGuessDisplay();
            updateScore(userGuess);
            guessDisplay--;
            document.getElementById("userGuess").innerHTML = userGuessDisplay;

        }
       

    }








