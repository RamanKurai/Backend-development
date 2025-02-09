const express = require("express")
const app = express();

// In this code I Have learned about the queryparameter(Query Routes) ,
//  that is another method to take input from the user
app.use(express.json())

app.get("/sum/:a/:b" , (req , res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    res.json({
        answer : a + b
    })
})

app.get("/multiply/:a/:b" , (req , res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    res.json({
        answer : a * b
    })
})

app.get("/divide/:a/:b" , (req , res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    res.json({
        answer : a / b
    })
})

app.get("/subtract/:a/:b" , (req , res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)
    res.json({
        answer : a - b
    })
})

app.listen(3000)