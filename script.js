'use strict';

// .trunc rounds number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to reduct document.querySelector call
const displayMessage = function (message) {
    return document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    // Changes guess to number
    const guess = Number(document.querySelector('.guess').value);

    // add function for guess === same guess return string 'Same guess'

    // When player doesn't guess a number
    if (!guess) {
        displayMessage('No number!');
        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!')

        // refactor here to use function - make DRY 
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        // Sets highscore value - nested if 
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // When guess != to seceret number
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // Uses ternary op to return a value
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// resets the game by clicking the again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...')

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
});
