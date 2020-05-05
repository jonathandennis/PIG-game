/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//dice = Math.floor(Math.random() * 6) + 1; // Math.floor makes random() decimal number generated round down to whole number
// below is called a "setter" as it sets the variable
//document.querySelector('#current-' + activePlayer).textContent = dice;
/* document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; Example to add html as text just enters plain text */
// below is called a "getter" as it gets and stores a variable
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// querySelector to select elements in DOM (class and id)
document.querySelector('.dice').style.display = 'none'; //style = method, display = propery, 'none' = value for display: Sets start of game with no dice image displayed.

// getElementById is another way to select id's from DOM
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {  //anonymous or "nameless" function only works where deployed. not reusable 
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice'); // made a var to not repeat code
    diceDOM.style.display = 'block'; // shows image where there was none at start of game
    diceDOM.src = 'dice-' + dice + '.png' // changes dice image. strategic naming of images can help make things easier too

    // 3. Update the round score if the rolled number was not a 1
    if (dice !== 1) {  // !== the different operator. ie dice different than 1 not equal (does not perform type coersion)
        //add score from dice to roundScore
        roundScore += dice;
        //updates display of new roundScore. Strategic naming of players/element names helps  
        document.querySelector('#current-' + activePlayer).textContent = roundScore;   
    } else {
        //next player
        nextPlayer();  
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add current score to global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 

    // Check if player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); //best practice to use js to change css classes than change the actuall css whenever possible
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer;
    }

    //Next player
    nextPlayer();
});


function nextPlayer() {  //made this function to condense repeat code
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // Ternary operator i.e. if active player is 0 then active player to 1, else activePlayer should be 0.
    roundScore = 0; // sets roundScore to zero after player switch 

    document.getElementById('current-0').textContent = '0'; // sets current counter to 0 when roll of 1
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active'); // toggles active css to indicate active player
    document.querySelector('.player-1-panel').classList.toggle('active'); 
    
    document.querySelector('.dice').style.display = 'none'; // removes image of dice after roll of 1   
}
