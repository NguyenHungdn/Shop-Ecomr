import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
export default function Product(props) {
   const { id, image, description, title, price, category, rating } =
      props.data;
   const { addToCart, cartItems } = useContext(ShopContext);

   const cartItemAmount = cartItems[id];

   return (
      <div className="product_Product flex flex-col w-[250px] border-[1px] border-orange-800 rounded-xl ">
         <div className="produc-img h-[170px] p-2 flex items-center justify-center">
            <img
               className=" h-[150px]"
               src={image}
               alt={image}
               // style={{ width: "100px", height: "100px" }}
            />
         </div>
         <div className="description">
            <p className="description-title">
               <b>{title}</b>
            </p>
            <p className="description-catagory">{category}</p>
            <p className="description-des">{description}</p>
            <p className="description-price">${price}</p>
            <p className="description-rating">rating: {rating.rate}</p>
            <p className="description-count">count: {rating.count}</p>
         </div>
         <button
            className="addToCartBttn"
            onClick={() => addToCart(id)}
            style={{ cursor: 'pointer' }}
         >
            Add To Cart {cartItemAmount > 0 && cartItemAmount}
         </button>
      </div>
   );
}
