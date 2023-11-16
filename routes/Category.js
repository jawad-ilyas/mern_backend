const express = require('express');
const { fetchAllCatageroy, createCategory } = require('../controller/Category');


const router = express.Router();


router.get('/', fetchAllCatageroy).post('/',createCategory)

exports.router = router;