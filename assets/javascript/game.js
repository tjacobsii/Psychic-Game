//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



//Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#guessedLetters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?");
            // Then we'll call the reset. 
            reset();
        }
};



















// // Guess what letter the computer is thinking
// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// // Variables 
// var wins = 0;
// var losses = 0;
// var guessesLeft = 9;
// var lettersGuessed = [];
// var letterToGuess = null;

// console.log(computerChoices[2]);

// document.onkeyup = function (event) {
//     var userGuess = event.key.toLowerCase();
//     console.log("user guess is", userGuess);

//     var computerChoice = Math.floor(Math.random() * computerChoices.length);
//     console.log(computerChoices[Math.floor(Math.random() * computerChoices.length)]);

//     if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") ||
//         (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") ||
//         (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
//         (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") ||
//         (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") ||
//         (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
//         (userGuess === "y") || (userGuess === "z")) {

//         if (userGuess === computerChoices[Math.floor(Math.random() * computerChoices.length)]) {
//             wins++;
//             guessesLeft = 9;
//         }

//         else {
//             console.log("TEST");
//             guessesLeft--;
//         }

//         if (guessesLeft === 0) {
//             losses++;
//             guessesLeft = 9;
//         }
//     }


//     document.getElementById('wins').innerHTML = "Wins: " + wins;
//     console.log("wins is", wins);
//     document.getElementById('losses').innerHTML = "losses: " + losses;
//     console.log("losses is", losses);
//     document.getElementById('guesses').innerHTML = "Guesses left: " + guessesLeft;
//     console.log("Guesses left is", guessesLeft);
//     document.getElementById('lettersGuessed').innerHTML = "Guesses So Far: " + "";
//     console.log("Guesses left is", guessesLeft)
// }

