var readlinesync = require('readline-sync');
var intro=readlinesync.question("Let's see how well do you know me. You'll score 1 for each correct answer. \n What's your name btw?\n");
if(readlinesync.keyInYNStrict('Do you want to proceed?')) {
  
var score=0;
function play(question,answer) {
  var userAnswer=readlinesync.question(question).toLowerCase();
  if(userAnswer==answer) {
    console.log("Correct!");
    score++;
  }
  else {
    console.log("Wrong!");
    score--;
  }
}
var favSuperhero = {
  que: "What's my favourite Superhero?\n",
  ans: "ironman",
};
var home = {
  que: "Where do I live?\n",
  ans: "ghaziabad",
};
var favFood = {
  que: "What's my favorite food?\n",
  ans: "pizza",
};
var favMovie = {
  que: "What's my favorite movie?\n",
  ans: "endgame",
};
var favAuthor = {
    que: "Who's my favorite author?\n",
    ans: "charles dickens",
};    
var arr = [favSuperhero, home, favFood, favMovie, favAuthor];
for(i=0; i<arr.length; i++) {
  play(arr[i].que,arr[i].ans)
}
console.log("Your score is: ", score);
var highScore = {
  name: intro,
  userScore: score,
};
}
else {
  console.log("Alright, Have a good day!");
}
