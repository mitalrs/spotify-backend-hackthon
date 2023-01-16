const { validateFirstName, validateLastName, validateEmail, validatePassword } = require("../utils/validation")

const signinValidation = (req, res, next)=>{
    const { email, password } = req.body;
    
    if(!validateEmail(email) || !validatePassword(password))
    {
        res.status(401).json({
            error: "Email or Password not Valid"
        });
        return;
    }
    next();
}

module.exports = signinValidation;