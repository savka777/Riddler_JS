
const selectors = {
    hintText: document.querySelector(".hint span"),
    timeText : document.querySelector(".time b"),
    inputField: document.querySelector("input"),
    refreshBtn: document.querySelector(".refresh-riddle"),
    checkBtn: document.querySelector(".check-riddle"),
}
var input = document.getElementById("Myinput");
let correctWord, timer;

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return selectors.timeText.innerText = maxTime;
        }
        alert(`oh no TIMES UP!! ` + correctWord.toUpperCase() + ` was the correct word`);
        gameState();
    }, 1000);
}

const gameState = () => {
    initTimer(46);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    selectors.hintText.innerText = randomObj.hint;
    selectors.hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    selectors.inputField.value = ""; 
}
gameState();

const checkWord = () => {
    let userWord = selectors.inputField.value.toLowerCase();
    if(!userWord) return alert(`You haven't entered a word yet!!!`);
    if(userWord !== correctWord) return alert(`Oops!` + ` ` + userWord.toUpperCase() + ` ` + ` is not the correct word` + `\n` + ``);

    alert(`Congradulations!!! ` + correctWord.toUpperCase() + ` is the correct word`);    
    gameState();
}

selectors.refreshBtn.addEventListener("click", gameState);
selectors.checkBtn.addEventListener("click", checkWord);

(function() {

    document.querySelector('.nav-button').addEventListener('click', function() {
      this.parentNode.parentNode.classList.toggle('closed')
    }, false);
  })();