const router = require('express').Router();
const products = require('./products.router');
const cart = require('./cart.router');
const orders = require('./orders.router');


router.use('/products', products);
// router.use('/cart', cart);
// router.use('/orders', orders);


module.exports = router;