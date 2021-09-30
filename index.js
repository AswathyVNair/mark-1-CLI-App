var readlineSync=require('readline-sync')
var userName=readlineSync.question("What is your name? ")
console.log("WELCOME!! "+userName+ " to 🎲DO YOU KNOW Aswathy🎲")
var score=0;
var userAnswer;
function quiz(question,answer)
{

  if(userAnswer===answer)
  {
    console.log("You are RIGHT!! 🤩🤩");
    score=score+1;
  }
  else
  {
    console.log("You are WRONG 😞😞");
  }
  return 0 ;
}

  
  var questions=[
    "Which state do I belong to ? ",
    "Am I a student or working proffesional? ",
    "Do I have sibilings? ",
    "What kind of person I am,'introvert' or 'extrovert'? ",
    "What is the name of my favorite childhood pet?",
    "Do I like cooking? ",
    "What is my favourite colour? ",
    "What is my favourite food?",
    "Do I prefer tea or coffee? ",
    "For my holidays ,will I prefer 'beach' or 'hillstaion'? "]
  var answers=[
    "kerala",
    "student",
    "yes",
    "introvert",
    "tomy",
    "yes",
    "yellow",
    "kfc",
    "coffee",
    "hillstation"]

    for(i=0;i<questions.length;i++)
    {
      userAnswer=readlineSync.question(questions[i])
      quiz(questions[i],answers[i])
      console.log("SCORE:"+score)
    }
    console.log("Your final score is "+score)
    console.log("Check out high scores:\nAswathy:10")
