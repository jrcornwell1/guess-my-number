'use strict';

// .trunc rounds number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    // Changes guess to number
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        // Sets highscore value
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // When guess != to seceret number
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // Uses ternary op to return a value
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// resets the game by clicking the again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
});

