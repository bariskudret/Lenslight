const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const  JWT_SCREATE = 'lenslight';
const authenticateToken = async (req,res,next)=>{ 
    const authHeader = req.headers['authorization'];
    console.log('headers', authHeader);
    
    const token = authHeader && authHeader.split(' ')[1]; /*
     Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NjdkNjMwNjMzYjQ0NjA2NWExMTVkZGIiLCJpYXQiOjE3MTk0OTQ1NzAsImV4cCI6MTcxOTU4MDk3MH0.zoGBx5dtvE52umnVhVB4Vk8WwanyEmX3q5lOkdt9SNk
     bu gelen veriyi split ile  boşluğa göre diziye çevirdik ve birinci indexi aldık bu şekilde elimzde bir adet token oldu.*/

     if(!token)
        {
            return  res.status(401).json({
                succeeded : false,
                error : 'token yok !!',
            });
        }
        req.user = await  User.findById(
            jwt.verify(token, JWT_SCREATE).userId
        );

    next();
};

module.exports = {authenticateToken};