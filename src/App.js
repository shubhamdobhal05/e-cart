
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import { Routes, Route } from "react-router-dom";
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';
import Checkout from "./component/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      
    </>
  );
}

export default App;
