const ProductModel = require ('../models/Products')
const addproduct = async (req,res) => { 
 try {
       // console.log("Hello")
   let p = new ProductModel({...req.body})
   await p.save()
   res.send({product:p,msg:`Product ${p.name} added successfuly`})
   // console.log({...req.body})
 } catch (error) {
    res.status(400).send(error.message)
 }
 }
 const getallproducts = async(req,res) => { 
    try {
        let allproducts = await ProductModel.find()
        res.send({allproducts})
    } catch (error) {
        res.status(400).send(error.message)   
    }
  }
  const getoneproduct = async(req,res) => { 
    try {
        const {idprod} = req.params
        let oneproduct = await ProductModel.findById(idprod)
        res.send({oneproduct})
    } catch (error) {
        res.status(400).send(error.message)
    }
   }
   const updateproduct = async(req,res) => { 
    try {
        const {idprod} = req.params
        let updatedproduct = await ProductModel.updateOne({_id:idprod},{$set:{...req.body}})
        res.send({updatedproduct,msg:"product updated success"})
    } catch (error) {
        res.status(400).send(error.message)
    }
    }
    const deleteproduct = async(req,res) => { 
        try {
            const {idprod} = req.params
            await ProductModel.deleteOne({ _id: idprod });
            res.send({msg:"The product deleted"})
        } catch (error) {
            res.status(400).send(error.message) 
        }
     }
 module.exports = {addproduct,getallproducts,getoneproduct,updateproduct,deleteproduct}
