const mongooose = require("mongoose");

// User Schema
const userSchema = mongooose.Schema({
  
  email: String,
  password: String,
});

const userModel = mongooose.model("user", userSchema, "user");

module.exports = userModel;