const { Router } = require('express');
const { route } = require('express/lib/application');
const controller = require('../controllers/controller');

const routes = Router();
routes.get('/categories', controller.getCategories);
routes.get('/categories/:category/products', controller.getCategoryProducts);
routes.get('/products/:id', controller.getProduct);
routes.post('/categories/:category/products', controller.createProduct);
routes.put('/categories/:category/products/:id', controller.updateProduct);
routes.delete('/products/:id', controller.deleteProduct);


module.exports = routes;
