 const mongoose = require("mongoose");
require('mongoose-type-url');


const ProductSchema = new mongoose.Schema({
   name: {
    type: String,
    // required: [true, 'Ahh!! name is not present']
  },
image:{
    type:String,
    // required:["Image is required"]
  },
  price: {
    type: Number,
    // required: [true, 'Ahh!! price is mandatory']
  },
  inStock: {
       type: Boolean,
        // required: [true, 'stock update required']
  },
  fastDelivery: {
       type: Boolean,
        // required: [true, 'stock update required']
  },
  ratings: {
       type: Number,
       min: [1, "Rating should not allow less than 1"],
       max: [5, "Rating should not allow less than 5"],
      //  required: [true, 'Ahh!! rating is mandatory']
  },
  description: {
    type: String,
    // required: [true, 'description not found'],
    minlength:[30,'descriptionshould have atleast 300 characters or more']
  },
   category: {
       type: String,
      //  required: [true, 'category mandatory']
  },
  level : {
        type: String
  },
  
    },
    {timestamps: true,});


const Product = mongoose.model("Product", ProductSchema);


module.exports = { Product }