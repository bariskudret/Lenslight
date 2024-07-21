
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async(req, res) =>{

    try{

        console.log("req body : ", req.body);
        const user = await User.create(req.body);
    
        res.status(201).json({
            succeded : true,
            user,
        });

    }catch(error){
        res.status(500).json({
            succeded : false,
            error,
        });
    }
  

};
const userLogin = async(req, res) =>{

try{
    const {username , password} = req.body;
    const user = await User.findOne({username : username});
    let same = false;

    if(user)
        {
            same = await bcrypt.compare(password , user.password); // true veya false döndüren bir method kullanıcın girdği şifre ile veri tabanındaki şifre ayın mı diye kontrol ediyor.
        }else
        {
           return res.status(401).json({
                succeded : false,
                error : 'Kullanıcı bulunamadı.',
            });    
        }
    if(same)
        {
            res.status(200).json({
                user,
                token : createToken(user._id),
            })
        }else{
            res.status(401).json({
                succeded : false,
                error : 'password are not matched',
            });
        }

    }catch(error){
        res.status(500).json({
            succeded : false,
            error,
        });
    }
  

};
const JWT_SCREATE = 'lenslight';

const createToken = (userID)=>{
    return jwt.sign({userID } ,JWT_SCREATE,{expiresIn : '1d',});
}
module.exports = {
    createUser,
    userLogin,  
};