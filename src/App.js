import React from "react";
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import banner_men from './Component/assets/banner_mens.png';
import banner_women from './Component/assets/banner_women.png';
import banner_kids from './Component/assets/banner_kids.png';
import './styles.css';


function MyApp() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/men" element={<ShopCategory banner={banner_men} />}></Route>
          <Route path="/women" element={<ShopCategory banner={banner_women} />}></Route>
          <Route path="/kids" element={<ShopCategory banner={banner_kids} />}></Route>
          <Route path="/products" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default MyApp;
