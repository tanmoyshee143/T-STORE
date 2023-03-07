import { createContext, useEffect , useReducer} from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer"



const context = createContext();

const API = "https://api.pujakaitem.com/api/products";

// this below line for use REDUCER HOOK //
const initialState = {
     isLoading: false,
     isError: false,
     products: [],
     featureProducts: []
};


// context api function start from here//

const AppContext = ({ children }) => {
  
  // this below line for use REDUCER HOOK //
  const [state, dispatch] = useReducer(reducer,initialState);
  
     const sName = "T STORE";

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

 // this is for API call (besically it is a react hook) //
useEffect ( () =>{
     getProducts(API);
},[]);

  return <context.Provider value={{ sName , ...state}}>{children}</context.Provider>;
};

export { AppContext, context };
