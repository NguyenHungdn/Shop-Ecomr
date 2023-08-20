import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import Cart from '../pages/cart/Cart';
import { useState } from 'react';
export const Navbar = () => {
   const [toggle, setToggle] = useState(false);
   const handleClick = () => {
      setToggle(!toggle);
   };
   return (
      <div className="navbar">
         <div className="link">
            <Link to="/" className="nav-shop">
               Shop
            </Link>
            <div className="">
               <ShoppingCart size={32} onClick={handleClick} />
               {toggle && (
                  <div className="">
                     <Cart />
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};
