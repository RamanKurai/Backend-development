const express = require("express")

const app = express();
let requestCount = 0;

function requestIncreaser () {
   requestCount = requestCount + 1
}

app.get("/sum/:a/:b" , (req , res)=>{
  requestIncreaser(req , res)
  const a = parseInt(req.params.a)
  const b = parseInt(req.params.b)
  console.log("Total number of the request" + requestCount)
  res.json({
      answer : a + b
  })
})

app.get("/multiply/:a/:b" , (req , res)=>{
  requestIncreaser(req , res)
  const a = parseInt(req.params.a)
  const b = parseInt(req.params.b)
  console.log("Total number of the request" + requestCount)
  res.json({
      answer : a * b
  })
})



app.listen(3000)