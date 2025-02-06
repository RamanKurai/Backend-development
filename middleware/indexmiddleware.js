const express = require("express")

const app = express();

// funtion that have boolean for age greater than 14 or not
// we are assuming this as the middleware to get the desired endpoint to have rides
function isOldEnough(age) {
    if (age >= 14) {
       return true
    } else {
        return false
    }
}

app.get("/ride" , (req , res)=>{
  if (isOldEnough(req.query.age)) {
    res.json({
        msg: "You can sucessfullyy riden the ride1"
    })
  } else {
    res.status(411).json({
        msg : "Sorry you are not the age of 14"
    })
  }
    
})

app.get("/ride1" , (req , res)=>{
    if (isOldEnough(req.query.age)) {
      res.json({
          msg: "You can sucessfullyy riden the ride1"
      })
    } else {
      res.status(411).json({
          msg : "Sorry you are not the age of 14"
      })
    }
      
  })

app.listen(3000)