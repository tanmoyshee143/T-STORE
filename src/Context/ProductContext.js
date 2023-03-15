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
     singleProduct : {} ,
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

const getSingleProduct = async(url) =>{
  dispatch({type: "SET_SINGLE-PRODUCT_LOADING"})
  try {
    const res = await axios.get(url);

    // console.log("producrcontext-res",res)
  const singleProduct = await res.data;

  // console.log("producrcontext",singleProduct)
   // this below line use for REDUCER HOOK//
   dispatch({type: "SET_SINGLE-PRODUCT_API_DATA" , payload :singleProduct})
  }
  catch(error){
    dispatch ({type : "SINGLE-PRODUCT_API_ERROR"})
   }
};


 // this is for API call (besically it is a react hook) //
useEffect ( () =>{
     getProducts(API);
},[]);

  return <context.Provider value={{ sName , ...state, getSingleProduct}}>{children}</context.Provider>;
};

// custom hooks
const useProductContext = () => {
  return useContext(context);
};

export { AppContext, context , useProductContext};














