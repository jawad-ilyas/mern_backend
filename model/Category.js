const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
    label: { type: String, required: true, unique: true },
    value: { type: String, required: true, unique: true },
});

// Define the virtual field inside the schema
categorySchema.virtual('id').get(function () {
    return this._id;
});

categorySchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform : function(doc,ret){delete ret._id}

});

exports.Category = mongoose.model('Category', categorySchema);
