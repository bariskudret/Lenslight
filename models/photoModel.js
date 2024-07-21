const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const photoScheama = new Schema({
    name : {
        type : String,
        required : true,
        trim: true
    },
    description: {
        type : String,
        required : true,
        trim : true,
    },
    uploadedAt : {
        type : Date,
        default: Date.now,
    },
});

const photo = mongoose.model('Photo', photoScheama); // model adı , schema türü

module.exports = photo;