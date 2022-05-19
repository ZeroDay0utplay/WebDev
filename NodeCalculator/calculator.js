const express = require("express");
const bodyParser = require("body-parser");

const  app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/calc", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmi", (req, res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/calc", (req, res)=>{
    var bdy = req.body;
    var num1 = Number(bdy.num1);
    var num2 = Number(bdy.num2);
    res.send("<center><strong>[+] The result is " + num1+num2 + " .</strong></center>");
});

app.post("/bmi", (req, res)=>{
    var body = req.body;
    var mass = Number(body.mass);
    var height = Number(body.height);
    res.send("<center><strong>[+] your BMI is : " + (mass/(height*height)) + "</strong></center>")
});

app.listen(3000, ()=>{
    console.log("[+] Server Running on port 3000...");
});