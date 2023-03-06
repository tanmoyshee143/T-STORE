import { createContext, useEffect } from "react";
import axios from "axios";

const context = createContext();

const API = "https://api.pujakaitem.com/api/products";


// context api function start from here//

const AppContext = ({ children }) => {
  const sName = "T STORE";

   const getProducts = async (url) => {
        const res = await axios.get(url)

        console.log("axios deta",res)
   };
  
useEffect ( () =>{
     getProducts(API);
},[]
);

  return <context.Provider value={{ sName }}>{children}</context.Provider>;
};

export { AppContext, context };
