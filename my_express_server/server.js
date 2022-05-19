const express = require("express");
const app = express();
const path = require("path");


app.get("/", function(req, res){
    res.send("<h1>Get Hacked HIHIHIH :p</h1>")
});

app.get("/zdo", (req, res) => {
    console.log(req);
});

app.get("/about", (req, res) => {
    res.sendFile((path.join(__dirname, 'index.html')));
});

app.listen(3003, function(){
    console.log("[+] Listening for Incomming Connection...");
});