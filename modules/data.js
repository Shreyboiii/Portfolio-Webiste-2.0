const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  DateTime: String,
  message: String
});

// Define model
const User = mongoose.model('User', userSchema);

module.exports = User;
