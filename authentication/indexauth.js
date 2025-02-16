const express = require("express")
const jwt = require("jsonwebtoken")
const app = express();
const JWT_SECRET = "ramankurai2712"

app.use(express.json())

const users = [];

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup" , (req , res)=>{
    const username = req.body.username
    const password = req.body.password

    users.push({
        username : username,
        password : password
    })

    res.send({
        message : "You have signed up successfully"
    })
})

app.post("/signin" , (req , res)=>{
   const username = req.body.username
   const password = req.body.password

   const user = users.find(user => user.username === username && user.password === password)

   if (user) {
    const token = jwt.sign({
      username : username
    }, JWT_SECRET)
    res.send({
        token : token
    })
   } else {
    res.status(403).send({
        message : "Invalid username"
    })
   }
   console.log(users)
})

const auth = (req , res , next) => {
   const token = req.headers.token;

   if (token) {
    jwt.verify(token , JWT_SECRET , (err , decoded) => {
        if (err) {
            res.status(401).send({
                message : "Token Not Verified"
            })
        } else {
            req.user = decoded
            next();
        }
    })
   }else {
    res.status(404).send({
        message : "Invalid Token Id"
    })
   }
}

app.get("/me" , auth , (req , res)=>{
   const user = req.user;

   res.json({
    username : user.username
   })
})

app.listen(3000)