const express = require('express')
const app = express()
const port = 3000


// import packages

//const admin = require('firebase-admin');
//const bcrypt = require('bcrypt');
const path = require('path');


app.listen(3000,() => {
    console.log('listening on port 3000.....');
    
    })


//decl. static path
let staticPath = path.join(__dirname);

// app.get('/', (req, res) => {
//   res.render('views.html')
// })

app.use(express.static(staticPath));
app.use(express.json());


app.engine('html', require('ejs').renderFile);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.get('/404',(req, res) =>{
    res.sendFile(path.join(staticPath, "404.html"));
})
//routes, home Route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "main.html"));
    })
    
    //signup route
    app.get('/signup', (req, res)=>{
        res.sendFile(path.join(staticPath, "signup.html"));
    })
    
    //shop route
    app.get('/shop', (req, res)=>{
        res.sendFile(path.join(staticPath, "shop.html"));
    })
    
    app.post('/signup', (req, res)=>{
        console.log(req.body);
        res.json('data received');
    })
    
    ///404route
    app.get('/404',(req, res) =>{
        res.sendFile(path.join(staticPath, "404.html"));
    })
    
    app.use((req, res)=>{
    
      res.redirect('/404');
    
    })