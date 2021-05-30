'use strict';
let score = 0;
let userName = prompt('Please enter your Name and Surname', 'Your Name');
{
  alert('Welcome to the website ' + userName);
  score++;
}
function soccerQue() {
  let soccer = prompt('Do you like Soccer?');
  if (soccer === 'yes' || soccer === 'y') {
    alert('Me too');
    score++;
  } else if (soccer === 'no' || soccer === 'n') {
    alert('Really? :( I like it very much!'); dd
  } else {
    alert('Next time type yes or no!');
  }
  return soccer;
}
soccerQue();
function bookQue() {
  let books = prompt('Do you like Books?');
  switch (books.toLowerCase()) {
    case 'yes':
    case 'y':
      console.log('books');
      alert('Thats Great');
      score++;
      break;
    case 'no':
    case 'n':
      alert('You must trying to read some books!');
      break;
    default:
      alert('Next time plz type yes or no');
  }
  return books;
}
bookQue();
function palQue() {
  let Pal = prompt('Do you support Palestine?');
  switch (Pal.toLowerCase()) {
    case 'yes':
    case 'y':
      console.log('pal');
      alert('Free Palestine');
      score++;
      break;
    case 'no':
    case 'n':
      alert('Go to Hell!');
      break;
    default:
      alert('Next time plz type yes or no');
  }
  return Pal;
}
palQue();
function travelQue() {
  let travel = prompt('Do you like Travel?');
  switch (travel.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Me too i adore it :)');
      score++;
      break;
    case 'no':
    case 'n':
      alert('You must trying to travel!');
      break;
    default:
      alert('Next time plz type yes or no');
  }
  return travel;
}
travelQue();
function barcaQue() {
  let barca = prompt('Do you like Barcelona?');
  switch (barca.toLowerCase()) {
    case 'yes':
    case 'y':
      alert('Viva Barca! :)');
      score++;
      break;
    case 'no':
    case 'n':
      alert(':0');
      break;
    default:
      alert('Next time plz type yes or no');
  }
  return barca;
}
barcaQue();
function guessQue() {
  for (let i = 0; i <= 3; i++) {
    let guess = prompt('Pick a number from 1-50');
    guess = Number(guess);
    if (guess === 27) {
      alert('Correct answer');
      score++;
      break;
    } else if (guess < 27) {
      alert('too low!');
    } else if (guess > 27) {
      alert('too high!');
    }
    if (i === 3) {
      alert('Sorry you lost!');
    }
    return guess;
  }
}
guessQue();
function movieQue(){
  let favMovie = ['Scarface', 'The Godfather', 'V For Vendetta', 'The Hobbit', 'Lord of the rings'];
  outerLoop : for (let i = 0; i < 6; i++) {
    let uAnswer = prompt('Guess my favorite movie!');
    for(let j = 0 ; j < favMovie.length ; j++ ) {
      if(uAnswer === favMovie [j]){
        alert('correct answer');
        break outerLoop;
      }
    }
    if( i === 6){
      alert('not right answer')
    }
{ 
  return favMovie;
}
movieQue();
  }
}
alert(userName + ' your score is ' + score);
alert('Thank You, ' + userName);