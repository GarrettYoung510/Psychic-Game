        // $ is grabbing html element from the page
        const $wins = document.getElementById('wins');
        const $losses = document.getElementById('losses');
        const $guesses = document.getElementById('guesses');
        const $userguesses = document.getElementById('user-guesses');
        // create an array of letters 
        const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
            "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ];
        // selects random letter
        let answer = letters[Math.floor(Math.random() * letters.length)];
        // variable for keeping track of wins
        let wins = 0;
        // variable for keeping track of losses
        let losses = 0;
        // variable for keeping track of guesses
        let guesses = 9;
        // array for keeping track of letters guessed
        let userGuesses = [];

        // onkeyup if the user lets go of check if that is the random letter picked
        document.onkeyup = (event) => {
            // make event key to lowercase
            const userInput = event.key.toLowerCase();
            // if/else condition
            if (userInput === answer) {
                wins++;
                guesses = 9;
                answer = letters[Math.floor(Math.random() * letters.length)];
            } else {
                guesses--;
                userGuesses.push(userInput);
                // userGuesses.push(String.fromCharCode(event.key))
            }
            if (guesses === 0) {
                losses++;
                guesses = 9;
                answer = letters[Math.floor(Math.random() * letters.length)];
            }
            // Display the user and computer guesses, and wins/losses/ties.
            $wins.textContent = wins;
            $losses.textContent = losses;
            $guesses.textContent = guesses;
            $userguesses.textContent = userGuesses;
        };