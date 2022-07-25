const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");
console.log("Connected Successfully to the DB.");



const fruitSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    name: {
        type: String
    },
    rating: {
        type: Number
    },
    review: {
        type: String
    },
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    _id :1,
    name: "Apple",
    rating: 5,
    review: "Mohamed"
});

fruit.save();