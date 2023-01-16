const { validateFirstName, validateLastName, validateEmail, validatePassword } = require("../utils/validation")

const signupValidation = (req, res, next)=>{
    const {first_name, last_name, email, password } = req.body;
    if(!validateFirstName(first_name))
    {
        res.status(400).json({
            error: "FirstName not Valid"
        });
        return;
    }
    if(!validateLastName(last_name))
    {
        res.status(400).json({
            error: "Last Name not Valid"
        });
        return;
    }
    if(!validateEmail(email))
    {
        res.status(400).json({
            error: "Email not Valid"
        });
        return;
    }
    if(!validatePassword(password))
    {
        res.status(400).json({
            error: "Password not Valid"
        });
        return;
    }
    next();
}

module.exports = signupValidation;