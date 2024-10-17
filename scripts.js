//Valid Player Entries
let Rock = '';
let Paper = '';
let Scissors = '';
//CPU Player logic:
let randomNum = Math.floor(Math.random() * 3) + 1;
let cpuChoice = randomNum == 1 ? 'Rock' : randomNum == 2 ? 'Paper' : randomNum == 3 ? 'Scissors' : 'ERROR';
//Prompt:
console.log('Enter "Rock", "Paper", or "Scissors" to begin');

if(cpuChoice == 'Rock'){
    Rock = "Computer picks Rock, it's a draw!";
    Paper = "Computer picks Rock, You win!!";
    Scissors = "Computer picks Rock, Computer wins!";
}
else if(cpuChoice == 'Paper'){
    Rock = "Computer picks Paper, Computer wins!";
    Paper = "Computer picks Paper, it's a draw!";
    Scissors = "Computer picks Paper, You win!!";
}
else if(cpuChoice == 'Scissors'){
    Rock = "Computer picks Scissors, You win!!";
    Paper = "Computer picks Scissors, Computer wins!";
    Scissors = "Computer picks Scissors, it's a draw!";
}
