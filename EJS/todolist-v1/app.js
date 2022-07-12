const express = require ("express");
const bodyParser = require("body-parser");
var ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');


var day = "";

app.get("/", (req, res) => {
    var today = new Date().getDay();
    if (today === 0 || today === 6) day = "weekend";
    else day = "weekday";
    res.render("list", {kindOfDay: day});
})


app.listen(3000, () => {
    console.log("[+] Server is running ...");;
})