const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
  role: {
    type: String,
  },
  name: {
    type: String,
  },
  experience: {
    type: String,
  },
  stipend: {
    type: String,
  },
  logo: {
    type: String,
  },
});

module.exports = mongoose.model("internship", internshipSchema);
