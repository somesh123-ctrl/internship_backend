const express = require("express");
const router = express.Router();

//Handlers from controllers
const { signup, sendotp } = require("../controllers/auth");

router.post("/signup", signup);
router.post("/sendotp", sendotp);

module.exports = router;
