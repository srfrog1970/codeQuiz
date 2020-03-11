var questionCount = 0;
var promptQuestion = document.querySelector("#promptQuestion");
var answer1Text = document.querySelector("#answer1Text");
var answer2Text = document.querySelector("#answer2Text");
var answer3Text = document.querySelector("#answer3Text");
var answer4Text = document.querySelector("#answer4Text");
var secondsLeftText = document.querySelector("#secondsLeftText");
var result = document.querySelector("#result");

var currQuestion = "";
var secondsLeft = 5;
var correctAnswers = 0;

var question1 = {
  question: "Inside which HTML element do we put the JavaScript?",
  answer1: "<div>",
  answer2: "<h1>",
  answer3: "<script>",
  answer4: "<code>",
  answer: "3"
};

var question2 = {
  question: "Blueberries taste good because?",
  answer1: "Cool Name",
  answer2: "Color",
  answer3: "They go good with everything",
  answer4: "All the Above",
  answer: "4"
};

function loadQuestion() {
  questionCount += 1;
  if (questionCount == 1) {
    currQuestion = question1;
  }
  if (questionCount == 2) {
    currQuestion = question2;
  }
  questionNum.innerHTML = questionCount;
  promptQuestion.innerHTML = currQuestion.question;
  answer1Text.textContent = currQuestion.answer1;
  answer2Text.textContent = currQuestion.answer2;
  answer3Text.textContent = currQuestion.answer3;
  answer4Text.textContent = currQuestion.answer4;
}

function checkAnswer(ans) {
  //   console.log(currQuestion);
  debugger;
  if (ans == currQuestion.answer) {
    console.log("Correct!");
    result.innerHTML = "Correct!";
    correctAnswers += 1;
  } else {
    result.innerHTML = "Wrong!";
  }
  //   setTimeout(myFunction, 2000);
  loadQuestion();
}

function startTimer() {
  console.log("got it");
  myVar = setInterval(function() {
    secondsLeftText.innerHTML = secondsLeft;
    secondsLeft -= 1;
    console.log(secondsLeft);
    if (secondsLeft < 0) {
      clearInterval(myVar);
      localStorage.setItem("finalScore", correctAnswers);
      location.replace("finalScore.html");
    }
  }, 1000);
}

startTimer();
loadQuestion();

answer1Text.addEventListener("click", function() {
  checkAnswer(1);
});
answer2Text.addEventListener("click", function() {
  checkAnswer(2);
});
answer3Text.addEventListener("click", function() {
  checkAnswer(3);
});
answer4Text.addEventListener("click", function() {
  checkAnswer(4);
});
