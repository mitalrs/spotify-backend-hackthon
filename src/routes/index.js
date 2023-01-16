require('dotenv').config();
const express = require('express');
const isPrivate = require('../middleware/checkPrivate');
const { PrismaClient } = require('@prisma/client');
const doesEmailExists = require('../middleware/checkEmailExists');
var redis = require('redis');
var JWTR = require('jwt-redis').default;
var redisClient = redis.createClient();
var jwtr = new JWTR(redisClient);
const prisma = new PrismaClient();
const router = express.Router();
const secret = process.env.JWT_SECRET;
const { router: privateRouter } = require('./privateRoutes');
const signupValidation = require("../middleware/signupvalidation");
const signinValidation = require("../middleware/signinvalidation");


router.post('/signup',signupValidation, doesEmailExists, async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {

    await prisma.Users.create({
      data: {
        first_name,
        last_name,
        email,
        password,
      },
    });
    const data = await prisma.Users.findUnique({
      where: {
        email,
      },
    });

    res.status(201).json({ user: data });
  } catch (e) {
    console.log({ e });
    res.status(500).json({
      error: 'maaf kijyega humari taraf se kuch takneeki kharabi aa gyi hai!',
    });
  }
});

router.post('/login', signinValidation, async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.Users.findUnique({
    where: {
      email,
    },
  });
  const payload = {
    email: user.email,
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
  };

  if (user.password === password) {
    await redisClient.connect();
    const token = await jwtr.sign(payload, secret).catch((e) => {
      console.error(e);
    });
    await redisClient.disconnect();
    res
      .cookie('Authorization', token, {
        maxAge: 360000,
        httpOnly: true,
        sameSite: 'lax',
      })
      .json({
        isSuccess: true,
      });
  } else {
    await res.clearCookie('Authorization');
    res.status(401).json({
      error: "Email or Password not Valid"
  });
  }
});

router.all('/logout', async (req, res) => {
  const token = req.cookies.Authorization;
  await redisClient.connect();
  await jwtr.destroy(token);
  await redisClient.disconnect();
  res.clearCookie("Authorization")
  res.json({
    isSuccess: true
  });
});

router.get('/ping', async (req, res) => {
  res.send('pong!');
});

router.use(isPrivate, privateRouter);

module.exports = { router };
