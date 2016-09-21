'use strict';

var yesNo = ['yes', 'y', 'no', 'n'];
var questions = ['What\'s your name?', 'Was I born in the U.S.?', 'Do I have 10 toes?', 'Do I like swimming?',
'Do I like running?', 'Is the color of my spaceship silver?'];
var correctAns = [];

askName();
question1();
question2();
question3();
question4();
question5();
question6();
question7();

function askName() {
  var userName = prompt(questions[0]).toLowerCase();
  alert('Welcome to my site  ' + userName);
}

function question1() {
  var questionOne = prompt(questions[1]).toLowerCase();
  if (questionOne === yesNo[2] || questionOne === yesNo[3]) {
    alert('Yes,I\'m from outerspace!');
  }
  else if (questionOne === yesNo[0] || questionOne === yesNo[1]) {
    alert('Nope, I\'m an alien from Mars!');
  }
}

function question2() {
  var questionTwo = prompt(questions[2]).toLowerCase();
  if (questionTwo === yesNo[0]) ||| questionTwo === yesNo[1]) {
    alert('You got it!');
  } else if (questionTwo === yesNo[2] || questionTwo === yesNo[3]){
    alert('Actually, I got 10 extra toes!');
  }
}

function question3() {
  var questionThree = prompt(questions[3]).toLowerCase();
  if (questionThree === 'yes' || questionThree === 'y') {
    alert('Nope, I will start melting if I touch water!');
  } else if (questionThree === yesNo[2] || questionThree === yesNo[3]){
    alert('That\'s right! I don\'t like water in my ears and nose!');
  }
}

function question4() {
  var questionFour = prompt(questions[4]).toLowerCase();
  if (questionFour === yesNo[0]) ||| questionFour === yesNo[1]) {
    alert('I have a jet pack so I can fly!');
  } else if (questionFour === yesNo[2] || questionFour === yesNo[3]) {
    alert('Not true, I believe I can fly, I believe I can touch the sky!');
  }
}

function question5() {
  var questionFive = prompt (questions[5]).toLowerCase();
  if (questionFive === yesNo[0]) ||| questionFive === yesNo[1]) {
    alert('My spaceship is Hot Pink!');
  } else if (questionFive === yesNo[2] || questionFive === yesNo[3]){
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
