const { app } = require("firebase-admin");

const productContainers = [...document.querySelectorAll('.product-container')];
module.exports = data;


app.get('/getRequest/:name', function(req, res){
    res.send('here are : ' + req.product.name)
})