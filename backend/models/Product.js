// models/Product.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  couponId: {
    type: String,
    required: true,
    unique: true,
    match: /^[A-Z0-9]{6,10}$/  // Adjust regex to your requirements
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
