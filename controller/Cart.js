const { Cart } = require("../model/Cart");

exports.fetchItemByUserIdCart = async (req, res) => {


    // console.log("now you calling the fetchItemByUserIdCart  ")
    const user = req.params.id;
    try {
        const cart = await Cart.find({ user: user }).populate('user').populate('product')

        res.status(200).json(cart)
    } catch (error) {
        res.status(400).json(error)

    }
}

exports.addToCart = async (req, res) => {


    // console.log("this is my data that send by user to created order ", req.body)

    // this product we have to get from the api body
    const cart = new Cart(req.body)

    try {
        const doc = await cart.save();
        // const result = await doc.populate('product')
        res.status(201).json(doc)
    }
    catch (err) {
        res.status(400).json(err)
    }

}


exports.DeleteFromCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByIdAndDelete(id)
        res.status(200).json(cart)
    }
    catch (err) {
        res.status(400).json(err)
    }

}

exports.updateCart = async (req, res) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findByIdAndUpdate(id, req.body, { new: true })
        const result = await cart.populate('product');
        res.status(200).json(result)
    }
    catch (err) {
        res.status(400).json(err)
    }

}