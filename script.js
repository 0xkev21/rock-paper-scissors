// get input from user through button inputs
const buttons = document.querySelectorAll('input');
buttons.forEach(button => {
    button.addEventListener('click', game);
});
const playAgainBtn = document.querySelector('#play-again');

// set dom elements to variables to display results
const singleMatch = document.querySelector('#single-result');
const result = document.querySelector('.result');
const gameResult = document.querySelector('#game-result');
const d_playerWins = document.querySelector('#playerPoints');
const d_computerWins = document.querySelector('#computerPoints');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');

// create array of choices
const arr = ['Rock', 'Paper', 'Scissors'];

// preload images for choices
arr.forEach(choice => {
    const img = new Image();
    img.src = `images/${choice}.svg`;
})

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

    // get playerSelection and computer selection
    const playerSelection = this.value;
    const computerSelection = getComputerChoice();

    // get result from a single match and store it in match result
    const matchResult = playSingle(playerSelection, computerSelection);

    // display single match result
    playerChoice.setAttribute('src', `images/${playerSelection}.svg`);
    computerChoice.setAttribute('src', `images/${computerSelection}.svg`);
    singleMatch.textContent = matchResult;

    // check Win or Lose from matchResult using string method .match() and increment Win counts
    if(matchResult.match('Win')) {
        playerWins++;

        if (playerWins >= 5) {
            gameResult.textContent = "Congrats, You're blessed with so much luck !";
            buttons.forEach(button => {
                button.setAttribute('disabled', '');
            });
            result.classList.add('show');
        }
    }

    if(matchResult.match('Lose')) {
        computerWins++;

        if (computerWins >= 5) {
            gameResult.textContent = "No more chances left, such an unlucky day. Good luck next time";
            buttons.forEach(button => {
                button.setAttribute('disabled', '');
            });
            result.classList.add('show');
        }
    } 
    // console.log(playerWins + ":" + computerWins);
    d_playerWins.textContent = playerWins;
    d_computerWins.textContent = computerWins;
}

// implement play again option
function playAgain () {

    // reset Win counts and dom elements
    computerWins = 0;
    playerWins = 0;
    d_playerWins.textContent = playerWins;
    d_computerWins.textContent = computerWins;
    playerChoice.src = 'images/placeholder.svg';
    computerChoice.src = 'images/placeholder.svg';
    
    // enable buttons back
    buttons.forEach(button => {
        button.removeAttribute('disabled');
    });
    result.classList.remove('show');

    // remove game result texts
    singleMatch.textContent = '';
    gameResult.textContent = '';
}
document.getElementById('play-again').addEventListener('click', playAgain);
