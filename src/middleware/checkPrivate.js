const isPrivate = (req,res,next) => {
    next(req,res);
}

module.exports = isPrivate;