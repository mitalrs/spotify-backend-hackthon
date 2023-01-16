const isPrivate = (req,res,next) => {
    next(req,res);
}

export default isPrivate;