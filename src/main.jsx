// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/Contacts/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Layout from "./Layout";
import Team from "./components/Team/Team";
import Confirmation from "./pages/Confirmation/Confirmation";
import Cancellation from "./pages/Cancellation/Cancellation";
import OrderDetails from "./pages/Order/Orderdetails";
import MyOrders from "./pages/Order/MyOrders";
import Checkout from "./pages/Order/Checkout";
import Cart from "./pages/Order/Cart";
import Error from "./pages/404-Page/Error";
import ProductDetails from "./components/Products/ProductDetails";
import Help from "./pages/Help/Help";
import Privacy from "./pages/Privacy-Policy/Privacy";
import Payment from "./pages/Payment/Payment";
import ReturnAndCancellation from "./pages/ReturnAndCancellation/returnAndCancellation";
import EPRPage from "./pages/EPRPage/EPR_Page";
import Signup from "./pages/Signup/Signup";
import FAQ from "./pages/FAQ/Faq";
import CartEmpty from "./pages/Order/CartEmpty";

{/*Products Pages*/ }
import BambooProducts from "./pages/Latest_in_the_Market/BambooProducts";

{/*<----------------------------------------------------------------------------------->*/ }

{/*Popular Categories*/ }
import PopularCategories from "./pages/Popular_Categories/Popular_Categories";
import BeautyWellness from './pages/Popular_Categories/Beauty-Wellness';
import BodyCare from './pages/Popular_Categories/Body-Care';
import CustomizedGifts from './pages/Popular_Categories/Customized-Gifts';
import FashionAccessories from './pages/Popular_Categories/Fashion-Accessories';
import FoodBeverages from './pages/Popular_Categories/Food-Beverages';
import FurnitureDecor from './pages/Popular_Categories/Furniture-Decor';
import HealthSupplements from './pages/Popular_Categories/Health-Supplements';
import PrintingStationery from './pages/Popular_Categories/Printing-Stationery';

{/*<----------------------------------------------------------------------------------->*/ }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      {/* Drop down of "popularCategoriess */}
      
      <Route path="popularCategories" element={<PopularCategories/>} />
      <Route path="popularCategories/beautyWellness" element={<BeautyWellness />} />
      <Route path="popularCategories/bodyCare" element={<BodyCare />} />
      <Route path="popularCategories/customizedGifts" element={<CustomizedGifts />} />
      <Route path="popularCategories/fashionAccessories" element={<FashionAccessories />} />
      <Route path="popularCategories/foodBeverages" element={<FoodBeverages />} />
      <Route path="popularCategories/furnitureDecor" element={<FurnitureDecor />} />
      <Route path="popularCategories/healthSupplements" element={<HealthSupplements />} />
      <Route path="popularCategories/printingStationery" element={<PrintingStationery />} />
{/*<------------------------------------------------------------------------------------------------------>*/ }
      <Route path="about" element={<AboutUs />} />
      <Route path="help" element={<Help />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="contact" element={<Contact />} />
      <Route path="team" element={<Team />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="confirm" element={<Confirmation />} />
      <Route path="cancel" element={<Cancellation />} />
      <Route path="orderDetails" element={<OrderDetails />} />
      <Route path="myOrders" element={<MyOrders />} />
      <Route path="bambooProducts" element={<BambooProducts />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="cart" element={<Cart />} />
      <Route path="productDetails" element={<ProductDetails />} />
      <Route path="payment" element={<Payment />} />
      <Route path="returnAndCancellation" element={<ReturnAndCancellation />} />
      <Route path="EPR_Page" element={<EPRPage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="CartEmpty" element={<CartEmpty />} />

      

      <Route path="*" element={<Error />} />
    </Route>
  )
);

import App from "./App";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
