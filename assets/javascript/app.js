
// TWO BIG STRUGGLES:
//     1. how to get the result from each html Radio Form
//     2. how to get the timer to trigger function gameEnd when it runs out

console.log("connected!!");
// create var for correct answers and wrong answers

var correctAns = 0;
var wrongAns = 0;
var ticker;

// start button begins the timer countdown
$("#game").click(() => {
    ticker = 120;
    theTimer = setInterval(displayTicker, 1000);
});

// function for game end, timer stop, and score
function gameEnd() {
    alert("game over");
    clearInterval(theTimer);

    // for loop to run through each question
    for (i = 1; i < 10; i++) {

        // check answers for right/wrong
        var questY = "question" + i
        console.log(questY);
        result = ($('input[name=questY]:checked').val());
        if (result === "correct") {
            correctAns++;
        } else { wrongAns++;}
    };

    // print scoreboard
    $("#questions").html(`Correct Answers: ${correctAns} <br>
                            Wrong Answers: ${wrongAns}`);
   
}

// function that runs the timer
function displayTicker() {
    $('#game').html("<h2>" + ticker + "<h2>");
    ticker--;
    console.log(ticker);
    // timer ends game
    if (ticker < 0) gameEnd();
};

// done button ends game
$("#done").click(gameEnd)





// reprint with each new time

// list trivia questions with radio buttons and append to "questions" id



// create listener for when all questions have been answered



// replace question list with scoreboard to "game" id using .html

