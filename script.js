// get input from user through button inputs
const buttons = document.querySelectorAll('input');
buttons.forEach(button => {
    button.addEventListener('click', game);
});

// set output from dom to variable to display them on page
const singleMatch = document.querySelector('.single-result');
const gameResult = document.querySelector('.game-result');

// create array of choices
const arr = ['Rock', 'Paper', 'Scissors'];

// get computer selection
const getComputerChoice = () => {
    return arr[Math.floor(Math.random() * 3)];
}


// implement game logic with if else statements
function playSingle(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw ! The Fates collide...';
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        return `You Win ! ${playerSelection} beat ${computerSelection}...`;
    } else {
        return `You Lose ! ${playerSelection} lose against ${computerSelection}...`;
    }
}


// initiate wins count for both player and computer
let playerWins = 0;
let computerWins = 0;

// create 5 matches game
function game() {

    // get playerSelection
    const playerSelection = this.value;
    const computerSelection = getComputerChoice();

    // get result from a single match and store it in match result
    const matchResult = playSingle(playerSelection, computerSelection);

    // display single match result
    singleMatch.textContent = matchResult;

    // check Win or Lose from matchResult using string method .match() and increment Win counts
    if(matchResult.match('Win')) {

        playerWins++;
        if (playerWins >= 5) {
            gameResult.textContent = "Congrats, You're blessed with so much luck";
            buttons.forEach(button => {
                button.setAttribute('disabled', '');
            })
        }
    }

    if(matchResult.match('Lose')) {
        
        computerWins++;
        if (computerWins >= 5) {
            gameResult.textContent = "No more chances left, such a unlucky day. Good luck next time";
            buttons.forEach(button => {
                button.setAttribute('disabled', '');
            })
        }
    } 
    console.log(playerWins + ":" + computerWins);
}

// implement play again option
function playAgain () {

    // reset Win counts
    computerWins = 0;
    playerWins = 0;
    
    // enable back buttons
    buttons.forEach(button => {
        button.removeAttribute('disabled');
    })

    // remove game result texts
    singleMatch.textContent = '';
    gameResult.textContent = '';
}
document.getElementById('play-again').addEventListener('click', playAgain);