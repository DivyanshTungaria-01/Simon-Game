
var gamePattern = [];

var buttonColours = ["red","blue","green","yellow"];

function nextSequence(){

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).on("click",function(){
        if(this === randomChosenColour){
            $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100);
        }
    });

   
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


