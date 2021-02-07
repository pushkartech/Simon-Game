
var colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextsequence() {
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColor = colors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/"+ randomChosenColor + ".mp3");
    audio.play();
}

$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
})