const express = require('express');
const router = express.Router();

router.post('/me', (req, res) => {
  const {currentUser} = req.body
  res.json(currentUser);
});



module.exports = { router };
