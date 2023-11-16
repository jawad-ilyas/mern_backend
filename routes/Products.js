const express = require('express');
const { createProduct, fetchProductByFilter ,fetctProductById, updateProduct } = require('../controller/Product');

const router  = express.Router();

router.post('/' , createProduct)
.get('/' ,fetchProductByFilter)
.get('/:id' , fetctProductById)
.patch('/:id' , updateProduct)

exports.router = router