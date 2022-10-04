import {
  ADDPRODUCTFAILED,
  ADDPRODUCTSUCCES,
  GETALLPRODUCTFAILED,
  GETALLPRODUCTSUCCES,
  GETONEPRODUCTFAILED,
  GETONEPRODUCTSUCCES,
  LOADING,
} from "../actionTypes/productTypes";
import axios from "axios";

//Get all products
export const getallproducts = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const response = await axios.get("product");
    // console.log(response)
    dispatch({ type: GETALLPRODUCTSUCCES, payload: response.data.allproducts });
  } catch (error) {
    dispatch({ type: GETALLPRODUCTFAILED, payload: error });
  }
};
// add product
export const addproduct = (newProduct, navigate) => async (dispatch) => {
  try {
    console.log(newProduct);
    const response = await axios.post("product/addproduct", newProduct);
    console.log(response);
    dispatch({ type: ADDPRODUCTSUCCES });
    dispatch(getallproducts());
    navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({ type: ADDPRODUCTFAILED, payload: error });
  }
};
// Get one product
export const getoneproduct = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`product/${id}`);
    console.log(response);
    dispatch({ type: GETONEPRODUCTSUCCES, payload: response.data.oneproduct });
  } catch (error) {
    console.log(error);
    dispatch({ type: GETONEPRODUCTFAILED, payload: error });
  }
};
