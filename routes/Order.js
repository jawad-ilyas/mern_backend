const express = require('express');
const { addToOrder, fetchOrderByUser, DeleteFromOrder, updateOrder } = require('../controller/Order');

const router = express.Router();

router.post('/', addToOrder)
    .get('/:id', fetchOrderByUser)
    .delete('/:id', DeleteFromOrder)
    .patch('/:id', updateOrder)


exports.router = router