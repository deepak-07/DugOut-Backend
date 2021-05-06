const express = require("express");
const router = express.Router();
const { Product } = require("../models/product.model")
const {extend} = require("lodash")

router.route("/")
.get(async (req, res) => {
  try {
    const products = await Product.find({});
  res.json({  products,success: true })
  } catch (err) {
    res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message })
  }
  
})
.post(async (req, res) => {
  try {
    const product = req.body;
    const NewProduct = new Product(product);
    const savedProduct = await NewProduct.save();
    res.json({ success: true, product: savedProduct })
  } catch (err) {
    res.status(500).json({ success: false, message: "unable to add products", errorMessage: err.message})
  }
})

router.param("productId",async (req, res,next,id) => {
  try {
    const product = await Product.findById(id);
    if(!product){
     return res.status(400).json({ success: false, message: "product not found",})
    }
    req.product=product;
    
    next()
    
  } catch {
    res.status(400).json({ success: false, message: "error while fetching product",})
  }
})

router.route("/:productId")
.get((req, res) => {
  // const { id } = req.params
  let {product} = req;
  product.__v = undefined
  res.json({success:true,message:"api under construction",product})
 
})
.post(async (req, res) => {
  let {product} = req;
  const updatedProduct  = req.body;
  product = extend(product,updatedProduct)
  product = await product.save()
  res.json({success:true, product})
  })

.delete(async (req, res) => {
  let {product} = req;
 
  product = await product.remove()
  res.json({success:true, product})

  })


module.exports = router