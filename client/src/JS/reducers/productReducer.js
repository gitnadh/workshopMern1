import { ADDPRODUCTFAILED, GETALLPRODUCTFAILED, GETALLPRODUCTSUCCES, GETONEPRODUCTFAILED, GETONEPRODUCTSUCCES, LOADING } from "../actionTypes/productTypes";

const initialState = {
    loading : false ,
    products : [] ,
    error : null ,
    oneprod : {}
}
export const productReducer = (state = initialState , {type,payload}) => { 
    switch (type) {
        case LOADING:
           return {...state , loading : true }
        case GETALLPRODUCTSUCCES :
           return {...state , products:payload, loading:false}
        case GETALLPRODUCTFAILED :
        return {...state , error:payload, loading: false}
        case ADDPRODUCTFAILED :
         case GETONEPRODUCTFAILED :
         return { ...state , error: payload}
        case  GETONEPRODUCTSUCCES :
         return { ...state , oneprod:payload }
    
        default:
           return state;
    }
 }