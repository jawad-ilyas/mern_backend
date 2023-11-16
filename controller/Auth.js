const { User } = require("../model/User");
exports.createUser = async (req, res) => {
    // this product we have to get from the api body



    console.log("/n");
    console.log("now we are created the new user memeber into the auth js controller " );
    console.log("/n");
    console.log(req.body)
    console.log("/n");
    const user = new User(req.body)
    try {
        const doc = await user.save();
        res.status(201).json(doc)
    }
    catch (err) {
        res.status(400).json(err)
    }
}


exports.verifyUser = async (req, res) => {
    try {
        console.log("i am the request dot body into verify user" , req.body)
        const user = await User.findOne({ email: req.body.email }).exec();
        // TODO : thi sis just temporary , we use strong password auth
        if (user.password === req.body.password) {
            // TODO : we will make addresses independent of login
            res.status(200).json({ id: user.id, email: user.email, name: user.name, addresses: user.addresses })
        }
        else {
            res.status(401).json({ message: "invalid credentials" });
        }
    }
    catch (err) {
        res.status(400).json(err)
    }
}