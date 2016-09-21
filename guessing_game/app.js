'use strict';

askName();
question1();
question2();
question3();
question4();
question5();
question6();
question7();

function askName() {
  var userName = prompt('What\'s your name?');
  alert('Welcome to my site  ' + userName);
}

function question1() {
  var questionOne = prompt('Was I born in the U.S.?').toLowerCase();
  if (questionOne === 'yes' || questionOne === 'y') {
    alert('Nope, I\'m an alien from Mars!');
  } else if (questionOne === 'no' || questionOne === 'n') {
    alert('Yes,I\'m from outerspace!');
  }
}

function question2() {
  var questionTwo = prompt('Do I have 10 toes?').toLowerCase();
  if (questionTwo === 'yes' || questionTwo === 'y') {
    alert('You got it!');
  } else if (questionTwo === 'no' || questionTwo === 'n'){
    alert('Actually, I got 10 extra toes!');
  }
}

function question3() {
  var questionThree = prompt('Do I like swimming?').toLowerCase();
  if (questionThree === 'yes' || questionThree === 'y') {
    alert('Nope, I will start melting if I touch water!');
  } else if (questionThree === 'no' || questionThree === 'n'){
    alert('That\'s right! I don\'t like water in my ears and nose!');
  }
}

function question4() {
  var questionFour = prompt('Do I like running?').toLowerCase();
  if (questionFour === 'yes' || questionFour === 'y') {
    alert('I have a jet pack so I can fly!');
  } else if (questionFour === 'no' || questionFour === 'n'){
    alert('Not true, I believe I can fly, I believe I can touch the sky!');
  }
}

function question5() {
  var questionFive = prompt ('Is the color of my spaceship silver?');
  if (questionFive === 'yes' || questionFive === 'y') {
    alert('My spaceship is Hot Pink!');
  } else if (questionFive === 'no' || questionFive === 'n'){
    alert('That\'s right. I don\'t have a spaceship the mothership left me!' );
  }
}

function question6() {
  var questionSix = prompt('What do you think aliens like to drink?').toLowerCase();
  var answerSix = ['coffee','milkshake'];
  if (answerSix.indexOf(questionSix) === -1) {
    console.log('not the right answer');
    alert('not the right answer');
  } else {
    console.log('right answer');
    alert('Roger loves coffee, and milkshake on a hot day');
  }
}

function question7() {
  var alienYears = 136;
  var questionSeven = parseInt(prompt('Can you guess how old I am in Alien years?'));
  if (questionSeven === alienYears) {
    alert('Thanks, I just had botox done');
  } else if (questionSeven !== alienYears) {
    alert('I am 136 Alien years old');
  }
}
