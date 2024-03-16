const express = require('express');  
const app = express(); 
app.use("/api", (req, res, next)=>{ 
res.send("hi hello") 
}) 
app.listen(5000)