let playerScore = 0;
let computerScore = 0;
// const rockBtn = document.querySelector('#rock');
// const paperBtn = document.querySelector('#paper');
// const scissorsBtn = document.querySelector('#scissors');
const choices = document.querySelector('#choices');
choices.addEventListener('click',(event)=>{
    let btnPressed = event.target.id;
    playGame(btnPressed)
});

function playGame(play){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let cpuChoice = randomNum == 1 ? 'rock' : randomNum == 2 ? 'paper' : randomNum == 3 ? 'scissors' : 'ERROR';
    let result;
    if (cpuChoice=='rock'){
        play == 'rock' ? result = `You picked ${play}. Computer picks ${cpuChoice}, it's a draw!` : 
        play == 'paper' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, You win!!`,playerScore++) :
        play == 'scissors' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, Computer wins!`,computerScore++) : console.log('ERROR');
    }
    else if (cpuChoice=='paper'){
        play == 'rock' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, Computer wins!`,computerScore++ ) : 
        play == 'paper' ? result = `You picked ${play}. Computer picks ${cpuChoice}, it's a draw!` :
        play == 'scissors' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, You win!!`, playerScore++) : console.log('ERROR');
    }
    else if (cpuChoice=='scissors'){
        play == 'rock' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, You win!!`,playerScore++) : 
        play == 'paper' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, Computer wins!`,computerScore++) :
        play == 'scissors' ? result = `You picked ${play}. Computer picks ${cpuChoice}, it's a draw!` : console.log('ERROR');
    };
//final output
// console.log(`Final Score= Player: ${playerScore} Computer: ${computerScore}`);
// playerScore > computerScore ? console.log('You won the game!') : 
// playerScore == computerScore ? console.log("It's a tie!") : 
// console.log('Computer wins the game!');
};
    