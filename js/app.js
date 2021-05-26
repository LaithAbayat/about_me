'use strict';
let score = 0;
let userName = prompt('Please enter your Name and Surname','Your Name');
{
  alert('Welcome to the website ' + userName);
  score++;
}

let soccer=prompt('Do you like Soccer?');
if(soccer ==='yes' || soccer === 'y'){
  alert('Me too');
  score++;
}else if(soccer ==='no' || soccer ==='n'){
  alert('Really? :( I like it very much!');
}else{
  alert('Next time type yes or no!');
}

let books = prompt('Do you like Books?');
switch(books.toLowerCase()){
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

let Pal = prompt('Do you support Palestine?');
switch(Pal.toLowerCase()){
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

let travel = prompt('Do you like Travel?');
switch(travel.toLowerCase()){
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

let barca = prompt('Do you like Barcelona?');
switch(barca.toLowerCase()){
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

let favMovie = ['Scarface', 'The Godfather','V For Vendetta','The Hobbit','Lord of the rings'];
favMovie = prompt('Guess my favorite movie from this list: Scarface, The Godfather, V For Vendetta, The Hobbit, Lord of the rings, The First Time !');

while(favMovie !== 'Scarface'){
  favMovie = prompt('Wrong guess :( try again .. '+'  Guess my favorite movie from this list: Scarface, The Godfather, V For Vendetta, The Hobbit, Lord of the rings, The First Time !');
}

{

  alert(userName +' your score is '+score);
  alert('Thank You, ' + userName);
}
