import * as mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({

    seatNo:{
        type : Array,
        required:true

    },
    cinemaId:{
        type:String,
        required:true

    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model('Booking',bookingSchema)