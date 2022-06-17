// import packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//init express.js

const app = express();
app.get("/", (req, res) => {

res.sendFile(path.join(__dirname, "main.html"));

})

app.listen(3000,() => {
console.log('listening on port 3000.....');

})