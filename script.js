'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 10;
let highscore = 0;

document.querySelector('.number').textContent = '?'; //change this to hide secret number
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);    
    

    if (!guess){
        document.querySelector('.message').textContent = 'No Number!';
    
        //when player wins
    } else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b374';

        if(score > highscore){
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;

        

        //when guess too high
    } else if (guess > secretNumber){
        document.querySelector('.message').textContent = 'Too High!';
        score--;
        document.querySelector('.score').textContent = score;
        //when guess too low
    } else if (guess < secretNumber){
        document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;        
    }
})


document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 10;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').textContent = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'; //change this to hide number
})