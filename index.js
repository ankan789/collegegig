const express = require('express');
const app = express();

port = 5000

//Home Page
app.get('/' , (req, res)=>{
    res.sendFile(__dirname + "/templates/index.html")
})

app.listen(5000, ()=> console.log("server started on port " +port  +"..."))