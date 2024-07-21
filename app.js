const express = require('express');
const app = express();
//const mogoose = require('');
const dotenv = require('dotenv');
const conn = require('./database.js');

const pageRouter = require('./routes/pageRoute.js');
const photoRouter = require('./routes/photoRoute');
const userRouter = require('./routes/userRouter');

const port = process.env.port || 3000;

dotenv.config();// dotenv içeriğine ulaşabiliriz.

//connection to the DB
conn();

//static files middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true})); // from body içerisndekileri parser edebilsin diye. (kullanıcı işlemleri (register.ejs)gerekli)

//ejs template engine
app.set('view engine','ejs');


// router klaörüne yönlendirip get isteklerini atma.
app.use('/', pageRouter);  // düzeltme 1  yerine geldi.
app.use('/photos' , photoRouter);
app.use('/users', userRouter);
app.listen(port,()=>{
    console.log(`aplication runnig on port : ${port}`);

});




// DÜZELTİLENLER: 

//düzeltme 1 -> 

/*
app.get('/',(req,res)=>{

    res.render('index');// view klasörüne set ettiğmiz için otomatik olarak gider ve index.ejs doyasını render eder
});

app.get('/about',(req,res)=>{

    res.render('about');
});
*/