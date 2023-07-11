import express from "express";
const app = express()
import * as mongoose from "mongoose";
import cors from "cors";
import * as bodyParser from "body-parser";
const cinemaRoute = require('./routes/cinema')
const ticketsRoute = require('./routes/tickets')
const bookingRoute = require('./routes/booking')


let connectionString = 'mongodb://localhost:27017/cinemaTickets';

mongoose
    .connect(connectionString)
    .then(() => console.log('Database connected.'))
    .catch(err => console.log(err));

app.use(cors())
app.use( bodyParser.json({limit: '50mb'}) );
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit:50000
}));

app.use('/api/cinemas',cinemaRoute)
app.use('/api/tickets',ticketsRoute)
app.use('/api/booking',bookingRoute)


app.listen(3000,()=>{
    console.log("server running on port 3000")
})