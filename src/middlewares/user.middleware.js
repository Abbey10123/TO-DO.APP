const jwt = require ('jsonwebtoken');
const UserModel = require('../models/user.model');
require('dotenv').config();


const TokenValidator = async(req, res, next)=>{
    let bearerToken = req.headers.authorization;
    if (!bearerToken){
        return res.status(403).json({
            message: "Unauthorized"
        })
    }
   
    bearerToken = bearerToken.split(' ')[1];

    if (!bearerToken){
        return res.status(403).json({
            message: "Unauthorized"
        })
    } 
   

    const isValid = await jwt.verify(bearerToken, process.env.SECRET_KEY);
    
    if(!isValid){
        return res.status(403).json({
            message: "Unauthorized"
        })
    }

    const user = await UserModel.findOne({email: isValid.email});
    if (!user){
        return res.status(403).json({
            message: "Unauthorized"
        })
    }
    req.user = user
    next()
}

module.exports = {
    TokenValidator
}