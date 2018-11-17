const {MongoClient,ObjectID} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'TodoApp';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect((err) => {
    if (err){
        return console.log('Unable to connect to database server');
    }
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    // db.collection('Todos').insertOne({
    //     text:"Somethings",
    //     completed : false
    //
    // },(err,result) =>{
    //     if (err){
    //         return console.log("Unable to insert data",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    db.collection('Users').insertOne({name: 'Mueen',age :22, location: 'Endah regal'}, (err,result) =>{
        if (err){
            return console.log('Unable to insert data into users');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    client.close();
});

