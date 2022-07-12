const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/temp", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.post("/temp", (req, res)=>{
    var town = req.body.town;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + town + "&appid=30a76740e3e53015689f03ed9f92af4d&units=metric";
    let options = {json: true};
    request(url, options, (error, res, body)=>{
        if (error) console.log("Error !!");
        else if (!error && res.statusCode == 200){
            var temp = body.main[0];
            console.log(temp);;
        }
    });
});


app.listen(3000, ()=>{
    console.log("[+] Server running on port 3000...");
})