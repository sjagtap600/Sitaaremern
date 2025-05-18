const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

router.post('/register', async (req, res) => {
  try {
    const newEntry = new Registration(req.body);
    await newEntry.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user', error });
  }
});

module.exports = router;
