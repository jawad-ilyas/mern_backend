const express = require('express');
const { fetchItemByUserIdCart, addToCart, DeleteFromCart, updateCart } = require('../controller/Cart');

const router = express.Router();

router.post('/', addToCart)
    .get('/cartInfo/:id', fetchItemByUserIdCart)
    .delete('/:id', DeleteFromCart)
    .patch('/:id', updateCart)


exports.router = router