import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import useCallApi from '../../customHook/useCallApi';
import CartItem from './CartItem';

export default function Cart() {
   const { getTotalCartAmount, cartItems } = useContext(ShopContext);
   const { products } = useCallApi('https://fakestoreapi.com/products');
   const { total, result } = getTotalCartAmount();
   return (
      <div className="cart bg-orange-500 w-[40%] fixed right-[5px] ">
         <div>
            <h1> Your cart item</h1>
         </div>
         <div className="cartItems">
            {products && products.length > 0 ? (
               products.map((product) => {
                  if (cartItems[product.id] !== 0) {
                     return <CartItem data={product} />;
                  }
               })
            ) : (
               <p>Loading products...</p>
            )}
         </div>
         <div>
            <p> ${total}</p>
            <p>VAT: 20% </p>
            <p>Total: ${result}</p>

            <button>Continue Shopping</button>
            <button>Checkout</button>
         </div>
      </div>
   );
}
