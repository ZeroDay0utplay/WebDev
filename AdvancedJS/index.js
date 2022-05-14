var soundsDICT = {
    "a": "1",
    "z": "2",
    "e" : "3",
    "r" : "4",
    "t" : "5",
    "y" : "6", 
    "u" : "7"
};
  

document.addEventListener("keydown", function(event){
    var audio = new Audio("sounds/" + soundsDICT[event.key] + ".mp3");
    audio.play();
    makeAnimation(event.key);
})


function makeAnimation(key){
    var actibeBTN = document.querySelector("."+key); 
    actibeBTN.classList.add("pressed");
    setTimeout(function(){actibeBTN.classList.remove("pressed");}, 100);
    
}