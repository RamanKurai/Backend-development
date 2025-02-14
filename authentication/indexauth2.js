const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "ramankurai2712"
const app = express();
app.use(express.json())

const users = [];

app.post("/signup" , (req , res)=>{
    const username = req.body.username
    const password = req.body.password
    
    users.push({
        username : username,
        password : password
    })
    res.json({
        message : "You are Signed Up"
    })
    console.log(users)
})

app.post("/signin" , (req , res)=>{
    const username = req.body.username
    const password = req.body.password
    
    const user = users.find(user => user.username === username && user.password === password)

    if (user) {
        const token = jwt.sign({
            username : username
        }, JWT_SECRET)
        user.token = token;
        res.send({
            token
        })
    } else {
        res.status(403).send({
            message : "Invalid username and password"
        })
    }
    console.log(users)
})

app.get("/me" , (req , res)=> {
   const token = req.headers.token
   const decodedInformation = jwt.verify(token ,JWT_SECRET)
   const username = decodedInformation.username
   const user = users.find(user => user.token === token)

   
   if (user) {
    res.send({
        username : user.username,
        password : user.password
    })
   } else {
    res.status(403).send({
        message : "Invalid username and password"
    })
   }
})

app.listen(3000)