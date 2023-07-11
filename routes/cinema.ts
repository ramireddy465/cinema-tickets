import express from "express";
let router = express.Router();
const Cinema = require('../models/cinema')

router.get('/', async (req,res)=>{
    const cinemas = await Cinema.find()
    res.send(cinemas)
});

router.get('/:id', async (req,res)=>{

    const cinema = await Cinema.findById(req.params.id)

    if(!cinema) return res.send('no cinema exits')

    res.send(cinema)

});

router.post('/', async (req,res)=>{

    let cinema = new Cinema({

        cinemaName:req.body.cinemaName,
        location:req.body.location,
        imageUrl:req.body.imageUrl

    });

    cinema = await cinema.save()

    if(!cinema) return res.send('cinema not created')

    res.send(cinema);

});

router.put('/:id', async (req,res)=>{
   const cinema = await Cinema.findByIdAndUpdate(req.params.id,{

    cinemaName:req.body.cinemaName,
    location:req.body.location,
    imageUrl:req.body.imageUrl

   },{new:true});

   if(!cinema) return res.send('cinema not updated')

   res.send(cinema)

   
});

router.delete('/:id', async (req,res)=>{
   const cinema = await Cinema.findByIdAndRemove(req.params.id)

   if(!cinema) return res.send('cinema not deleted')

   res.send(cinema)
});



module.exports = router