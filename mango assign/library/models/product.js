import mongoose from 'mongoose'
const Schema= mongoose.Schema

const productSchema= mongoose.Schema
({
productName:{
    type:String,
    required:true},
price:{
    type:String,
    required:true} 
} ,{

    timestamps: true,
    
    
    }
)

export const product=mongoose.model('product',productSchema)