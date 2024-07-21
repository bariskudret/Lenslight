const photo = require("../models/photoModel");



const createPhoto = async(req, res) =>{

    try{

        console.log("req body : ", req.body);
        const photo = await Photo.create(req.body);
    
        res.status(201).json({
            succeded : true,
            photo,
        });

    }catch(error){
        res.status(500).json({
            succeded : false,
            error,
        });
    }
  

};

const getAllPhotos = async(req,res) =>{
    try{
        const photos = await photo.find({});
        res.status(200).render("photos" , {
            link:'photos',
            photos, // photos.ejs ye dinamik verielr göndereceğiz veri tabanında bulumumuz fotografları sayfa yönlendiriyoruz. 
        });

    }catch(error){

        res.status(500).json({
            succeded : false,
            error,
        });
    }
};


const getApPhotos = async(req,res) =>{
    try{
        const Photo = await photo.findById({_id : req.params.id});
        res.status(200).render("photo" , {
            link:'photos',
            photo : Photo ,  
        });

    }catch(error){

        res.status(500).json({
            succeded : false,
            error,
        });
    }
};

module.exports = {createPhoto , getAllPhotos , getApPhotos};