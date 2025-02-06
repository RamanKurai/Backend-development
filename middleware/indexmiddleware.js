const express = require("express");

const app = express();

// funtion that have boolean for age greater than 14 or not
// in this part I made a official middleware , how are the middleware were already introduce!
function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
    return true;
  } else {
    return false;
  }
}

app.get("/ride", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You can sucessfullyy riden the ride1",
  });
});

app.get("/ride1", isOldEnoughMiddleware, (req, res) => {
  res.json({
    msg: "You can sucessfullyy riden the ride1",
  });
});

app.listen(3000);
