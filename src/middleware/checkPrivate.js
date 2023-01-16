var redis = require('redis');
var JWTR = require('jwt-redis').default;
var redisClient = redis.createClient();
var jwtr = new JWTR(redisClient);
const secret = process.env.JWT_SECRET;
const isPrivate = async (req, res, next) => {
  console.log('isCheckingPrivate', req.cookies.Authorization, secret);
  try {
    await redisClient.connect();
    await jwtr.verify(req.cookies.Authorization, secret);
    await redisClient.disconnect();
  } catch (error) {
    if (error.name) {
      console.log(error);
      res.status(401).json({
        error: 'unauthorized Access!',
      });
      return;
    }
  }

  next();
};

module.exports = isPrivate;
