import Product from './Product';
import useCallApi from '../../customHook/useCallApi';
import { useState } from 'react';
import ListCategories from './ListCategories';
export default function Shop() {
   const [toogle, setToogle] = useState(true);
   const [priceFilter, setPriceFilter] = useState(null);
   const [category, setCategory] = useState(null);
   const { products, setProducts } = useCallApi(
      'https://fakestoreapi.com/products',
   );

   const sortProductsByRateLow = () => {
      if (products && products.length > 0) {
         const sortedProducts = [...products].sort(
            (a, b) => a.rating.rate - b.rating.rate,
         );
         setProducts(sortedProducts);
      }
   };
   const sortProductsByRateHight = () => {
      if (products && products.length > 0) {
         const sortedProducts = [...products].sort(
            (a, b) => b.rating.rate - a.rating.rate,
         );
         setProducts(sortedProducts);
      }
   };
   const sortProductsByPriceLow = () => {
      if (products && products.length > 0) {
         const sortedProducts = [...products].sort((a, b) => a.price - b.price);
         setProducts(sortedProducts);
      }
   };
   const sortProductsByPriceHight = () => {
      if (products && products.length > 0) {
         const sortedProducts = [...products].sort((a, b) => b.price - a.price);
         setProducts(sortedProducts);
      }
   };
   const handleCategoryChange = (value) => {
      setCategory(value);
   };

   const handlePriceFilterChange = (value) => {
      setPriceFilter(value);
   };
   const handleReset = () => {
      setCategory(null);
      setPriceFilter(null);
   };
   let filteredProducts = [...products];

   if (category) {
      filteredProducts = filteredProducts.filter(
         (product) => product.category === category,
      );
   }

   if (priceFilter) {
      filteredProducts = filteredProducts.filter((product) => {
         if (priceFilter === '1-10') {
            return product.price >= 1 && product.price <= 10;
         }
         if (priceFilter === '10-50') {
            return product.price >= 10 && product.price <= 50;
         }
         if (priceFilter === '50-100') {
            return product.price >= 50 && product.price <= 100;
         }
         if (priceFilter === '100-500') {
            return product.price >= 100 && product.price <= 500;
         }
         if (priceFilter === '500+') {
            return product.price >= 500;
         }
      });
   }

   return (
      <div className="shop">
         <div className="shopTitle">
            <h1>shop</h1>
         </div>
         {/* {------} */}
         <div>
            <button onClick={handleReset}>Reset Fliter</button>
         </div>
         <div className="shop-container">
            <div className="shop-left">
               <ListCategories
                  handleCategoryChange={handleCategoryChange}
                  handlePriceFilterChange={handlePriceFilterChange}
               />
            </div>
            <div className="shop-right">
               <div className="item">
                  <div className="soft">
                     <div>
                        <h3>Softby</h3>
                     </div>
                     <button
                        className="soft-btn"
                        onClick={() => {
                           sortProductsByRateLow();
                        }}
                     >
                        Rating low to hight
                     </button>
                     <button
                        className="soft-btn"
                        onClick={() => {
                           sortProductsByRateHight();
                        }}
                     >
                        Rating hight to low
                     </button>
                     <button
                        className="soft-btn"
                        onClick={() => {
                           sortProductsByPriceLow();
                        }}
                     >
                        Price low
                     </button>
                     <button
                        className="soft-btn"
                        onClick={() => {
                           sortProductsByPriceHight();
                        }}
                     >
                        Price hight
                     </button>
                  </div>
               </div>

               <div className="products flex flex-wrap justify-center gap-2">
                  {products && products.length > 0 ? (
                     filteredProducts.map((product) => (
                        <Product data={product} key={product.id} />
                     ))
                  ) : (
                     <p>Loading products...</p>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
