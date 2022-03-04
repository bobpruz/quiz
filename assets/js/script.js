 var greetingEl = $('#greeting')
 var startEl = $('#start')
 var answerGridEl = $('#answer-list')
 var timeleft = 10
 

 var answerEl1 = $('<button id="answer1" ans-value="y" class="btn btn-primary rounded mb-1 d-flex"></button>')
 var answerEl2 = $('<button id="answer2" ans-value="n" class="btn btn-primary rounded mb-1 d-flex"></button>')
 var answerEl3 = $('<button id="answer3" ans-value="n" class="btn btn-primary rounded mb-1 d-flex"></button>')
 var answerEl4 = $('<button id="answer4" ans-value="n" class="btn btn-primary rounded mb-1 d-flex"></button>')

//timer functions
function countDown() {
    
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

    startEl.on("click", gameprogress)

}

function answerGrid() {
    
    greetingEl.text("");
    startEl.remove();

    answerGridEl.append(answerEl1)
    answerGridEl.append(answerEl2)
    answerGridEl.append(answerEl3)
    answerGridEl.append(answerEl4)

    $('#answer1').append("This is answer 1");
    $('#answer2').append("This is answer 2");
    $('#answer3').append("This is answer 3");
    $('#answer4').append("This is answer 4");
 
 
}

var ansCheck1 = function() {
    if(timeleft > 0){
        console.log("test");
    }
    else{
        console.log("Game Over")
    }
}

function gameprogress() {
    countDown();
    answerGrid();
    
    answerEl1.on("click", ansCheck1)

}

greetingCard()
