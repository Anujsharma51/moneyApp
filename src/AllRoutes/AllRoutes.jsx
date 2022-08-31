import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import Product from "../components/Product";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="product" element={<Product />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
