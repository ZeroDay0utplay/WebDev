var level = 1;
var btns = ["red", "blue", "green", "yellow"];


function butn(color){
    $("."+color).animate({opacity : 0.5});
    $("."+color).animate({opacity : 1});
    const audio = new Audio("./sounds/"+color + ".mp3");
    audio.play();
}



function press_btn(){
    var btns = [];
    $(".btn").on("click", function(event){
        $(event.target).addClass("pressed");
        setTimeout(function(){$(event.target).removeClass("pressed");}, 100);
        var color = event.target.id;
        btns.push(color);
        const audio = new Audio("./sounds/"+color+".mp3");
        audio.play();
        return color;
    });
}


function check_btn(b1, b2){
    if (b1 != b2){
        const wrong_audio = new Audio("./sounds/wrong.mp3");
        wrong_audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");}, 100);
        $("h1").text("Game Over, Press Any Key to Restart");
        $(document).on("keydown", function(){
            $("h1").text("Press A Key to Start");
        });
        return false;
    }
    return true;
}


function main(){
    var random_btn;
    
    $(document).on("keydown", function (e) {
        $("h1").text("Level " + level);
        random_btn = btns[Math.floor(Math.random() * 4)];
        butn(random_btn);
        $(document).unbind();
    });

    var color_pressed;

    $(".btn").on("click", function(event){
        // console.log(event)
        $(event.target).addClass("pressed");
        setTimeout(function(){$(event.target).removeClass("pressed");}, 100);
        color_pressed = event.target.id;
        const audio = new Audio("./sounds/"+color_pressed+".mp3");
        audio.play(); 
        level++; 
        $("h1").text("Level " + level);
        var checker = check_btn(color_pressed, random_btn);

        if (!checker){
            level = 1;
            main();
        }

    });
}

main();





// var level = 1;

// $(document).on("keydown", function (event) {
//     $("h1").text("Level " + level);
//     var random_btn = btns[Math.floor(Math.random() * btns.length)];
//     butn(random_btn);
//     var color_pressed;
//     $(".btn").on("click", function(event){
//         $(event.target).addClass("pressed");
//         setTimeout(function(){$(event.target).removeClass("pressed");}, 100);
//         color_pressed = event.target.id;
//         const audio = new Audio("./sounds/"+color_pressed+".mp3");
//         audio.play(); 
//         level++;
//         $("h1").text("Level " + level); 

//         if(!check_btn(color_pressed, random_btn)){
//             level=1;
//             $(".btn").unbind();
//         }

//     });

// });


    
