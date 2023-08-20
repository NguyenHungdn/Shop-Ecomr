import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { ShopContextProvider } from './context/ShopContext';

export default function App() {
   return (
      <div className="App">
         <ShopContextProvider>
            <Router>
               <Navbar />
               <Routes>
                  <Route path="/" element={<Shop />} />
                  <Route path="/cart" element={<Cart />} />
               </Routes>
            </Router>
         </ShopContextProvider>
      </div>
   );
}
