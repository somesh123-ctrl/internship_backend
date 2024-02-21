const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  coins: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  gitHub: {
    type: String,
  },
  type: {
    type: String,
  },
  school: {
    type: String,
  },
  start: {
    type: String,
  },
  end: {
    type: String,
  },
  project_name: {
    type: String,
  },
  description: {
    type: String,
  },
  project_type: {
    type: String,
  },

  project_link: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
