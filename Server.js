const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

//calling Database function
require("./config/database").connect();

//route importing and mounting
const user = require("./routes/user");
const User = require("./models/User");
const Internship = require("./models/Internship");

app.use("/api/v1", user);

app.post("/update", (req, res) => {
  User.updateOne(
    { email: req.body.email },

    {
      $set: {
        type: req.body.type,
        linkedIn: req.body.linkedIn,
        gitHub: req.body.gitHub,
        name: req.body.name,
        coins: req.body.coins,
        mobile: req.body.mobile,
        school: req.body.school,
        start: req.body.start,
        end: req.body.end,
      },
    }
  )
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/getData", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/internship-post", (req, res) => {
  Internship.create({
    role: req.body.role,
    name: req.body.name,

    stipend: req.body.stipend,
    experience: req.body.experience,
    logo: req.body.logo,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/internship", function (req, res) {
  Internship.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
app.listen(PORT, () => {
  console.log(`Server Started on ${process.env.PORT}`);
});
