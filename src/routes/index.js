const express = require('express');
const { default: isPrivate } = require('../middleware/checkPrivate');

const router = express.Router();

router.post('/signup', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Signup Here!' });
});

router.post('/login', (req, res) => {
  res.send({ message: 'Login Here!' });
});

router.get('/ping', (req,res)=>{
  res.send('pong!')
})

router.use(isPrivate);

module.exports = router;
