var soundsDICT = {
    "w": "1",
    "a": "2",
    "s" : "3",
    "d" : "4",
    "j" : "5",
    "k" : "6", 
    "l" : "7"
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