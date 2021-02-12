
var colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


$(document).keydown(function(e) {
    if(!started) {
        nextsequence();
        $("#level-title").text("level " + level);
        started = true;
    }

});

function nextsequence() {
    userClickedPattern = [];
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
    checkAnswer(lastIndex);
});

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
        if(userClickedPattern.length === gamePattern.length) {

            setTimeout(() => {
                nextsequence();
                
            }, 1000);
        }
        
    }else {
        console.log("Wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart")
        playSound("wrong");
        $("body").css("backgroundColor", "red");

        setTimeout(function () {
            $("body").css("backgroundColor", "#011F3F");
        }, 200);

        startOver();
    }

    
}

function startOver() {
    gamePattern = [];
    level = 0;
    started = false;
}