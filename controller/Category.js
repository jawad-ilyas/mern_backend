const { Category } = require("../model/Category");

exports.fetchAllCatageroy = async (req,res)=>{


    try {
        const categories = await Category.find({}).exec();
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json(error)
        
    }
}


exports.createCategory = async (req, res) => {


    // this product we have to get from the api body
    const category = new Category(req.body)

    try{
        const doc  = await category.save();
        res.status(201).json(doc)
    }
    catch(err){
        res.status(400).json(err)
    }

}
