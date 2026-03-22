


function startGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    console.log('Welcome to guessing game');
    console.log('I have chosen a number');
    console.log('Could you guess it?');

    function guessNumber() {
        const input = prompt('Please guess a number');
        const guess = Number(input);
        attempts++;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log('Please enter a valid number between 1 and 100');
            guessNumber();
            return;
        }

        if (guess === target) {
            console.log(`Bingo! The number was ${target}, correct!`);
            console.log(`You guessed it in ${attempts} attempts.`);
        } else if (guess > target) {
            console.log('Too high, try again');
            guessNumber();
        } else {
            console.log('Too low, try again');
            guessNumber();
        }
    }

    guessNumber();
}

startGame();
