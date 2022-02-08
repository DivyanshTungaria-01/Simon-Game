
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
    // if(level === 0){
    //     nextSequence();
    // }
    if(!started){
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            },1000);
        }
    }
    else{
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        playSound("wrong");
        console.log("wrong");
    }
}

function nextSequence(){

    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);   

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100);
}
































































 // function nextSequence(){                                          We can also use this instead of above statements.
//     var randomNumber = Math.floor(Math.random()*4);
    
//     var randomChosenColour;
//     if(randomNumber === 0){
//         randomChosenColour = "green";
//         gamePattern.push(randomChosenColour);
//     }
//     else if(randomNumber === 1){ 
//         randomChosenColour = "red";
//         gamePattern.push(randomChosenColour);
//     }
//     else if(randomNumber === 2){
//         randomChosenColour = "yellow";
//         gamePattern.push(randomChosenColour);
//     }
//     else if(randomNumber === 3){
//         randomChosenColour = "blue";
//         gamePattern.push(randomChosenColour);
//     }


