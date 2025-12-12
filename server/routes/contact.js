// server/routes/contact.js

const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();
    res.status(200).json({ message: "Saved to MongoDB" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save" });
  }
});

module.exports = router;
