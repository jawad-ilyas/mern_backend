const { Order } = require("../model/Order");

exports.fetchOrderByUser = async (req, res) => {

    const user = req.params.id;
    
    console.log("fetchOrderByUser from the backend ", user)
    try {
        // const order = await Order.find({ user: user }).populate("user").populate("products")
        const order = await Order.find({ user: user })
        console.log("return data from the fetch order by user ", order)


        console.log("\n now i am send the orders of the user \n", order)
        res.status(200).json(order)
    } catch (error) {

        console.log("now i finding the way to find the order rror ")
        res.status(400).json(error)

    }
}

exports.addToOrder = async (req, res) => {


    // this product we have to get from the api body
    const order = new Order(req.body)

    try {
        const doc = await order.save();
        res.status(201).json(doc)
    }
    catch (err) {
        res.status(400).json(err)
    }

}


exports.DeleteFromOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByIdAndDelete(id)
        res.status(200).json(order)
    }
    catch (err) {
        res.status(400).json(err)
    }

}

exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(order)
    }
    catch (err) {
        res.status(400).json(err)
    }

}