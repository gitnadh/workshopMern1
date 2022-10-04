
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './Component/NavigationBar';
import ProductDetails from './Component/ProductDetails';
import AddProduct from './Component/products/AddProduct';
import { ProductList } from './Component/products/ProductList';
import { getallproducts } from './JS/actions/productActions';

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getallproducts())
  
  }, [])
  
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
       <Route path='/' element={<ProductList/>}/>
       <Route path='/add' element={<AddProduct/>}/> 
       <Route path='/:id' element={<ProductDetails />}/>

      

      </Routes>
    </div>
  );
}

export default App;
