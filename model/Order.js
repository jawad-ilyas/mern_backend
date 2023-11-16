const mongoose = require("mongoose");


const orderScehema = mongoose.Schema({
    products: { type: mongoose.Schema.Types.Mixed },
    address: { type: mongoose.Schema.Types.Mixed },
    totalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    paymentMehtod: { type: String },
    status: { type: String }

})

const virtual = orderScehema.virtual('id');
virtual.get(function () {
    return this._id
})
orderScehema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform : function(doc,ret){delete ret._id}
})


exports.Order = mongoose.model("Order", orderScehema)