import Joi from "joi";
export const signupScehema = {body: Joi.object({
    fname: Joi.string().trim().min(3).max(20).required(),
    lname: Joi.string().trim().min(3).max(20).required(),
    email: Joi.string().trim().email().required(),
    gender: Joi.string().valid("male", "female").required(),
    password: Joi.string().min(8).required(),
    cpassword: Joi.string().valid(Joi.ref("password")).required(),
    
    age: Joi.number().min(18).max(100).required(),
    phone: Joi.string().trim().required()
    
}).required(),
}
export const signinScehema = {
    body: Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().required(),
    }).required(),
}
