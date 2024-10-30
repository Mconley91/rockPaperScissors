let playerScore = 0;
let computerScore = 0;
let gameOver = false;
const playerScoreReadout = document.querySelector('#playerScore');
const computerScoreReadout = document.querySelector('#computerScore');
const choices = document.querySelector('#choices');
const output = document.querySelector('#output');

choices.addEventListener('click',(event)=>{
    let btnPressed = event.target.id;
    playGame(btnPressed)
});

function playGame(play){
    if (gameOver){
        return;
    }
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let cpuChoice = randomNum == 1 ? 'rock' : randomNum == 2 ? 'paper' : randomNum == 3 ? 'scissors' : 'ERROR';
    let result;
    if (cpuChoice=='rock'){
        play == 'rock' ? result = `You picked ${play}. Computer picks ${cpuChoice}, it's a draw!` : 
        play == 'paper' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, You win the round!!`,playerScore++) :
        play == 'scissors' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, Computer wins the round!`,computerScore++) : console.log('ERROR');
    }
    else if (cpuChoice=='paper'){
        play == 'rock' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, Computer wins the round!`,computerScore++ ) : 
        play == 'paper' ? result = `You picked ${play}. Computer picks ${cpuChoice}, it's a draw!` :
        play == 'scissors' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, You win the round!!`, playerScore++) : console.log('ERROR');
    }
    else if (cpuChoice=='scissors'){
        play == 'rock' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, You win the round!!`,playerScore++) : 
        play == 'paper' ? (result = `You picked ${play}. Computer picks ${cpuChoice}, Computer wins the round!`,computerScore++) :
        play == 'scissors' ? result = `You picked ${play}. Computer picks ${cpuChoice}, it's a draw!` : console.log('ERROR');
    };
    let roundScore = document.createElement("li");
    roundScore.innerText = result;
    output.appendChild(roundScore);
    playerScoreReadout.innerText = playerScore;
    computerScoreReadout.innerText = computerScore;
    //final output
    if (playerScore === 5 && computerScore === 5){
        let victory = document.createElement('li');
        victory.innerText = "It's a tie!";
        output.appendChild(victory);
        gameOver = true;
    }
    else if (playerScore === 5){
        let victory = document.createElement('li');
        victory.innerText = 'You won the game!';
        output.appendChild(victory);
        gameOver = true;
    }
    else if(computerScore === 5){
        let victory = document.createElement('li');
        victory.innerText = 'Computer wins the game!';
        output.appendChild(victory);
        gameOver = true;
    }
};

function reset(){
    playerScore = 0;
    computerScore = 0;
    playerScoreReadout.innerText = playerScore;
    computerScoreReadout.innerText = computerScore;
    document.querySelector("#output").innerHTML = "";
    gameOver = false;
};