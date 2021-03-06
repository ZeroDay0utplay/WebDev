const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

let items = [];

app.get("/", (req, res)=>{
    res.render("main", {newListItems: items});
})


app.post("/", (req, res)=>{
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})


app.listen(3000, ()=>{})
