$(document).on("keydown", function(event){
    var key = event.key;
    var perc= 45;
    if (key == " "){
        key = "space";
        perc = "35";
    }

    else{
        perc -= (key.length*2);
        console.log(perc);
        perc++;
    }

    $("h1").css("padding-left", perc+"%");
    $("h1").text(key);
});