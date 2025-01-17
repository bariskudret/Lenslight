const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userScheama = new Schema({
    username : {
        type : String,
        required : true,
      unique: true,
    },
    email: {
        type : String,
        required : true,
        unique : true,

    },
    password: {
        type: String,
        required : true,

    }
 
},
{
    timestamps : true, // moongose bize özel 2 tarih ayarı oluşturacak
});

userScheama.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password , 10 , (err, hash) =>{
        user.password = hash;
        next();
    });

});

const User = mongoose.model('Users', userScheama); // model adı , schema türü

module.exports = User;