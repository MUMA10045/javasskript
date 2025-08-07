const readline = require(`readline-sync`);
function guessgame(){
    const secretNumber=Math.floor(Math.random()*10)+1
    
    readline.question("Guess a number between 1 and 10:",
         function(answer){
            const guess = Number(answer); 
            if (guess===secretNumber){
            console.log("Correct! You guessed the right number")
            readline.close()
            }
                 else {
            console.log("Wrong guess.Try again!");
            guessgame()

        }
       
    })
        
       
        }
    

guessgame()
