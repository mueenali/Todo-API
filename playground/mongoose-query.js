var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');
// var id = "5bf5e25d458e4d3a00b3fa5f";
// //
// // if (!ObjectID.isValid(id)){
// //     console.log('ID Not Valid');
// // }
// //
// //
// // //
// // // Todo.find({
// // //     _id : id
// // // }).then((todos) => console.log(todos));
// // //
// // // Todo.findOne({
// // //     _id : id
// // // }).then((todo) => console.log(todo));
// //
// // Todo.findById(id).then((todo) => {
// //     if (!todo){
// //         return console.log('ID is not found');
// //     }
// //     console.log(todo);
// // }).catch((e) =>{
// //     console.log('The id is invalid');
// // });

var id = "5bf432e934f7c519f8eaeb1e";

User.findById(id).then((user) =>{
    if (!user){
      return console.log('User was not found');
    }
    console.log('User : ', JSON.stringify(user,undefined,2));
}).catch((err) =>{
    console.log(err);
});
