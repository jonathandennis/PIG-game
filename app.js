/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;
// below is called a "setter" as it sets the variable
document.querySelector('#current-' + activePlayer).textContent = dice;
/* document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; Example to add html as text just enters plain text */
// below is called a "getter" as it gets and stores a variable
var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none'; //style = method, display = propery, 'none' = what to display