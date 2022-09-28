const express = require ('express')
const { addproduct, getallproducts, getoneproduct, updateproduct } = require('../controllers/productControllers')
const router = express.Router()
 /**
  * @param POST /product/addproduct
  * @description ajout d'un nouvel produit
  * @access PUBLIC
  */


 router.post("/addproduct",addproduct)
  /**
  * @param GET /product
  * @description get all the products
  * @access PUBLIC
  */
 router.get("/",getallproducts)
 /**
  * @param GET /product/:id
  * @description get one product
  * @access PUBLIC
  */
 router.get("/:idprod",getoneproduct)
  /**
  * @param PUT /product/:id
  * @description update products
  * @access PUBLIC
  */
 router.put("/:idprod",updateproduct)
 module.exports = router