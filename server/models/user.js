const mongoose = require('mongoose');
const validator = require('validator');
const passwordValidator = require('password-validator');
var Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const _ = require('lodash');
var schema = new passwordValidator();
schema.has().uppercase();

var UserSchema = new Schema({
    email: {
        type : String,
        required: true,
        trim: true,
        minlength: 1,
        unique : true,
        validate :{
            validator : validator.isEmail,
            message : `{Value} is not a valid email`
        }
    },
    password : {
        type : String,
        required: true,
        minlength: 6,
        validate:{
            validator : (val) =>{
                return schema.validate(val);
            },
            message: 'Password does not contain any uppercase letters'
        }
    },
    tokens :[{
        access :{
            type : String,
            required : true,

        },
        token :{
            type : String,
            required : true
        }
    }]
});

UserSchema.methods.toJSON = function (){
    var user = this;
    var userObject = user.toObject();
    return _.pick(userObject,['_id','email']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(),access},'abcd').toString();
  user.tokens = user.tokens.concat([{access,token}]);
  return user.save().then(() =>{
      return token;
  })
};



var User = mongoose.model('User',UserSchema);
module.exports = {User};
