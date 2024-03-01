import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Customer/components/Cart/Cart";
import Navigation from "../Customer/components/Navigation/Navigation";
import { HomePage } from "../Customer/pages/HomePage/HomePage";
import Footer from "../Customer/components/Footer/Footer";
import Product from "../Customer/components/Product/Product";
import ProductDetails from "../Customer/components/ProductDetails/ProductDetails";
import Checkout from "../Customer/components/Checkout/Checkout";
import Order from "../Customer/components/Order/Order";
import OrderDetails from "../Customer/components/Order/OrderDetails";
import PaymentSuccess from "../Customer/components/Payment/PaymentSuccess";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
