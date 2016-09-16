var userName = prompt("What's your name?");
alert('Welcome to my site  '+ userName);

var questionOne = prompt('Was I born in the U.S.?');
questionOne = questionOne.toLowerCase();

if (questionOne === 'yes' || questionOne ==='y') {
  alert('Nope, I\'m an alien from Mars!');

} else if (questionOne === 'no' || questionOne ==='n') {
  alert('Yes,I\'m from outerspace!');
}

var questionTwo = prompt('Do I have 10 toes?');
questionTwo = questionTwo.toLowerCase();

if (questionTwo === 'yes' || questionTwo ==='y') {
  alert('You got it!');

} else if (questionTwo === 'no' || questionTwo ==='n'){
  alert('Actually, I got 10 extra toes!');
}

var questionThree = prompt('Do I like swimming?');
questionThree = questionThree.toLowerCase();

if (questionThree === 'yes' || questionThree ==='y') {
  alert('Nope, I will start melting if I touch water!');

} else if (questionThree === 'no' || questionThree ==='n'){
  alert('That\'s right! I don\'t like water in my ears and nose!');
}

var questionFour = prompt('Do I like running?');
questionFour = questionFour.toLowerCase();

if (questionFour === 'yes' || questionFour ==='y') {
  alert('I have a jet pack so I can fly!');

} else if (questionFour === 'no' || questionFour ==='n'){
  alert('Not true, I believe I can fly, I believe I can touch the sky!');
}
