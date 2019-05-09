
var gameWords = ["shakira", "rock", "reguetton", "salsa"]

var randomWord = "";
var lettersOfword = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function game() {
    randomWord = gameWords[Math.floor(Math.random()*gameWords.length)];
    console.log(randomWord)
    lettersOfword = randomWord.split(""); 
    blanks = lettersOfword.length; 
    
    for (var i = 0; i < blanks; i++){
        blanksAndCorrect.push("_");
    }

    document.getElementById("wordinprogress").innerHTML = " " + blanksAndCorrect.join(" ");
};



function reset(){
    guessesRemaining = 9; 
    wrongGuess = []; 
    blanksAndCorrect = []; 
    game()
}

function isCorrectGuess(letter){

    var letterInWord = false;
    for (var i = 0; i < blanks; i++) { 
        if (randomWord[i] == letter) { 
            letterInWord = true; 
        } 
    }
        if (letterInWord) { 
            for (var i = 0; i < blanks; i++) { 
                if (randomWord[i] == letter) { 
                    blanksAndCorrect[i] = letter; 
                } 
            } 
        } 
            
        else { 
            wrongGuess.push(letter); 
            guessesRemaining--; 
        } 
}

function complete() { 
    console.log("wins:" + wins + "| losses:" + losses + "| REMAINING GUESSES:" + guessesRemaining) 
    
    if (lettersOfword.toString() === blanksAndCorrect.toString()) { 
        wins++; 
        reset() 

        document.getElementById("winningtracker").innerHTML = " " + wins; 
        document.getElementById("image").src = "./assets/images/great.png"
     
    } else if (guessesRemaining === 0) { 
        losses++; 
        alert("sorry, the word was" + " " + randomWord);
        reset() 
        document.getElementById("image").src = "./assets/images/wrong.png" 
        document.getElementById("losstracker").innerHTML = " " + losses; 

        // HOW DO I GET THE RIGHT WORD TO SHOW UP?

    } 
    
    document.getElementById("wordinprogress").innerHTML = " " + blanksAndCorrect.join(" "); 
    document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining; 
} 
     
     
game() 
    
document.onkeyup = function (event) { 
    var guesses = event.key 

    isCorrectGuess(guesses); 

    complete(); 
    document.getElementById("playerguesses").innerHTML = " " + wrongGuess.join(" "); 
} 
     
     
     