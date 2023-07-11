import express from "express";
let router = express.Router();
const Ticket = require('../models/tickets')

router.get('/', async (req,res)=>{
    const tickets = await Ticket.find()
    res.send(tickets)
});

router.get('/:id', async (req,res)=>{

    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) return res.send('no ticket exits')

    res.send(ticket)

});

router.post('/', async (req,res)=>{

    let ticket = new Ticket({

        cinemaId:req.body.cinemaId,
        seatNo:req.body.seatNo

    });

    ticket = await ticket.save()

    if(!ticket) return res.send('ticket not created')

    res.send(ticket);

});

router.put('/:id', async (req,res)=>{
   const ticket = await Ticket.findByIdAndUpdate(req.params.id,{

    cinemaId:req.body.cinemaId,
    seatNo:req.body.seatNo

   },{new:true});

   if(!ticket) return res.send('ticket not updated')

   res.send(ticket)

   
});

router.delete('/:id', async (req,res)=>{
   const ticket = await Ticket.findByIdAndRemove(req.params.id)

   if(!ticket) return res.send('ticket not deleted')

   res.send(ticket)
});



module.exports = router