const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const doesEmailExists = async (req, res, next) => {
  const { email } = req.body;
  const userExists = await prisma.Users.findUnique({
    where: {
      email,
    },
  });

  if (userExists) {
    res.json({
      error: 'User already Exists with same Email',
    });
    return;
  }

  next();
};

module.exports = doesEmailExists;
