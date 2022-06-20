if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = 3000
const users = []
const bcrypt=require('bcrypt')
// import packages

//const admin = require('firebase-admin');
//const bcrypt = require('bcrypt');
const path = require('path');
app.use(express.urlencoded({ extended:false}))

// const initializePassport = require('./passport-config')
// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
// )


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
    app.get('signup', checkNotAuthenticated, (req, res) => {
        res.sendFile(path.join(staticPath, "signup.html"));
    })
    
    //shop route
    app.get('shop', (req, res)=>{
        res.sendFile(path.join(staticPath, "shop.html"));
    })
    

    ///404route
    app.get('404',(req, res) =>{
        res.sendFile(path.join(staticPath, "404.html"));
    })
    





    // app.post('signup', (req, res)=>{
    //     console.log(req.body);
    //     res.json('data received');
    // })
    

    app.post('/signup', async(req, res) =>{
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
        })
  
    res.redirect('/login')
  } catch {
    res.redirect('/signup')
  }   console.log(users)
})

app.delete('logout', (req, res) => {
    req.logOut()
    res.redirect('login')
  })

  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
  }

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }
    app.use((req, res)=>{
    
      res.redirect('/404');
    })

    app.listen(3000,() => {
        console.log('listening on port 3000.....');
        
        })
