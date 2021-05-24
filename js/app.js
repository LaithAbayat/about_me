'use strict';

var name = prompt('Please enter your Name and Surname','Your Name');
{
  alert('Welcome to the website ' + name);
}

let soccer=prompt('Do you like Soccer?');
if(soccer ==='yes'){
  alert('Me too');
}else if(soccer ==='no'){
  alert('Really? :( I like it very much!');
}else{
  alert('Next time type yes or no!');
}

let books = prompt('Do you like Books?');
switch(books.toLowerCase()){
case 'yes':
  console.log('books')
  alert('Thats Great');
  break;
case 'no':
  alert('You must trying to read some books!');
  break;
default:
  alert('Next time plz type yes or no');
}

let Pal = prompt('Do you support Palestine?');
switch(Pal.toLowerCase()){
case 'yes':
  console.log('pal')
  alert('Free Palestine');
  break;
case 'no':
  alert('Go to Hell!');
  break;
default:
  alert('Next time plz type yes or no');
}

let travel = prompt('Do you like Travel?');
switch(travel.toLowerCase()){
case 'yes':
  alert('Me too i adore it :)');
  break;
case 'no':
  alert('You must trying to travel!');
  break;
default:
  alert('Next time plz type yes or no');
}

let barca = prompt('Do you like Barcelona?');
switch(travel.toLowerCase()){
case 'yes':
  alert('Viva Barca! :)');
  break;
case 'no':
  alert(':0');
  break;
default:
  alert('Next time plz type yes or no');
}

{
  alert('Thank You, ' + name);
}
