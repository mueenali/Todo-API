const {MongoClient, ObjectID} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'TodoApp';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect((err) => {
    if (err) {
        return console.log('Unable to connect to database server');
    }
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5bf075ce687e411abf3df9bb")},
        {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({_id : new ObjectID("5bf06e07687e411abf3df777")},{
        $set:{
            name: 'Mueen'
        },
        $inc:{
            age : +1
        }
    },{
        returnOriginal : false
    }).then((result) =>{
        console.log(result);
    });

});
