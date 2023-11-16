const express = require('express');
const { createUser ,verifyUser } = require('../controller/Auth');

const router  = express.Router();

router.post('/signup' , createUser).post('/login',verifyUser)



exports.router = router