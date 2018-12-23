var guessesLeft = 10;
var guessesMade = [];
var guessesCorrect = 0;
var guessesIncorrect = 0;

var currentLetter = Math.floor(Math.random() * 25) + 97;


document.addEventListener("keypress", function(event) {
    var enteredKey = event.keyCode;
    if (currentLetter === enteredKey) {
        alert("Good Job - You guessed right!");
        guessesCorrect++;
        resetGame();
        document.getElementById("guessesCorrect").innerHTML = guessesCorrect;
    } else {
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    guessesMade.push(String.fromCharCode(enteredKey));
    }

    if (guessesLeft == 0) {
        guessesIncorrect++;
        document.getElementById("guessesIncorrect").innerHTML = guessesIncorrect;
        //TODO: Do something when a loss occurs
        alert("You lost - Too bad! Try again?");
        resetGame();
    }

    document.getElementById("pastGuesses").innerHTML = guessesMade.join(", ");

});

function resetGame() {
    guessesLeft = 10;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    guessesMade = [];
    // guessesCorrect = 0;
    // guessesIncorrect = 0;
    currentLetter = Math.floor(Math.random() * 25) + 97;
}