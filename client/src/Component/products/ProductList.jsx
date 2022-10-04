import { Link } from 'react-router-dom';
import React from 'react'
import {useSelector} from 'react-redux'
import Product from './Product';
export const ProductList = () => {
  const products=useSelector(state=>state.productReducer.products)
  console.log(products);
  return (
    <div>
      <Link to='/add'><button>Add Product</button></Link>
    <div>
    {products.map(produit=><Product key={produit._id} produit={produit}/>)}
    </div>
    </div>
  )
}
