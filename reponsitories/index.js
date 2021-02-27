const mongodb = require("mongodb");

const db = {};

const client = new mongodb.MongoClient("mongodb://localhost:27017");
client.connect().then((connectedClient) => {
    console.log("mongodb connected!");
    const database = connectedClient.db("Xfuri");
    db.users = database.collection("users");
});

module.exports = db;