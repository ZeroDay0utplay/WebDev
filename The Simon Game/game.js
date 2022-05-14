var buttonColours = ["red", "blue", "green", "yellow"];

gamePattern = [];

userClickedPattern = [];


var level = 0;
var started = false;

$(document).keypress(function() {
    if (!started) {
      nextSequence();
      started = true;
    }
});


$(".btn").on("click", function(e){
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    animatePress(e.target);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});



function playSound(sound) {
    var audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
}


function nextSequence(){
    level++;
    userClickedPattern= [];
    $("h1").text("Level " + level);
    var random_num = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[random_num];
    gamePattern.push(randomChosenColour);
    $("."+randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
}


function animatePress(button){
    $(button).addClass("pressed");
    setTimeout(function(){$(button).removeClass("pressed");}, 100);
}



function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length) setTimeout(function(){
            nextSequence();
        }, 1000);
    }
    else{
        wrong();
        startOver();
    };
}


function wrong(){
    const wrong_audio = new Audio("./sounds/wrong.mp3");
    wrong_audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over");}, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}