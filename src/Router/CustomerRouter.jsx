import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Cart from "../customer/Components/Cart/Cart";
import Navigation from "../customer/Components/Navigation/Navigation";
import Footer from "../customer/Components/Footer/Footer";
import Product from "../customer/Components/Product/Product";
import ProductDetails from "../customer/Components/ProductDetails/ProductDetails";
import CheckOut from "../customer/Components/CheckOut/CheckOut";
import Order from "../customer/Components/Order/Order";
import OrderDetails from "../customer/Components/Order/OrderDetails";
import PaymentSuccess from "../customer/Components/Payment/PaymentSuccess";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>

      <Routes>
        
      <Route path="/login" element={<HomePage/>}></Route>
      
      <Route path="/register" element={<HomePage/>}></Route>

        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/checkout" element={<CheckOut/>}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails/>}
        ></Route>
     
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route> */}
        {/* <Route path="/terms-condition" element={<TearmsCondition />}></Route> */}
        {/* <Route path="/contact" element={<Contact />}></Route> */}
        {/* <Route
          path="/account/rate/:productId"
          element={<RateProduct />}
        ></Route> */}
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default CustomerRouter;
