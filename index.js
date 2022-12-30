
   

//   console.log(prompt('Enter your name'));
   
let secretNumber = Math.trunc(Math.random()*25+1);

    let score = 20;
   
 function labelFunction(){
    

    
     
     
     let guessNumber = Number(document.querySelector('input').value);
    //  console.log(guess, typeof guess);

     if(!guessNumber){
        document.querySelector('.startguess').textContent= '⛔ No number';
        console.log(!guess);
    } else if(guessNumber === secretNumber){
        document.querySelector('.startguess').textContent= '😍 Correct number';
        document.querySelector('label').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#009900';
        document.getElementById('guess').style.width = '14%';
        document.getElementById('guess').style.fontSize = '100%';
        
    } else if(guessNumber > secretNumber){
        document.querySelector('.startguess').textContent= '📈 Too high';
        score--;
         document.querySelector('.score').textContent= score;
        

    } else if(guessNumber < secretNumber){
        document.querySelector('.startguess').textContent='📉 Too Low';
        score--;
         document.querySelector('.score').textContent= score;
    }
}





    

   

    
   