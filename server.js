// import packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');



//decl. static path
let staticPath = path.join(__dirname);

//init express.js
const app = express();

//middleware
app.use(express.static(staticPath));


//routes, home Route
app.get("/", (req, res) => {
res.sendFile(path.join(staticPath, "main.html"));
})

//signup route
app.get('/signup', (req, res)=>{
    res.sendFile(path.join(staticPath, "signup.html"));
})


///404route
app.get('/404',(req, res) =>{
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res)=>{

  res.redirect('/404');

})

app.listen(3000,() => {
console.log('listening on port 3000.....');

})