import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';

export default function ListCategories({
   handleCategoryChange,
   handlePriceFilterChange,
}) {
   const { listCategories } = useContext(ShopContext);

   const handleCategoryClick = (category) => {
      handleCategoryChange(category);
   };

   const handlePriceFilterClick = (value) => {
      handlePriceFilterChange(value);
   };

   return (
      <div>
         <h3>Catagory</h3>
         <button onClick={() => handleCategoryClick('')}>All</button>
         {listCategories.map((category) => (
            <div key={category}>
               <button onClick={() => handleCategoryClick(category)}>
                  {category}
               </button>
            </div>
         ))}
         <div>
            <h3>Fliter Price</h3>{' '}
         </div>
         <select onChange={(e) => handlePriceFilterClick(e.target.value)}>
            <option value="">All</option>
            <option value="1-10">1-10</option>
            <option value="10-50">10-50</option>
            <option value="50-100">50-100</option>
            <option value="100-500">100-500</option>
            <option value="500+">500+</option>
         </select>
         {/* <div>
        <button onClick={() => handlePriceFilterClick("1-10")}>1-10</button>
        <button onClick={() => handlePriceFilterClick("10-50")}>10-50</button>
        <button onClick={() => handlePriceFilterClick("50-100")}>50-100</button>
        <button onClick={() => handlePriceFilterClick("100-500")}>
          100-500
        </button>
        <button onClick={() => handlePriceFilterClick("500+")}>500+</button>
      </div> */}
      </div>
   );
}
