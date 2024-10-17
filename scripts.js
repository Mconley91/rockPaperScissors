for(let i = 0; i < 3; i++){
    //prompt:
    const play = prompt('Open the web console to play. Enter "Rock", "Paper", or "Scissors" to begin!').toLowerCase();
    //CPU player logic:
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let cpuChoice = randomNum == 1 ? 'Rock' : randomNum == 2 ? 'Paper' : randomNum == 3 ? 'Scissors' : 'ERROR';
    //input handling
    if(play != 'rock' && play != 'paper' && play != 'scissors'){
        //alerts player to invalid entry & stalls the advancement of turns
        alert('Invalid Entry');
        i--;
    }
    else{
        if (cpuChoice=='Rock'){
            play == 'rock' ? console.log("Computer picks Rock, it's a draw!") : 
            play == 'paper' ? console.log("Computer picks Rock, You win!!") :
            play == 'scissors' ? console.log("Computer picks Rock, Computer wins!") : console.log('null');
            console.log('You picked: ' + play);
        }
        else if (cpuChoice=='Paper'){
            play == 'rock' ? console.log("Computer picks Paper, Computer wins!") : 
            play == 'paper' ? console.log("Computer picks Paper, it's a draw!") :
            play == 'scissors' ? console.log("Computer picks Paper, You win!!") : console.log('null');
            console.log('You picked: ' + play);
        }
        else if (cpuChoice=='Scissors'){
            play == 'rock' ? console.log("Computer picks Scissors, You win!!") : 
            play == 'paper' ? console.log("Computer picks Scissors, Computer wins!") :
            play == 'scissors' ? console.log("Computer picks Scissors, it's a draw!") : console.log('null');
            console.log('You picked: ' + play);
        }
    };
    // troubleshooting
    // console.log('Random number was: ' + randomNum);
}
console.log('To play again, refresh this webpage');