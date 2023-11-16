const express = require('express');
const server = express();
const mongoose = require('mongoose');
const { createProduct } = require('./controller/Product');
const ProductRouters = require('./routes/Products')
const BrandsRouters = require('./routes/Brands')
const CategoryRouters = require('./routes/Category')
const UserRouters = require('./routes/User')
const AuthRouters = require('./routes/Auth')
const CartRouters = require('./routes/Cart')
const OrderRouters = require('./routes/Order')
const cors = require('cors')

const path = require('path');
// middlewares

server.use(cors(
    {
        exposedHeaders: ['X-Total-Count']
    }
))


server.use(express.static(path.resolve(__dirname,'dist')))
server.use(express.json()); //to parse req.body
server.use('/products', ProductRouters.router)
server.use('/brands', BrandsRouters.router)
server.use('/categories', CategoryRouters.router)
server.use('/users', UserRouters.router)
server.use('/auth', AuthRouters.router)
server.use('/cart', CartRouters.router)
server.use('/orders', OrderRouters.router)


main().catch(error => console.error(error))
async function main() {
    await mongoose.connect('mongodb+srv://mughaljawad12:3zJnFZ3OztONyNgl@mern-project-clustor.m2hswrq.mongodb.net/?retryWrites=true&w=majority');
    console.log("database connect")

}


server.get('/', (req, res) => {
    res.json({ status: 'success' })
})


server.listen(8080, () => {
    console.log('server started ')
})