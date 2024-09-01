const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
  id: {
    type: mongoose.ObjectId,
  },
  email: {
    type: String,
    required: true // Throws error if email is missing
  },
  password: {
    type: String,
    //required: true // Throws error if password is missing
  },
  name: {
    type: String,
    required: true, // Throws error if name is missing
    unique: true // Error is thrown for duplicate names
  },
  createdAt: {
    type: Date,
    default: Date.now // Sets default value as current date
  }
});
 
const User = mongoose.model('User', userSchema);