const mongoose = require('mongoose');
require('dotenv').config();

const conn = () =>{

    mongoose.connect(process.env.DB_URI, {
        dbName : 'lenslight_tr',
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('connected to DB sucsessfuly');
    }).catch((err)=>{
        console.log(`DB connection error : ${err}`);
    });
};

module.exports = conn;