// set variables
var greetingEl = $("#greeting");
var startEl = $("#start");
var answerGridEl = $("#answer-list");
var questionEl = $("#questions");
var scoringEl = $("#scoring");
var timeleft = 50;
var score = 0;

// setup answer buttons
var answerEl1Q1 = $(
  '<button id="answer1" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl2Q1 = $(
  '<button id="answer2" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl3Q1 = $(
  '<button id="answer3" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl4Q1 = $(
  '<button id="answer4" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl1Q2 = $(
  '<button id="answer1" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl2Q2 = $(
  '<button id="answer2" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl3Q2 = $(
  '<button id="answer3" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl4Q2 = $(
  '<button id="answer4" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl1Q3 = $(
  '<button id="answer1" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl2Q3 = $(
  '<button id="answer2" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl3Q3 = $(
  '<button id="answer3" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl4Q3 = $(
  '<button id="answer4" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl1Q3 = $(
  '<button id="answer1" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl2Q3 = $(
  '<button id="answer2" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl3Q3 = $(
  '<button id="answer3" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl4Q3 = $(
  '<button id="answer4" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl1Q4 = $(
  '<button id="answer1" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl2Q4 = $(
  '<button id="answer2" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl3Q4 = $(
  '<button id="answer3" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl4Q4 = $(
  '<button id="answer4" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl1Q5 = $(
  '<button id="answer1" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl2Q5 = $(
  '<button id="answer2" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl3Q5 = $(
  '<button id="answer3" class="btn btn-primary rounded mb-1 d-flex"></button>'
);
var answerEl4Q5 = $(
  '<button id="answer4" class="btn btn-primary rounded mb-1 d-flex"></button>'
);

// timer functions
function countDown() {
  var timer = setInterval(function () {
    if (timeleft === 999) {
      clearInterval(timer);
    } else if (timeleft <= 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Time Ended.";
      endGame();
      questionEl.text("");
      answerGridEl.empty();
    } else if (timeleft === 1) {
      document.getElementById("timer").innerHTML = timeleft + " second left.";
    } else {
      document.getElementById("timer").innerHTML = timeleft + " seconds left.";
    }
    timeleft--;
  }, 1000);
}

// initial screen
function greetingCard() {
  greetingEl.text(
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds! Press the start button to begin."
  );
  startEl.append('<button class="btn btn-primary">Start Quiz</button>');

  startEl.on("click", qA1);
}

// clear start content function
function answerGrid() {
  greetingEl.text("");
  startEl.remove();

  answerGridEl.append(answerEl1Q1);
  answerGridEl.append(answerEl2Q1);
  answerGridEl.append(answerEl3Q1);
  answerGridEl.append(answerEl4Q1);
}

// start timer, clear screen and start first questions
var qA1 = function () {
  answerGrid();
  countDown();

  var currentQuestion = "The condition in an if / else statement is enclosed with _____.";
  var currentAnswer1 = "curly brackets";
  var currentAnswer2 = "square brackets";
  var currentAnswer3 = "parenthesis";
  var currentAnswer4 = "quotes";

  questionEl.text(currentQuestion);

  $("#answer1").append(currentAnswer1);
  $("#answer2").append(currentAnswer2);
  $("#answer3").append(currentAnswer3);
  $("#answer4").append(currentAnswer4);

  answerEl1Q1.on("click", ansCheck1n);
  answerEl2Q1.on("click", ansCheck1n);
  answerEl3Q1.on("click", ansCheck1y);
  answerEl4Q1.on("click", ansCheck1n);
};

var ansCheck1y = function () {
  answerEl1Q1.remove();
  answerEl2Q1.remove();
  answerEl3Q1.remove();
  answerEl4Q1.remove();

  if (timeleft > 0) {
    console.log("Correct");
    score = score + 20;
    console.log(score);
    qA2();
  } else {
    console.log("Game Over");
  }
};

var ansCheck1n = function () {
  answerEl1Q1.remove();
  answerEl2Q1.remove();
  answerEl3Q1.remove();
  answerEl4Q1.remove();

  if (timeleft > 0) {
    console.log("Wrong");
    timeleft = timeleft - 10;
    qA2();
  } else {
    console.log("Game Over");
  }
};

// second question
var qA2 = function () {
  answerGridEl.append(answerEl1Q2);
  answerGridEl.append(answerEl2Q2);
  answerGridEl.append(answerEl3Q2);
  answerGridEl.append(answerEl4Q2);

  var currentQuestion = "Commonly used data types DO Not Include:";
  var currentAnswer1 = "numbers";
  var currentAnswer2 = "alerts";
  var currentAnswer3 = "strings";
  var currentAnswer4 = "booleans";

  questionEl.text(currentQuestion);

  $("#answer1").append(currentAnswer1);
  $("#answer2").append(currentAnswer2);
  $("#answer3").append(currentAnswer3);
  $("#answer4").append(currentAnswer4);

  answerEl1Q2.on("click", ansCheck2n);
  answerEl2Q2.on("click", ansCheck2y);
  answerEl3Q2.on("click", ansCheck2n);
  answerEl4Q2.on("click", ansCheck2n);
};

var ansCheck2y = function () {
  answerEl1Q2.remove();
  answerEl2Q2.remove();
  answerEl3Q2.remove();
  answerEl4Q2.remove();

  if (timeleft > 0) {
    console.log("Correct");
    score = score + 20;
    console.log(score);
    qA3();
  } else {
    console.log("Game Over");
  }
};

var ansCheck2n = function () {
  answerEl1Q2.remove();
  answerEl2Q2.remove();
  answerEl3Q2.remove();
  answerEl4Q2.remove();

  if (timeleft > 0) {
    console.log("Wrong");
    timeleft = timeleft - 10;
    qA3();
  } else {
    console.log("Game Over");
  }
};

// question 3
var qA3 = function () {
  answerGridEl.append(answerEl1Q3);
  answerGridEl.append(answerEl2Q3);
  answerGridEl.append(answerEl3Q3);
  answerGridEl.append(answerEl4Q3);

  var currentQuestion = "A very useful tool used during development and debugging for printing content to the debugger is:";
  var currentAnswer1 = "console.log";
  var currentAnswer2 = "terminal/bash";
  var currentAnswer3 = "jquery";
  var currentAnswer4 = "javascript";

  questionEl.text(currentQuestion);

  $("#answer1").append(currentAnswer1);
  $("#answer2").append(currentAnswer2);
  $("#answer3").append(currentAnswer3);
  $("#answer4").append(currentAnswer4);

  answerEl1Q3.on("click", ansCheck3y);
  answerEl2Q3.on("click", ansCheck3n);
  answerEl3Q3.on("click", ansCheck3n);
  answerEl4Q3.on("click", ansCheck3n);
};

var ansCheck3y = function () {
  answerEl1Q3.remove();
  answerEl2Q3.remove();
  answerEl3Q3.remove();
  answerEl4Q3.remove();

  if (timeleft > 0) {
    console.log("Correct");
    score = score + 20;
    console.log(score);
    qA4();
  } else {
    console.log("Game Over");
  }
};

var ansCheck3n = function () {
  answerEl1Q3.remove();
  answerEl2Q3.remove();
  answerEl3Q3.remove();
  answerEl4Q3.remove();

  if (timeleft > 0) {
    console.log("Wrong");
    timeleft = timeleft - 10;
    qA4();
  } else {
    console.log("Game Over");
  }
};

// question 4
var qA4 = function () {
  answerGridEl.append(answerEl1Q4);
  answerGridEl.append(answerEl2Q4);
  answerGridEl.append(answerEl3Q4);
  answerGridEl.append(answerEl4Q4);

  var currentQuestion = "String values must be enclosed within _____ when being assigned to variables.";
  var currentAnswer1 = "commas";
  var currentAnswer2 = "curly brackets";
  var currentAnswer3 = "quotes";
  var currentAnswer4 = "parenthesis";

  questionEl.text(currentQuestion);

  $("#answer1").append(currentAnswer1);
  $("#answer2").append(currentAnswer2);
  $("#answer3").append(currentAnswer3);
  $("#answer4").append(currentAnswer4);

  answerEl1Q4.on("click", ansCheck4n);
  answerEl2Q4.on("click", ansCheck4n);
  answerEl3Q4.on("click", ansCheck4y);
  answerEl4Q4.on("click", ansCheck4n);
};

var ansCheck4y = function () {
  answerEl1Q4.remove();
  answerEl2Q4.remove();
  answerEl3Q4.remove();
  answerEl4Q4.remove();

  if (timeleft > 0) {
    console.log("Correct");
    score = score + 20;
    console.log(score);
    qA5();
  } else {
    console.log("Game Over");
  }
};

var ansCheck4n = function () {
  answerEl1Q4.remove();
  answerEl2Q4.remove();
  answerEl3Q4.remove();
  answerEl4Q4.remove();

  if (timeleft > 0) {
    console.log("Wrong");
    timeleft = timeleft - 10;
    qA5();
  } else {
    console.log("Game Over");
  }
};

// question 5
var qA5 = function () {
  answerGridEl.append(answerEl1Q5);
  answerGridEl.append(answerEl2Q5);
  answerGridEl.append(answerEl3Q5);
  answerGridEl.append(answerEl4Q5);

  var currentQuestion = "Arrays in JavaScript can be used to store _____.";
  var currentAnswer1 = "numbers and strings";
  var currentAnswer2 = "other arrays";
  var currentAnswer3 = "booleans";
  var currentAnswer4 = "all of the above";

  questionEl.text(currentQuestion);

  $("#answer1").append(currentAnswer1);
  $("#answer2").append(currentAnswer2);
  $("#answer3").append(currentAnswer3);
  $("#answer4").append(currentAnswer4);

  answerEl1Q5.on("click", ansCheck5n);
  answerEl2Q5.on("click", ansCheck5n);
  answerEl3Q5.on("click", ansCheck5n);
  answerEl4Q5.on("click", ansCheck5y);
};

var ansCheck5y = function () {
  answerEl1Q5.remove();
  answerEl2Q5.remove();
  answerEl3Q5.remove();
  answerEl4Q5.remove();

  if (timeleft > 0) {
    console.log("Correct");
    score = score + 20;
    console.log(score);
    endGame();
  } else {
    console.log("Game Over");
    endGame();
  }
};

var ansCheck5n = function () {
  answerEl1Q5.remove();
  answerEl2Q5.remove();
  answerEl3Q5.remove();
  answerEl4Q5.remove();

  if (timeleft > 0) {
    console.log("Wrong");
    timeleft = timeleft - 10;
    endGame();
  } else {
    console.log("Game Over");
    endGame();
  }
};

// read local storage and append new score to local storage and array
var saveHighScore = function () {
  let highScore = JSON.parse(localStorage.getItem("highScore") || "[]");
  var initialsInput = document.getElementById("initials").value;
  document.getElementById("initials").value = "";

  highScore.push({ initials: initialsInput, score: score });

  localStorage.setItem("highScore", JSON.stringify(highScore));
  displayHighScores();
};

// clear screen and get initials for scoring
var endGame = function () {
  questionEl.text("");
  scoringEl.append('<label for="initials" class="scoring-label" >Enter Initials:   </label>');
  scoringEl.append('<input type="text" name="initials" id="initials"/>');
  scoringEl.append(
    '<button id="highScoreButton" class="btn btn-primary">Submit</button>'
  );
  timeleft = 999;

  var highScoreButton = $("#highScoreButton");
  highScoreButton.on("click", saveHighScore);
};

// display saved scores
var displayHighScores = function () {
  scoringEl.empty();
  let highScore = JSON.parse(localStorage.getItem("highScore"));
  var scoreList = $('#score-list')

  scoringEl.append("<h2>High Scores</h2>");

  for (var i = 0; i < highScore.length; i++) {
    scoreList.append("<li>" + `${highScore[i].initials}` + ":    " + `${highScore[i].score}` + "</li>")
  }

};

greetingCard();
