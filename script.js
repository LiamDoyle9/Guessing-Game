'use strict';


let score = 10;
let highscore = 0;
let maxRange = document.getElementById("rangeSlider").value;
let secretNumber = Math.trunc(Math.random()*maxRange)+1;


let slider = document.getElementById('rangeSlider');
slider.addEventListener('input', sliderChange);




//adding text display for min and max ranges
document.querySelector('.sliderMin').textContent = '1';
document.querySelector('.sliderMax').textContent = maxRange;

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


document.querySelector('.generate').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*maxRange)+1;
    score = 10;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').textContent = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'; //change this to hide number
})


function sliderChange() {
    document.querySelector('.sliderMax').textContent = this.value;
    secretNumber = Math.trunc(Math.random()*maxRange)+1;
    maxRange = this.value;
    document.querySelector('.between').textContent = `(Between 1 and ${this.value})`;
}