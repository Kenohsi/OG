if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}


const fs = require('fs');

const path = require('path');
let staticPath = path.join(__dirname,"views");
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
var counter=0;




const initializePassport = require('./passport-config');
const { json } = require('body-parser');
const { count } = require('console');
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
  
)

const users = []







app.engine('html', require('ejs').renderFile);
// app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
app.use(express.static(staticPath))
app.use(express.json())




//Save User Data in Password

  

app.get('/', checkAuthenticated, (req, res) => {
  res.sendFile(path.join(staticPath, "main.html"));
})
// , { name: req.user.name }

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(staticPath, "login.html"));
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/signup', checkNotAuthenticated, (req, res) => {
  res.sendFile(path.join(staticPath, "signup.html"));
})




//routes, home Route
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "login.html"));
})

//signup route
app.get('/signup', (req, res) => {
  res.sendFile(path.join(staticPath, "signup.html"));
})

//shop route
app.get('/shop', (req, res)=>{
  res.sendFile(path.join(staticPath, "shop.html"));
})

///404route
app.get('/404',(req, res) =>{
  res.sendFile(path.join(staticPath, "404.html"));
})

// app.post('signup', (req, res)=>{
//     console.log(req.body);
//     res.json('data received');
// })






app.post('/signup', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    
counter++;

    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
  //  var jsonData = 'USER '+counter+': name: '+ req.body.name+' email: '+req.body.email+' password: '+hashedPassword/n;
   

   //var jsonSave = JSON.parse( jsonData );
  //  console.log(jsonData);



    // //jsonSave= jsonSave.append(jsonData)
    
    

    //console.log(jsonParsed.persons[0].name);
    //var jsonObj = JSON.parse(jsonData);
//console.log(jsonObj);


// stringify JSON Object
//var jsonContent = JSON.stringify(jsonObj);
//console.log(jsonContent);






    res.redirect('/login')
  } catch {
    res.redirect('/signup')
  } // saveData(users);

  // console.log(jsonData);
 // console.log(jsonSave);

})
// const saveData = (users) =>{

//   // json data
//   // var jsonData = '{"users":[{"name":"users.name","email":"users.email"}';
//      //jsonData = JSON.stringify(users)
  
  
//     console.log(users)
    
  
//     }
    

app.delete('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login')
  });
});



function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}


app.use((req, res)=>{
    
  res.redirect('/404');
})


function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}




app.listen(3000,() => {
  console.log('listening on port 3000.....');
  
  })
























// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }
// //decl. static path

// const path = require('path');
// let staticPath = path.join(__dirname);
// const express = require('express')
// const app = express()
// const bcrypt = require('bcrypt')
// const passport = require('passport')
// const flash = require('express-flash')
// const session = require('express-session')
// const methodOverride = require('method-override')

// const initializePassport = require('./passport-config')
// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
// )

// const users = []

// // app.set('view-engine', 'ejs')
// app.use(express.urlencoded({ extended: false }))
// app.use(flash())
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(methodOverride('_method'))
// app.use(express.static(staticPath));
// app.use(express.json());
// app.engine('html', require('ejs').renderFile);




// app.get('/login', checkNotAuthenticated, (req, res) => {
//   res.render('login.html')
// })


// app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
//   successRedirect: 'shop.html',
//   failureRedirect: '/login.html',
//   failureFlash: true
// }))

// app.get('/register', checkNotAuthenticated, (req, res) => {
//   res.render('register.ejs')
// })

// app.get('/', checkAuthenticated, (req, res) => {
//   res.render('main.html', { name: req.user.name })

// })


// //routes, home Route
//     app.get("/", (req, res) => {
//         res.sendFile(path.join(staticPath, "login.html"));
//     })
    
//     //signup route
//     app.get('/signup', checkNotAuthenticated, (req, res) => {
//         res.sendFile(path.join(staticPath, "signup.html"));
//     })
    
//     //shop route
//     app.get('/shop', (req, res)=>{
//         res.sendFile(path.join(staticPath, "shop.html"));
//     })
    
//     ///404route
//     app.get('/404',(req, res) =>{
//         res.sendFile(path.join(staticPath, "404.html"));
//     })

//     // app.post('signup', (req, res)=>{
//     //     console.log(req.body);
//     //     res.json('data received');
//     // })
    

//     app.post('/signup', async(req, res) =>{
//       try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         users.push({
//           id: Date.now().toString(),
//           name: req.body.name,
//           email: req.body.email,
//           password: hashedPassword
//         })
  
//     res.redirect('/login.html')
//   } catch {
//     res.redirect('/signup.html')
//   }   console.log(users)
// })

// app.delete('logout', (req, res) => {
//     req.logOut()
//     res.redirect('/login.html')
//   })

//   function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next()
//     }
  
//     res.redirect('/login.html')
//   }

// app.get('/', checkAuthenticated, (req, res) => {
//   res.render('/main.html', { name: req.user.name })
// })


//   function checkNotAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//       return res.redirect('/')
//     }
//     next()
//   }
    // app.use((req, res)=>{
    
    //   res.redirect('/404');
    // })

    // app.listen(3000,() => {
    //     console.log('listening on port 3000.....');
        
    //     })































// ////////////////////////////// rest

// // const express = require('express')
// // const path = require('path');
// // const express = require('express')
// // const app = express()
// // const bcrypt = require('bcrypt')
// // const passport = require('passport')
// // const flash = require('express-flash')
// // const session = require('express-session')
// // const methodOverride = require('method-override')
// // let staticPath = path.join(__dirname);


// // app.use(express.json())

// // const users = []

// // app.get('/users', (req, res) => {
// //   res.json(users)
// // })

// // app.post('/users', async (req, res) => {
// //   try {
// //     const hashedPassword = await bcrypt.hash(req.body.password, 10)
// //     const user = { name: req.body.name, password: hashedPassword }
// //     users.push(user)
// //     res.status(201).send()
// //   } catch {
// //     res.status(500).send()
// //   }
// // })

// // app.post('/users/login', async (req, res) => {
// //   const user = users.find(user => user.name = req.body.name)
// //   if (user == null) {
// //     return res.status(400).send('Cannot find user')
// //   }
// //   try {
// //     if(await bcrypt.compare(req.body.password, user.password)) {
// //       res.send('Success')
// //     } else {
// //       res.send('Not Allowed')
// //     }
// //   } catch {
// //     res.status(500).send()
// //   }
// // })

// // app.listen(3000)