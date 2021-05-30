import mongoose from 'mongoose'
const Schema= mongoose.Schema

const studentSchema = new Schema({
    studentFirstName:{
        type:String,
        required:true
    },
    collegeName:{
        type:String,
        required:true
    },
   
    location:{
        type:String,
        required:true
    }
},{
   // Model tableName will be the same as the model name
    timestamps: false,
    underscored: true
  });

export const student=mongoose.model('student',studentSchema)
