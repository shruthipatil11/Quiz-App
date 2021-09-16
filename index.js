var readlineSync = require('readline-sync');

var score = 0;
var highestScore = [{"name":"Aparna","score":3},{"name":"Shwetha","score":2}];

var questions = [{
  "question":"where do I live ","answer":"yadgir"
},{
  "question":"where do I work ","answer":"TCS"
},{
  "question":"Do I like programming ","answer":"YES"
}]

function game(question,rightAnswer){
var userAnswer = readlineSync.question(question);

if(userAnswer.toLowerCase() == rightAnswer.toLowerCase())
{
  console.log("Right!");
  score++;
}
else {
   console.log("Wrong!");
  score--;
}
}

function checkIfScoreIsHighest(userScore)
{
  console.log("Your score: ", score);
    console.log("-------------------------------------");
  const arr = highestScore.filter(highScore =>  userScore >= highScore.score);

  if(arr.length > 0)
    {
      console.log("Congratilations.You are one of top player! You know me well");
      console.log("Please send the screenshot of the same to me so that record it");     
      console.log("-------------------------------------");
 
    }
}

function displayHighScores(){

  highestScore.map(highscore => console.log(`${highscore.name} : ${highscore.score}`));
}

function play() {
  questions.map(obj => game(obj.question,obj.answer));
  console.log("-------------------------------------");
}


play();
checkIfScoreIsHighest(score);
displayHighScores();


