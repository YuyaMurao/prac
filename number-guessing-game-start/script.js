let randomNumber = Math.floor(Math.random()*100) + 1;

let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector("LowOrHi");

let guessSubmit = document.querySelector(".guessSubmit");
let guessField = document.querySelector(".guessField");

let guesscount = 1;
let resetButton;

function checkGuess(){
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guess.textContent = "前回の予想：";
    }
    guesses.textContent += userGuess + " ";

    if (userGuess === randomNumber){
        lastResult.textContnt = "おめでとう！正解です！";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = " ";
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = "！！！ゲームオーバー！";
        setGameOver();
    }else{
        lastResult.textContent = "間違いです！";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber){
            lowOrHi.textContent = "今の予想は小さいです。";
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = "今の予想は大きいです。";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}
