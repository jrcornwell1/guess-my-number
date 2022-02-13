'use strict';


// console.log(document.querySelector('.message').textContent);

// // Changes content of html element - manipulates one of the DOM nodes
// 

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 10;

// // input fields use .value
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// .trunc rounds number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// let score = document.querySelector('.score').textContent;
let highscore = 0;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(typeof guess);

    // Adds falsy value to execute if no value in input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.highscore').textContent = score;
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

// console.log(typeof Number(document.querySelector('.score').textContent));
