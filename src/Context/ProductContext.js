import { createContext, useContext, useEffect , useReducer} from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer"



const context = createContext();

const API = "https://api.pujakaitem.com/api/products";

// this below line for use REDUCER HOOK //
const initialState = {
     isLoading: false,
     isError: false,
     products: [],
     featureProducts: [],
     isSingleLoading : false,
     SingleProduct : {} ,
};


// context api function start from here//

const AppContext = ({ children }) => {
  
  // this below line for use REDUCER HOOK //
  const [state, dispatch] = useReducer(reducer,initialState);
  
     const sName = "T STORE";

//  1st API call for GetProducts //

   const getProducts = async (url) => {

           dispatch({type: "SET_LOADING"})
        try {
          const res = await axios.get(url);
        const products = await res.data;
        // this below line use for REDUCER HOOK//
       dispatch({type: "SET_API_DATA" , payload :products})

     //    console.log("axios deta",res)
        } catch(error){
         dispatch ({type : "API_ERROR"})
        }
   };

//  2nd API call for Single Product //

const getSingleProducts = async(url) =>{
  dispatch({type: "SET_SINGLE-PRODUCT_LOADING"})
  try {
    const res = await axios.get(url);
  const SingleProduct = await res.data;
   // this below line use for REDUCER HOOK//
   dispatch({type: "SET_SINGLE-PRODUCT_API_DATA" , payload :products})
  }
  catch(error){
    dispatch ({type : "SINGLE-PRODUCT_API_ERROR"})
   }
};


 // this is for API call (besically it is a react hook) //
useEffect ( () =>{
     getProducts(API);
},[]);

  return <context.Provider value={{ sName , ...state, getSingleProducts}}>{children}</context.Provider>;
};

// custom hooks
const useProductContext = () => {
  return useContext(context);
};

export { AppContext, context , useProductContext};














