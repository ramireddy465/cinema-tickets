import * as mongoose from "mongoose";


const ticketsSchema = new mongoose.Schema({

    cinemaId:{
        type:String,
        required:true

    },
    seatNo:{
        type:String
    },

    status:{
        type:String,
        "default" : "NON BOOKED"
    },


    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Tickets',ticketsSchema)