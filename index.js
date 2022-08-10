const express = require('express');
const app = express();
app.use( express.urlencoded( {extended: true})) //we have to use the urlencoded to read the header of https

port = 5000

//Home Page
app.get('/' , (req, res)=>{
    res.sendFile(__dirname + "/templates/loginpage.html")
})

app.get('/student', (req, res)=>{
    res.sendFile(__dirname + "/templates/index.html")
})

app.get('/admin', (req, res)=>{
    res.sendFile(__dirname + "/templates/adminpanel.html")
})

app.post('/verify' , (req, res)=>{

   var username = req.body.username
   var pass = req.body.pass

   if (username == "collegegig" && pass == "gig") res.redirect("/student") 
   if (username == "collegegig" && pass == "admin") res.redirect("/admin")
   else {res.send("<h1>hello  mr fish 😒</h1>")}

})
app.listen(5000, ()=> console.log("server started on port " +port  +"..."))