var greetingEl = $("#greeting");
var startEl = $("#start");
var answerGridEl = $("#answer-list");
var questionEl = $("#questions");
var timeleft = 10;

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

//timer functions
function countDown() {
  var timer = setInterval(function () {
    if (timeleft === 999) {
        clearInterval(timer);
    }
    else if (timeleft <= 0) {
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

function greetingCard() {
  greetingEl.text(
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds! Press the start button to begin."
  );
  startEl.append('<button class="btn btn-primary">Start Quiz</button>');

  startEl.on("click", qA1);
}

function answerGrid() {
  greetingEl.text("");
  startEl.remove();

  answerGridEl.append(answerEl1Q1);
  answerGridEl.append(answerEl2Q1);
  answerGridEl.append(answerEl3Q1);
  answerGridEl.append(answerEl4Q1);
}

var qA1 = function () {
  answerGrid();
  countDown();

  var currentQuestion = "This is question 1";
  var currentAnswer1 = " This is answer 1-2";
  var currentAnswer2 = " This is answer 1-2";
  var currentAnswer3 = " This is answer 1-3";
  var currentAnswer4 = " This is answer 1-4";

  questionEl.text(currentQuestion);

  $("#answer1").append(currentAnswer1);
  $("#answer2").append(currentAnswer2);
  $("#answer3").append(currentAnswer3);
  $("#answer4").append(currentAnswer4);

  answerEl1Q1.on("click", ansCheck1y);
  answerEl2Q1.on("click", ansCheck1n);
  answerEl3Q1.on("click", ansCheck1n);
  answerEl4Q1.on("click", ansCheck1n);
};

var ansCheck1y = function () {
  answerEl1Q1.remove();
  answerEl2Q1.remove();
  answerEl3Q1.remove();
  answerEl4Q1.remove();

  if (timeleft > 0) {
    console.log("Correct");
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
    qA2();
  } else {
    console.log("Game Over");
  }
};

var qA2 = function () {
  answerGridEl.append(answerEl1Q2);
  answerGridEl.append(answerEl2Q2);
  answerGridEl.append(answerEl3Q2);
  answerGridEl.append(answerEl4Q2);

  var currentQuestion = "This is question 2";
  var currentAnswer1 = " This is answer 2-1";
  var currentAnswer2 = " This is answer 2-2";
  var currentAnswer3 = " This is answer 2-3";
  var currentAnswer4 = " This is answer 2-4";

  questionEl.text(currentQuestion);

  $("#answer1").append(currentAnswer1);
  $("#answer2").append(currentAnswer2);
  $("#answer3").append(currentAnswer3);
  $("#answer4").append(currentAnswer4);

  answerEl1Q2.on("click", ansCheck2y);
  answerEl2Q2.on("click", ansCheck2n);
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
    qA3();
  } else {
    console.log("Game Over");
  }
};

var qA3 = function () {
  answerGridEl.append(answerEl1Q3);
  answerGridEl.append(answerEl2Q3);
  answerGridEl.append(answerEl3Q3);
  answerGridEl.append(answerEl4Q3);

  var currentQuestion = "This is question 3";
  var currentAnswer1 = " This is answer 3-1";
  var currentAnswer2 = " This is answer 3-2";
  var currentAnswer3 = " This is answer 3-3";
  var currentAnswer4 = " This is answer 3-4";

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
    qA4();
  } else {
    console.log("Game Over");
  }
};

var qA4 = function () {
  answerGridEl.append(answerEl1Q4);
  answerGridEl.append(answerEl2Q4);
  answerGridEl.append(answerEl3Q4);
  answerGridEl.append(answerEl4Q4);

  var currentQuestion = "This is question 4";
  var currentAnswer1 = " This is answer 4-1";
  var currentAnswer2 = " This is answer 4-2";
  var currentAnswer3 = " This is answer 4-3";
  var currentAnswer4 = " This is answer 4-4";

  questionEl.text(currentQuestion);

  $("#answer1").append(currentAnswer1);
  $("#answer2").append(currentAnswer2);
  $("#answer3").append(currentAnswer3);
  $("#answer4").append(currentAnswer4);

  answerEl1Q4.on("click", ansCheck4y);
  answerEl2Q4.on("click", ansCheck4n);
  answerEl3Q4.on("click", ansCheck4n);
  answerEl4Q4.on("click", ansCheck4n);
};

var ansCheck4y = function () {
  answerEl1Q4.remove();
  answerEl2Q4.remove();
  answerEl3Q4.remove();
  answerEl4Q4.remove();

  if (timeleft > 0) {
    console.log("Correct");
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
    qA5();
  } else {
    console.log("Game Over");
  }
};

var qA5 = function () {
  answerGridEl.append(answerEl1Q5);
  answerGridEl.append(answerEl2Q5);
  answerGridEl.append(answerEl3Q5);
  answerGridEl.append(answerEl4Q5);

  var currentQuestion = "This is question 5";
  var currentAnswer1 = " This is answer 5-2";
  var currentAnswer2 = " This is answer 5-2";
  var currentAnswer3 = " This is answer 5-3";
  var currentAnswer4 = " This is answer 5-4";

  questionEl.text(currentQuestion);

  $("#answer1").append(currentAnswer1);
  $("#answer2").append(currentAnswer2);
  $("#answer3").append(currentAnswer3);
  $("#answer4").append(currentAnswer4);

  answerEl1Q5.on("click", ansCheck5y);
  answerEl2Q5.on("click", ansCheck5n);
  answerEl3Q5.on("click", ansCheck5n);
  answerEl4Q5.on("click", ansCheck5n);
};

var ansCheck5y = function () {
  answerEl1Q5.remove();
  answerEl2Q5.remove();
  answerEl3Q5.remove();
  answerEl4Q5.remove();

  if (timeleft > 0) {
    console.log("Correct");
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
    endGame();
  } else {
    console.log("Game Over");
    endGame();
  }
};

var endGame = function () {
  questionEl.text("");
  greetingEl.text("Game Over!");
  timeleft = 999
};

greetingCard();
