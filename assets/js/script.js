

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

