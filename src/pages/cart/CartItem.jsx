import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

export default function CartItem(props) {
   const {
      addToCart,
      subFromCart,
      cartItems,
      updataCartItemCount,
      removeFromCart,
   } = useContext(ShopContext);

   const { id, image, description, title, price, category } = props.data;
   console.log(cartItems);
   return (
      <div className="cartItem flex items-center p-2 h-[100px]">
         <img className="h-[80px]" src={image} alt={id} />
         <div className="description">
            <p>
               <b>{title}</b>
            </p>
            <p>${price}</p>

            <div className="countHandler"></div>
            <span>quantity</span>
            <button
               onClick={() => {
                  subFromCart(id);
               }}
            >
               -
            </button>
            <input
               value={cartItems[id]}
               onChange={(e) => {
                  updataCartItemCount(Number(e.target.value), id);
               }}
            />
            <button
               onClick={() => {
                  addToCart(id);
               }}
            >
               +
            </button>
            <button
               onClick={() => {
                  removeFromCart(id);
               }}
            >
               X
            </button>
         </div>
      </div>
   );
}
