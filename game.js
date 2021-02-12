
var colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keydown(function(e) {
    if(!started) {
        // console.log(e.key);
        nextsequence();
        $("#level-title").text("level " + level);
        started = true;
    }

});

function nextsequence() {
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColor = colors[randomNumber];
    gamePattern.push(randomChosenColor);


    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

    level++;
    $("#level-title").text("level " + level);
}

$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    var lastIndex = userClickedPattern.length - 1;
    checkAnswer(userClickedPattern[lastIndex]);
    console.log(userClickedPattern);
})

function playSound(name) {

    var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();

}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        
    }
    else {
        console.log("Wrong");
    }

    if(userClickedPattern.length >= gamePattern.length) {

        setTimeout(() => {
            nextsequence();
            userClickedPattern = [];
        }, 700);
    }
}