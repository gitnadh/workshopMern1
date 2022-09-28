const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name:  {type: String,required:true}, // String is shorthand for {type: String}
  price: Number,
  qte:   Number,
  img: String ,
  createddate: { type: Date, default: Date.now },
  disponible: {type: Boolean, default:true} ,
  description: String,
});
const ProductModel = mongoose.model('Products', ProductSchema);
module.exports = ProductModel