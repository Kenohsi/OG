//Done with Christina Ifrim, Kenan Husic, Muhammad Taha Imran, Adam Ibragimov!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const { Router } = require('express');
const { route } = require('express/lib/application');
const controller = require('../controllers/book-controller');

const routes = Router();
routes.get('/categories', controller.getCategories);
routes.get('/categories/:category/products', controller.getCategoryProducts);
routes.get('/products/:id', controller.getProduct);


/* --- Task 2 --- Add a route to create new books 
   endpoint: /categories/:category/books
 */
routes.post('/categories/:category/products', controller.createProduct);
  
/* --- Task 3 --- Add a route to update a book 
   endpoint: /books/:id
   route
 */
   routes.put('/categories/:category/products/:id', controller.updateProduct);
/* --- Task 4 --- Add a route to delete a book
   endpoint: /books/:id
 */
   routes.delete('/products/:id', controller.deleteProduct);


module.exports = routes;
