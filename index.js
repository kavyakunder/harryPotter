var readlineSync=require('readline-sync');
const chalk = require('chalk');

var userName=readlineSync.question(chalk.magentaBright(("What is your name?")));
var score=0;
console.log(chalk.red
("Hi "+chalk.yellowBright(userName)+" Welcome to our Harry Potter Quiz App"));



function quiz(question,answer)
{
  var userAns=readlineSync.question(chalk.cyanBright(question));
  if(userAns.toLowerCase()===answer)
  {
    console.log(chalk.blue("Yes,you are correct"));
    score++;
  }
  else
  {
    console.log(chalk.grey("You are wrong"));
  }
};

var questions=[
{
  question:"What is the name of Harry Potter's owl?",
  answer:"hedwig"
},
{
  question:"What house is Harry Potter sorted into?",
  answer:"gryffindor "
},
{
  question:"Who was the first goblin Harry ever met?",
  answer:"griphook"
},
{
  question:"Who was Harry’s first defence against the dark arts teacher?",
  answer:"professor quirrell"
},
{
  question:"What was Lord Voldemort's original name?",
  answer:"tom riddle"
}]



for (var i=0;i<questions.length;i++)
{
  var questionNos=questions[i];
quiz(questionNos.question,questionNos.answer)
};
if (score>3)
{
  console.log(chalk.green("So this means you are a true potterhead and your score is "+score));
}
else{
  console.log(chalk.green("Your score is "+score));
}






