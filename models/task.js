const mongooose = require("mongoose");
const { boolean } = require("webidl-conversions");

// User Schema
const taskSchema = mongooose.Schema({
  id: Number,
  text: String,
  day: String,
  reminder: Boolean,
});

const taskModel = mongooose.model("taskTracker", taskSchema, "taskTracker");

module.exports = taskModel;