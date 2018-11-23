var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

Todo.findByIdAndRemove("5bf79efd6469143394d685ab").then((todo) =>{
    console.log(todo);
});