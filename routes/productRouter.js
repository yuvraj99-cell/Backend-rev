const express=require('express');
const productController=require('../controller/product');
const router=express.Router();
router
.get('/products',productController.getAllProducts) 
.get('/products/:id',productController.getProduct)
.post('/products',productController.createProduct)
.put('/products/:id',productController.updateProduct)
.delete('/products/:id',productController.deleteProduct)
.patch('/products/:id', productController.replaceProduct);

exports.router=router;