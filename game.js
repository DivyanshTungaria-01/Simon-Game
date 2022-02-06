

var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
});


function nextSequence(){

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);   

   
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}


nextSequence();
































































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


