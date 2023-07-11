import * as mongoose from "mongoose";


const cinemaSchema = new mongoose.Schema({

    cinemaName:{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true

    },
    imageUrl:{
        type:String,

    },

    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Cinema',cinemaSchema)