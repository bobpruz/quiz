 var greetingEl = $('#greeting')
 var startEl = $('#start')
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

greetingCard()
