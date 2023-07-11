import express from "express";
let router = express.Router();
const Booking = require('../models/booking')
const Ticket = require('../models/tickets')
import * as mongoose from "mongoose";


router.post('/', async (req,res)=>{
    let tickets = await Ticket.find({
        $and: [
            {"seatNo" : { "$in" : req.body.seatNo}},
            {cinemaId:req.body.cinemaId},
            {status:"NON BOOKED"}
        ]
    })
    let ticketIds : string[] = []
    let ticketsf;

    if(tickets.length == req.body.seatNo.length){
        for(let ticket of tickets){
            ticket.status= "BOOKED"
            ticketIds.push(ticket._id.toString())
        }
        ticketsf = await Ticket.updateMany({ _id: { $in: ticketIds } },
            { $set: {'status': "BOOKED"} },
            {multi: true});
            res.send({message:"Tickets booked successfully",data:tickets})
    }else{
        res.send({message:"Sorry!,Tickets are not available"})
    }
    

});





module.exports = router