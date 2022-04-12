function roll(){
    var randDice1 = Math.ceil(Math.random()*6);
    var randDice2 = Math.ceil(Math.random()*6);

    var randImage1 = "./images/" + randDice1 + ".PNG";
    var randImage2 = "./images/" + randDice2 + ".PNG";

    document.querySelectorAll("img")[0].setAttribute("src", randImage1);
    document.querySelectorAll("img")[1].setAttribute("src", randImage2);

    var h1s = document.querySelectorAll("h1")[0];

    if (randDice1 > randDice2){
        h1s.style.paddingLeft = "820px";
        h1s.innerHTML = 'Player1 Win🙉';
    }

    else if (randDice1 < randDice2){
        h1s.style.paddingLeft = "820px";
        h1s.innerHTML = 'Player2 Win🙈';
    }

    else{
        h1s.innerHTML = 'Draw🐭';
        h1s.style.paddingLeft = "890px";
    }
}