const express = require("express");
const router = express.Router();
const User = require("../models/Product");


router.post("/verify-coupon", async (req, res) => {
    try {
        const { code } = req.body;
    
        // Check if coupon exists in the database
        const coupon = await User.findOne({ code });
        if (coupon) {
          return res.status(200).send("Valid Code");
        } 
        else {
          return res.status(404).send("Invalid Code");
        }
      } catch (error) {
        res.status(500).send("Server error: " + error.message);
      }
  });
  
  module.exports = router;
  