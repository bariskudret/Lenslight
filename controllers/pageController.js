const getPageIndex = (req, res)=>{
    res.render('index' , {
        link : "index",
    });
};

const getPageAbout = (req, res)=>{
    res.render('about' , {
        link : "about",
    } );
};

const getPageRegister = (req, res)=>{
    res.render('register' , {
        link : "register",
    } );
};
const getPageLogin = (req, res)=>{
    res.render('login' , {
        link : "login",
    });
};

module.exports = 
{
    getPageAbout,
    getPageIndex,
    getPageRegister,
    getPageLogin
};
