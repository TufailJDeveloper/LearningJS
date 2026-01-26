'use strict';


///Selecting and Manipulating Elements

// console.log(document.querySelector('.message').textContent); 

// document.querySelector('.message').textContent ='Correct Number!'

// console.log(document.querySelector('.message').textContent); 



// document.querySelector('.number').textContent = 13

// document.querySelector('.score').textContent =10

// document.querySelector('.guess').value=23

// console.log(document.querySelector('.guess').value);



///HANDLING CLICK EVENTS

///IMPLEMENTING THE GAME LOGIC


///Manipulating CSS Styles

const secretNumber = Math.trunc(Math.random() *20) +1;

let score=20;
document.querySelector('.number').textContent=secretNumber;

document.querySelector('.check').addEventListener('click' , function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    /// When there is no input
    if(!guess){
        document.querySelector('.message').textContent='No secretNumber!'
    }


    /// When Player Wins
    if(guess === secretNumber){

        document.querySelector('.message').textContent ='Correct Number!'

        document.querySelector('body').style.backgroundColor= '#60b347'

        document.querySelector('number').style.width='30rem'
    }
    
    /// When guess is too high
    else if(guess > secretNumber){
        if(score>1){

      
        document.querySelector('.message').textContent='Too High!'
        score--;
        document.querySelector('.score').textContent=score

          }

          else{
            
        document.querySelector('.message').textContent='You Lost the game!'
          }
      
        }
   
       /// When guess is too low 
      else if(guess < secretNumber){
        if(score>1){

        document.querySelector('.message').textContent='Too Low!'
        score--;
        document.querySelector('.score').textContent=score

        
    }
     else{
            
        document.querySelector('.message').textContent='You Lost the game!'
          }

}




})








