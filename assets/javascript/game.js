        // Guess what letter the computer is thinking
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;


        console.log(computerChoices[2]);

        document.onkeyup = function (event) {
            var userGuess = event.key;
            console.log("user guess is", userGuess);

            var computerChoice = Math.floor(Math.random() * computerChoices.length);
            console.log(computerChoices[Math.floor(Math.random() * computerChoices.length)]);

            if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") ||
                (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") ||
                (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
                (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") ||
                (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") ||
                (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
                (userGuess === "y") || (userGuess === "z")) {

                if (userGuess === computerChoices[Math.floor(Math.random() * computerChoices.length)]) {
                    wins++;
                    guessesLeft = 9;
                }

                else {
                    console.log("TEST");
                    guessesLeft--;
                }

                if (guessesLeft === 0) {
                    losses++;
                    guessesLeft = 9;
                }
            }


            document.getElementById('wins').innerHTML = "Wins: " + wins;
            console.log("wins is", wins);
            document.getElementById('losses').innerHTML = "losses: " + losses;
            console.log("losses is", losses);
            document.getElementById('guesses').innerHTML = "Guesses left: " + guessesLeft;
            console.log("Guesses left is", guessesLeft);
            document.getElementById('guessedLetters').innerHTML = "Guesses So Far: " + "";
            console.log("Guesses left is", guessesLeft)
        }

        document.getElementById('wins').innerHTML = "Wins: " + wins;
        console.log("wins is", wins)
        document.getElementById('losses').innerHTML = "losses: " + losses;
        console.log("losses is", losses)
        document.getElementById('guesses').innerHTML = "Guesses left: " + guessesLeft;
        console.log("Guesses left is", guessesLeft)
        document.getElementById('guessedLetters').innerHTML = "Guesses So Far: " + "";
        console.log("Guesses left is", guessesLeft)