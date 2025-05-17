const express = require('express');
const router = express.Router();

// Add your donation logic here later
router.get('/', (req, res) => {
  res.send('Donations endpoint');
});

module.exports = router;
