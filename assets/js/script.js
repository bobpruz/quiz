 var greetingEl = $('#greeting')
 var startEl = $('#start')
 var answerGridEl = $('#answer-list')

 var answerEl1 = $('<button id="answer1" class="btn btn-primary rounded mb-1 d-flex"></button>')
 var answerEl2 = $('<button id="answer2" class="btn btn-primary rounded mb-1 d-flex"></button>')
 var answerEl3 = $('<button id="answer3" class="btn btn-primary rounded mb-1 d-flex"></button>')
 var answerEl4 = $('<button id="answer4" class="btn btn-primary rounded mb-1 d-flex"></button>')

//timer functions
function countDown() {
    var timeleft = 100
    var timer = setInterval(function() {
        if(timeleft <= 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Time Ended."
        }
        else if(timeleft === 1) {
            document.getElementById("timer").innerHTML = timeleft + " second left."
        }
        else {
            document.getElementById("timer").innerHTML = timeleft + " seconds left."
        }
        timeleft--
    },1000)
}

function greetingCard() {
    greetingEl.text("Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds! Press the start button to begin.");
    startEl.append('<button class="btn btn-primary">Start Quiz</button>');

    startEl.on("click", countDown)

}

function answerGrid() {
    
    
    answerGridEl.append(answerEl1)
    answerGridEl.append(answerEl2)
    answerGridEl.append(answerEl3)
    answerGridEl.append(answerEl4)

    $('#answer1').append("This is answer 1");
    $('#answer2').append("This is answer 2");
    $('#answer3').append("This is answer 3");
    $('#answer4').append("This is answer 4");
 
 
}

answerGrid()
