
import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import studentRouter from "./routes/student.js"
import quoteRouter from "./routes/quotes.js"
import productRouter from "./routes/product.js";

//MongoDB Connect URI
const DBURL='mongodb+srv://rajveer:rajveer123@cluster0.uro6j.mongodb.net/library?retryWrites=true&w=majority'

//connect to Database
mongoose.connect(DBURL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(
        (result) => {
                     console.log("Connected to DB");
                     server.listen(PORT)
                    }
    )     
    .catch(
        (err) =>{
                    console.log(err)
                }
    ) 


//for Homepage
const welcome=(req,res)=>{
    res.send("<h1> Hello World!! </h1> <h2> Welcome to Homepage </h2>")
}


const server=express()          //server start
server.use(bodyParser.json())
const PORT=3000

server.use("/student",studentRouter);
server.use("/quote",quoteRouter)
server.use("/product",productRouter)
server.get("/",welcome);



