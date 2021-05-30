import mongoose from 'mongoose'
const Schema= mongoose.Schema

const quoteSchema= mongoose.Schema({
quote:{
    type:String,
    required:true
},
author:{
    type:String,
    required:true
}
},


{

timestamps: false,


});

export const quote=mongoose.model('quote',quoteSchema)
