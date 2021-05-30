import { student } from "../models/student.js";




export const addstudent =(req,res)=>
{
    console.log("posting")
    const student1 =new student(
        {
         studentFirstName : req.body.studentFirstName,
        collegeName : req.body.collegeName,
        location : req.body.location,
    })
    student1.save()
    .then(
        (result)=>{
            res.send('{"result" : "Success" }')

             
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}


export const getStudent = (req,res)=>
{
    if(req.query.studentFirstName)
    {
        console.log("donee")
    student.aggregate(
        [{$match:{studentFirstName : req.query.studentFirstName }}]
    )
    .then(
           (result)=>{res.send(result)}
        )
    .catch((err)=>{console.log(err)})
    }

    else
    {
        console.log("donee not")
        student.aggregate(
            [{$sort:{studentFirstName : 1}}]
        )
        .then(
               (result)=>{res.send(result)}
            )
        .catch((err)=>{console.log(err)})
    }
}