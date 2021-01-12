var readlineSync = require("readline-sync")
const chalk = require('chalk');
var score = 0;

var name = readlineSync.question("What is your name? ");
console.log("\n");
console.log("Welcome "+ chalk.green(name) + " to HOW MUCH DO YOU KNOW HARRY POTTER? ");
console.log("\n");
console.log(chalk.blue("For 1 RIGHT answer you will get a SCORE 1 and For a 1 WRONG answer you will get a penality of negative 1"))
console.log("\n");

function play(questions,answers)
{
  var userAnswer = readlineSync.question(questions);
  if(userAnswer.toUpperCase() === answers.toUpperCase())
  {
    console.log(chalk.yellow("Right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("Wrong!"));
    score = score - 1;
  }

  console.log("Your Current Score is: ", score);
  console.log("--------");
}
var array = [{
  question: "1) How many brothers did Ron Weasley have? \n"+"\n"+"a: 2"+"\n"+"b: 4"+"\n"+"c: 5"+"\n"+"Ans: ",
  answer: "5"
},{
   question: "2) What Hogwarts house was Lucius Malfoy in?"+"\n"+"a: Godric Gryffindor"+"\n"+"b: Slytherin House"+"\n"+"c: Rowena Ravenclaw"+"\n"+"Ans: ",
  answer: "Slytherin House"
},{
   question: "3) What is Neville’s toad’s name?"+"\n"+"a: Trevor"+"\n"+"b: Scabbers"+"\n"+"c: Crookshanks"+"\n"+"Ans: ",
  answer: "Trevor"
},{
   question: "4) Who teaches Harry how to play Wizard’s chess?"+"\n"+"a: Hagrid"+"\n"+"b: Dudley"+"\n"+"c: Ron"+"\n"+"Ans: ",
  answer: "Ron"
},{
   question: "5) Who said this?: “It’s Levi-o-sa, not Levio-sa."+"\n"+"a: Harry Potter"+"\n"+"b: Hermione Granger"+"\n"+"c: Petunia Dursley"+"\n"+"Ans: ",
  answer: "Hermione Granger"
},{
   question: "6) Which animal does Hermione become when she takes Polyjuice Potion in Chamber of Secrets?"+"\n"+"a: A toad"+"\n"+"b: A cat"+"\n"+"c: An owl"+"\n"+"Ans: ",
  answer: "A cat"
},{
   question: "7) Hermione Granger’s parents are dentists?"+"\n"+"a: True"+"\n"+"b: False"+"\n"+"Ans: ",
  answer: "True"
},{
   question: "8) Hagrid’s dog’s name is Fluffy?"+"\n"+"a: True"+"\n"+"b: False"+"\n"+"Ans: ",
  answer: "True"
},{
   question: "9) Which Hogwarts teaching position is cursed?"+"\n"+"a: Potions"+"\n"+"b: Flying"+"\n"+"c: Defence Against the Dark Arts"+"\n"+"Ans: ",
  answer: "Defence Against the Dark Arts"
},{
   question: "10) What is the name of Harry Potter’s pet owl?"+"\n"+"a: Hedwig"+"\n"+"b: Crookshanks"+"\n"+"c: Scabbers"+"\n"+"Ans: ",
  answer: "Hedwig"
}];
for(var i=0;i<array.length;i++)
{
  var currentQuestion = array[i];
  play(currentQuestion.question,currentQuestion.answer);
}


console.log(chalk.blue("yay! You Score"), score, chalk.blue("out of 10"));

