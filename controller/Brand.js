const { Brand } = require("../model/Brand")

exports.fetchAllBrands = async (req,res)=>{


    try {
        const brands = await Brand.find({}).exec();
        res.status(200).json(brands)
    } catch (error) {
        res.status(400).json(error)
        
    }
}

exports.createBrands = async (req, res) => {


    // this product we have to get from the api body
    const brands = new Brand(req.body)

    try{
        const doc  = await brands.save();
        res.status(201).json(doc)
    }
    catch(err){
        res.status(400).json(err)
    }

}
