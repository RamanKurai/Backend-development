const express = require("express")

const app = express();
//logs = the method , URL and the timestamp

function loggerMiddleware(req , res , next){
  console.log("Method is called" + req.method)
  console.log("Host is called" + req.url)
  console.log(new Date())
  next();
}

app.use(loggerMiddleware)

app.get("/sum/:a/:b" , loggerMiddleware ,(req , res)=>{
  const a = parseInt(req.params.a)
  const b = parseInt(req.params.b)
  res.json({
      answer : a + b
  })
})

app.get("/multiply/:a/:b" , loggerMiddleware, (req , res)=>{
  const a = parseInt(req.params.a)
  const b = parseInt(req.params.b)
  res.json({
      answer : a * b
  })
})



app.listen(3000)