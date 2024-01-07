const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hello from sever...")})
   
const DB=async()=>{
    await mongoose.connect('mongodb+srv://bhavanivanapalli:tinku@cluster0.pxne5pv.mongodb.net/project0?retryWrites=true&w=majority').then(
    ()=>{console.log("connected to database...")}
    ).catch(
        (err)=>{console.log("An error occured while connecting to database...",err)}
    )
}
DB();
app.listen(5000,()=>{console.log("Running on the port 5000")})
