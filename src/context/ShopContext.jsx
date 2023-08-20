import React, { createContext, useState, useEffect } from 'react';
import useCallApi from '../customHook/useCallApi';
export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
   const { products } = useCallApi('https://fakestoreapi.com/products');
   // xử lý lỗi bất đồng bộ, vì product chưa nhận đc dữ lieuẹ nên sẽ render ra mảng rổng
   const [listCategories, setListCategories] = useState([]);

   useEffect(() => {
      if (products.length > 0) {
         const defaultCart = getDefaultCart();
         setCartItems(defaultCart);
         const listCategories = products.map((product) => product.category);
         setListCategories([...new Set(listCategories)]);
      }
   }, [products]);
   /////////////////////////
   // tạo obj rỗng có key là id và value là 0 đại diện cho giỏ hàng
   const getDefaultCart = () => {
      let cart = {};
      for (let i = 1; i < products.length + 1; i++) {
         cart[i] = 0;
      }

      return cart;
   };
   //
   const getTotalCartAmount = () => {
      let totalAmount = 0;
      let percen = 120;
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            let itemInfo = products.find(
               (product) => product.id === Number(item),
            );
            totalAmount += cartItems[item] * itemInfo.price;
         }
      }
      const result = (totalAmount * (percen / 100)).toFixed(3);

      return {
         total: totalAmount.toFixed(3),
         result: result,
      };
   };

   // sử lý thêm vào giỏ hàng
   const [cartItems, setCartItems] = useState({});
   const addToCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
   };
   const subFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
   };
   const removeFromCart = (itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
   };
   const updataCartItemCount = (newAmount, itemId) => {
      setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
   };

   const contextValue = {
      cartItems,
      addToCart,
      subFromCart,
      updataCartItemCount,
      getTotalCartAmount,
      removeFromCart,
      listCategories,
   };
   console.log(cartItems);
   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
   );
};
