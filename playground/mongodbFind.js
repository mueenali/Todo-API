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
    // db.collection('Todos').find({_id: new ObjectID("5bf060e250556639a85d74c9")}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    //
    // },(err) =>{
    //     console.log('Unable to fetch data');
    // });
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count : ${count}`);
    //
    //
    // },(err) =>{
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').insertOne({name : 'Mueen', age :25 , location :'Kl'},(err,result) =>{
        if (err){
            return console.log('Unable to insert data');
        }
        console.log("Data successfully inserted");
    });

    db.collection('Users').find({name : 'Mueen'}).toArray().then((docs) =>{
        console.log('fetching the doc');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) =>{
        console.log('Unable to fetch the data');
    });

});

