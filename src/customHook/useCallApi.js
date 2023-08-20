import axios from 'axios';
import { useState, useEffect } from 'react';
export default function useCallApi(url) {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      axios
         .get(url)
         .then((res) => {
            setTimeout(() => {
               setProducts(res.data);
            }, 50);
         })
         .catch((err) => {
            console.log('Error fetching products:', err);
         });
   }, []);
   return { products, setProducts };
}
