let computerGuess;
let userGuess = [];
//input area output
let userGuessUpdate = document.getElementById("textoutput");
let userNumberUpdate = document.getElementById("inputbox");
let audio = new Audio("./audio.wav");
const init = () => {
    //get random number and display welcomescreen
    computerGuess = Math.floor(Math.random() * 100);
    ////console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gamearea").style.display = "none";
};
//button par click krne par gamrarea open ho jaraha ooh logic h
const startgame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gamearea").style.display = "block";
};
//reload the page
     const newGameBegin =() =>{
        audio.play();
        window.location.reload();
     };

//start new game
const startNewgame= () =>{
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disbled", true);
}
const EasyMode = () => {
    audio.play();
    maxGuess=10;
    startgame();
};

const HardMode = () => {
    audio.play();
    maxGuess=5;
    startgame();
};
//main logic of get user data
const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputbox").value);
    userGuess = [...userGuess, userNumber];//use slipt optertor we get previous value
    document.getElementById("guesses").innerHTML = userGuess;
    //check value low and high

   if(userGuess.length < maxGuess){ //validate easy and hardmode
    if (userNumber > computerGuess) {
        userGuessUpdate.innerHTML = "your guess is High 😮";
        userNumberUpdate.value = "";
    }
    else if (userNumber < computerGuess) {
        userGuessUpdate.innerHTML = "your guess is Low 🙁";
        userNumberUpdate.value = "";
    }
    else {
        userGuessUpdate.innerHTML = "It's Correct 😇";
        userNumberUpdate.value = "";
        startNewgame();// for start game again after win
    }
}
else{ //validate easy and hardmode
    if (userNumber > computerGuess) {
        userGuessUpdate.innerHTML = `You Loose!! Correct Number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewgame();
    }
    else if (userNumber < computerGuess) {
        userGuessUpdate.innerHTML = `You Loose!! Correct Number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewgame();// if you loose the game then start the new game
    }
    else {
        userGuessUpdate.innerHTML = "It's Correct ";
        userNumberUpdate.value = "";
        startNewgame();
    }
}

//kitne aatempt ooh btata h
    document.getElementById("attempts").innerHTML= userGuess.length;

};






