let computerMove = " ";
function random () {
const randomNumber = Math.random();
if (randomNumber >= 0 && randomNumber < 1/3) {
 computerMove = 'rock';
} else if (randomNumber > 1/3 && randomNumber <2/3) {
 computerMove = 'paper';
} else {
 computerMove = 'scissors';
}
console.log(computerMove);
return computerMove
}

let result = " ";
let Tie = `It's a Tie.`;
let lose = 'You Lost.';
let win = 'You Won.';

function Res (b) 
{    
    let buttonValue = b;
    if 
    (computerMove === 'rock' && buttonValue === 'rock')
        {result = Tie;} 
    else if (computerMove === 'paper' && buttonValue === 'paper')  
        {result = Tie;} 
    else if (computerMove === 'scissors' && buttonValue === 'scissors') 
        {result = Tie;} 
    else if (computerMove === 'paper' && buttonValue === 'rock') 
        {result = lose;} 
    else if (computerMove === 'scissors' && buttonValue === 'paper') 
        {result = lose;}
    else if (computerMove === 'rock' && buttonValue === 'scissors') 
        {result = lose;} 
    else if (computerMove === 'rock' && buttonValue === 'paper') 
        {result = win;} 
    else if (computerMove === 'scissors' && buttonValue === 'rock') 
        {result = win; } 
    else  {result = win;}
   
    console.log(result);
    
    return  bval = buttonValue;
} 
let score = 0;
function count () {
 if (score === 0 && result === 'Its a tie.' ) 
    {score = score + 0;} 
 else if (score >= 0 && result === 'You Won.' ) 
    {score = score + 1;}
 else if (score > 0 && result === 'You Lost.' ) 
    {score = score - 1;}
 console.log(score);


 return score  
 }

 function alt () {
 alert('You slected '+ bval +', I got ' + computerMove + ' & '+ result +' Your total score is '+ score);
 
}
function disp () {

    document.querySelector('.jsrps').innerHTML = 'Your net score is: '+ score;

    if (bval === 'rock' && computerMove === 'rock')  
    {document.querySelector('.skl').innerHTML = `<img src="rock-emoji.png" class="icon"> VS <img src="rock-emoji.png" class="icon">`} 
    
    else if (bval === 'paper' && computerMove === 'paper') {document.querySelector('.skl').innerHTML = `<img src="paper-emoji.png" class="icon"> VS <img src="paper-emoji.png" class="icon">`}

    else if (bval === 'scissors' && computerMove === 'scissors') {document.querySelector('.skl').innerHTML = `<img src="scissors-emoji.png" class="icon"> VS <img src="scissors-emoji.png" class="icon">`}

    else if (bval === 'paper' && computerMove === 'rock') {document.querySelector('.skl').innerHTML = `<img src="paper-emoji.png" class="icon"> VS <img src="rock-emoji.png" class="icon">`}

    else if (bval === 'scissors' && computerMove === 'paper') {document.querySelector('.skl').innerHTML = `<img src="scissors-emoji.png" class="icon"> VS <img src="paper-emoji.png" class="icon">`}

    else if (bval === 'rock' && computerMove === 'scissors') {document.querySelector('.skl').innerHTML = `<img src="rock-emoji.png" class="icon"> VS <img src="scissors-emoji.png" class="icon">`}

    else if (bval === 'rock' && computerMove === 'paper') {document.querySelector('.skl').innerHTML = `<img src="rock-emoji.png" class="icon"> VS <img src="paper-emoji.png" class="icon">`}

    else if (bval === 'rock' && computerMove === 'paper') {document.querySelector('.skl').innerHTML = `<img src="rock-emoji.png" class="icon"> VS <img src="paper-emoji.png" class="icon">`}

    else if (bval === 'scissors' && computerMove === 'rock') {document.querySelector('.skl').innerHTML = `<img src="scissors-emoji.png" class="icon"> VS <img src="rock-emoji.png" class="icon">`}

    else {document.querySelector('.skl').innerHTML = `<img src="paper-emoji.png" class="icon"> VS <img src="scissors-emoji.png" class="icon">`}
    
    
    

    document.querySelector('.sk').innerHTML = result;
    
}


function reset () {
    score = 0;
    document.querySelector('.jsrps').innerHTML = 'Your net score is: '+ score;
    document.querySelector('.sk').innerHTML = '';
    document.querySelector('.skl').innerHTML = 'Game Reset'
}

function playGame(q) {
    random();
    Res(q);
    count ();
    disp ();

}



