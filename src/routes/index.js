const express = require('express');
const { default: isPrivate } = require('../middleware/checkPrivate');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.post('/signup', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Signup Here!' });
});

router.post('/login', (req, res) => {
  res.send({ message: 'Login Here!' });
});

router.get('/ping', async (req,res)=>{
  try{
    const user = await prisma.User.create({
      data: {
        first_name: "hello",
        last_name: "world",
        email: "email1.com",
        password: "maakabharosa",
      }
    });
    const data = await prisma.User.findMany();
    
  res.json({user: data});
  }
  catch(e) {
    console.log({e});
  }
})

module.exports = router;
