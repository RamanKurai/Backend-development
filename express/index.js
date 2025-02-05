const express = require("express")
const app = express();
const users = [{
    users : "John",
    kidneys:[{
        healthy : false
}], healthy : true
}]
app.use(express.json())
app.get("/" ,(req , res)=>{
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnKidneys.length;
    let numberofhealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
      if (johnKidneys[i].healthy) {
        numberofhealthyKidneys = numberofhealthyKidneys + 1;
      }        
    }
    const numberofUnhealthyKidneys = numberofKidneys - numberofhealthyKidneys

    res.json({
        numberofKidneys,
        numberofhealthyKidneys,
        numberofUnhealthyKidneys
    })
})
app.post("/" , (req , res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done!"
    })
})

app.put("/" ,  (req , res)=>{
    for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete("/", (req, res) => {
    const newKidneys = [];
    
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) { 
            newKidneys.push({ healthy: true });
        }
    }

    users[0].kidneys = newKidneys;

    res.json({
        msg: "done"
    });
});




app.listen(3000)