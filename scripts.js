// 'use strict'
// let choice = prompt('Enter "Rock", "Paper", or "Scissors" to begin');
let Rock = '';
let Paper = '';
let Scissors = '';
let randomNum = Math.floor(Math.random() * 3) + 1;
let cpuChoice = randomNum == 1 ? 'Rock' : randomNum == 2 ? 'Paper' : randomNum == 3 ? Scissors : 'ERROR';
console.log('Enter "Rock", "Paper", or "Scissors" to begin');