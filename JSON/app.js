const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { wrap } = require("module");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/temp", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
});

app.post("/temp", (req, res)=>{
    var town = req.body.town;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + town + "&appid=30a76740e3e53015689f03ed9f92af4d&units=metric";
    https.get(url, (response) => {
        if (response.statusCode == 200){
            response.on("data", (data) => {
                res.set("Content-Type", "text/html");
                const json_data = JSON.parse(data);
                const weather_status = json_data.weather[0].description ;
                const temp = json_data.main.temp;
                const icon = json_data.weather[0].icon;
                const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                res.write("<h1>The Temperature of " + town + " is " + temp + ".</h1>");
                res.write("<h2> The weather is currently " + weather_status + "</h2>");
                res.write("<img src=" + imageUrl + ">");
                res.send();
                //res.send("<h1>The Temperature of " + town + " is " + temp + ".</h1><h2> The weather is currently " + weather_status + ".</h2>" + "<img src=" + imageUrl + ">");
            })
        }
    });

});


app.listen(3000, ()=>{
    console.log("[+] Server running on port 3000...");
})