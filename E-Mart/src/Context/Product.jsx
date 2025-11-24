import { createContext, useEffect, useState } from "react";


export const ProductContext=createContext();

const ProductProvider=({children})=>{

    const [product,SetProduct]=useState([]);
    const [loading,SetLoading]=useState(true);

    useEffect(()=>{
          fetch('/Product.json')
          .then(res=>res.json())
          .then(data=>{
            SetProduct(data);
            SetLoading(false);
          })
    },[])

    const value={product,loading}

   return(
    <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
   )
}

export default ProductProvider 