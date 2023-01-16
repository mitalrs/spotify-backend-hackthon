require('dotenv').config();
var redis = require('redis');
var JWTR = require('jwt-redis').default;
var redisClient = redis.createClient();
var jwtr = new JWTR(redisClient);
const secret = process.env.JWT_SECRET;
const isPrivate = async (req, res, next) => {
  await redisClient.connect();
  try {
    req.body.currentUser = await jwtr.verify(req.cookies.Authorization, secret);
  } catch (error) {
    if (error.name) {
      console.log(error);
      res.status(401).json({
        error: 'unauthorized Access!',
      });
      return;
    }
  }
  await redisClient.disconnect();

  next();
};

module.exports = isPrivate;
