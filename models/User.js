const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    Password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const User = mongoose.model('user', UserSchema);
  //User.createIndexes(); //it will create index of email to identify each record uniquely
  module.exports = User;