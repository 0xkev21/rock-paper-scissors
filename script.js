// create array of choices
const arr = ['Rock', 'Paper', 'Scissors'];

// get computer selection
const getComputerChoice = () => {
    return arr[Math.floor(Math.random() * 3)];
}

/* console.log(computerSelection); */

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
/* const playerSelection = 'Rock';
console.log(playSingle(playerSelection, computerSelection)); */


// create 5 matches game
function game() {

    // initiate wins count for both player and computer
    let playerWins = 0;
    let computerWins = 0;

    // loop until someone has won total 5 times
    for(let i=0; playerWins < 5 || computerWins < 5 ; i++) {

        // get playerSelection
        const playerSelection = prompt("Choose: Rock, Paper, Scissor");
        const computerSelection = getComputerChoice();

        // get result from a single match and store it in match result
        const matchResult = playSingle(playerSelection, computerSelection);

        // check Win or Lose using string method .match()
        if(matchResult.match('Win')) {
            console.log(matchResult);
            playerWins++;
            if (playerWins === 5) {
                return "Congrats, You're blessed with so much luck";
            }
        }
        if(matchResult.match('Lose')) {
            console.log(matchResult);
            computerWins++;
            if (computerWins === 5) {
                return "No more chances left, such a unlucky day. Good luck next time";
            }
        }
    }
}