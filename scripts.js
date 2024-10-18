    //score tracker
    let playerScore = 0;
    let computerScore = 0;

for(let i = 0; i < 3; i++){
    //prompt:
    const play = prompt('Open the web console to play. The game is best 2 out of 3. Enter "rock", "paper", or "scissors" to begin!').toLowerCase();
    //CPU player logic:
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let cpuChoice = randomNum == 1 ? 'rock' : randomNum == 2 ? 'paper' : randomNum == 3 ? 'scissors' : 'ERROR';
    
    //input handling
    if(play != 'rock' && play != 'paper' && play != 'scissors'){
        //alerts player to invalid entry & stalls the advancement of turns
        alert('Invalid Entry');
        i--;
    }
    else{
        if (cpuChoice=='rock'){
            play == 'rock' ? console.log(`You picked ${play}. Computer picks ${cpuChoice}, it's a draw!`) : 
            play == 'paper' ? (console.log(`You picked ${play}. Computer picks ${cpuChoice}, You win!!`),playerScore++) :
            play == 'scissors' ? (console.log(`You picked ${play}. Computer picks ${cpuChoice}, Computer wins!`),computerScore++) : console.log('massive error has occured');
            
        }
        else if (cpuChoice=='paper'){
            play == 'rock' ? (console.log(`You picked ${play}. Computer picks ${cpuChoice}, Computer wins!`),computerScore++ ) : 
            play == 'paper' ? console.log(`You picked ${play}. Computer picks ${cpuChoice}, it's a draw!`) :
            play == 'scissors' ? (console.log(`You picked ${play}. Computer picks ${cpuChoice}, You win!!`), playerScore++) : console.log('massive error has occured');
            
        }
        else if (cpuChoice=='scissors'){
            play == 'rock' ? (console.log(`You picked ${play}. Computer picks ${cpuChoice}, You win!!`),playerScore++) : 
            play == 'paper' ? (console.log(`You picked ${play}. Computer picks ${cpuChoice}, Computer wins!`),computerScore++) :
            play == 'scissors' ? console.log(`You picked ${play}. Computer picks ${cpuChoice}, it's a draw!`) : console.log('massive error has occured');
            
        }
    };
};
//final output
console.log(`Final Score= Player: ${playerScore} Computer: ${computerScore}`);
playerScore > computerScore ? console.log('You won the game!') : 
playerScore == computerScore ? console.log("It's a tie!") : 
console.log('Computer wins the game!');