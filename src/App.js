

import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import { Routes, Route } from "react-router-dom";
import ProductDetails from './component/ProductDetails';
import Login from "./component/login";
import Register from "./component/register";
import Cart from './component/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
      
    </>
  );
}

export default App;

