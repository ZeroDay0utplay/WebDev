const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");


const url = "mongodb://localhost:27017";

const dbName = "fruitsDB";

const client = new MongoClient(url, {useNewUrlParser: true});

client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected Successfully to the Server.");

    const db = client.db(dbName);

    readDocs(db, function(){
        client.close();
    });
});

// const insertDocs = function(db, callback){
//     const collection = db.collection("fruits");

//     collection.insertMany([
//         {_id: 1, name: "Banana", price: 7},
//         {_id: 2, name: "Apple", score: 8},
//         {_id: 3, name: "WaterMelon", score: 6}
//     ]);
// }

const readDocs = function(db, callback){
    const collection = db.collection("fruits");
    const data = collection.find({_id: 1});
    data.forEach(console.dir);
}
