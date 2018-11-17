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

    //deleteone
    //
    // db.collection('Todos').deleteOne({text :'eat lunch'}).then((result) =>{
    //     console.log(result);
    // },(err) =>{
    //     console.log('Unable to delete doc');
    // })

    //deletemany
    // db.collection('Todos').deleteMany({text :'eat lunch'}).then((result) =>{
    //     console.log(result);
    // },(err) =>{
    //     console.log('Unable to delete doc');
    // })

    //findone and delete

    // db.collection('Todos').findOneAndDelete({completed : false}).then((result) =>{
    //     console.log(result);
    // });
    let col = db.collection('Users');

    col.deleteMany({name : 'Mueen'}).then((result) =>{
        console.log('Documents with this name have been deleted');
    },(err)=>{
        console.log('Unable to delete documents',err);
    });

    col.findOneAndDelete({_id : new ObjectID("5bf0664b333f133b60795a9c")}).then((result) =>{
        console.log(`Document : ${JSON.stringify(result,undefined,2)} has been deleted`);
    },(err) =>{
        console.log('Unable to delete document',err);
    });

});

