var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const {ObjectID} = require('mongodb');

var TodoSchema = new Schema({
    text : {
        type : String,
        required : true,
        minlength : 1,
        trim : true
    },
    completed :{
        type: Boolean,
        default : false
    },
    completedAt :{
        type : Number,
        default: null
    },
    _creator :{
        type : ObjectID,
        required: true
    }
});
var Todo = mongoose.model('Todo',TodoSchema);
module.exports = {Todo};
