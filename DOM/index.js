// var lastLI = document.querySelector("ul").lastElementChild;
// lastLI.innerHTML = "Mohamed Toumi";

document.querySelector("h1").innerHTML = "<em>Hello ZDO</em>"; // add em tag to the name

document.querySelector("button").style.backgroundColor = "cyan";
document.querySelector("input").click();

var arrLI = document.getElementsByTagName("li");
arrLI[0].style.color = "orange";
arrLI[1].style.color = "gold";
arrLI[2].style.color = "pink";

var firstLI = document.querySelector("li a");
firstLI.style.color = "orange";