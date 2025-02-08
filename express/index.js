const express = require("express")
const app = express();

// In this code I Have learned about the queryparameter(Query Routes) ,
//  that is another method to take input from the user
app.use(express.json())

app.get("/sum" , (req , res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        answer : a + b
    })
})

app.get("/multiply" , (req , res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        answer : a * b
    })
})

app.get("/divide" , (req , res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        answer : a / b
    })
})

app.get("/subtract" , (req , res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        answer : a - b
    })
})

app.listen(3000)