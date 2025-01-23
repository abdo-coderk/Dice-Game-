
let links = [
    'https://very-dice-game.netlify.app/images/dice1.png',
    'https://very-dice-game.netlify.app/images/dice1.png',
    'https://very-dice-game.netlify.app/images/dice2.png',
    'https://very-dice-game.netlify.app/images/dice3.png',
    'https://very-dice-game.netlify.app/images/dice4.png',
    'https://very-dice-game.netlify.app/images/dice5.png',
    'https://very-dice-game.netlify.app/images/dice6.png'];

function dicePlayerOne () {
    let playerOne = document.getElementById('dice1player-img');
    let dice1 = Math.floor(Math.random() * 6 + 1);
    return playerOne.src = links[dice1];
}
dicePlayerOne();
function dicePlayerTow () {
    let imgTow = document.getElementById('dice2player-img');
    let dice2 = Math.floor(Math.random() * 6 + 1);
    return imgTow.src = links[dice2];
}
dicePlayerTow();

let roll = document.getElementsByClassName('rolldice')[0];

if (dicePlayerOne() > dicePlayerTow()) {
    roll.innerHTML = "Player One Winer";
}
else if (dicePlayerOne() === dicePlayerTow()){
    roll.innerHTML = "Equal Players!";
}
else {
    roll.innerHTML = "player Tow Winer";
}