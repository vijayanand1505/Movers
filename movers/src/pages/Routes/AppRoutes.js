import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBanner from "../Banner/AddBanner";
import ListBanner from "../Banner/ListBanner";
import AddProvinces from "../Provinces/AddProvinces";
import ListProvinces from "../Provinces/ListProvinces";
import AddVehicle from "../Vehicle/AddVehicle";
import ListVehicle from "../Vehicle/ListVehicle";
import AddCountryCode from "../CountryCode/AddCountryCode";
import ListCountryCode from "../CountryCode/ListCountryCode";
import AddPage from "../Page/AddPage";
import ListPage from "../Page/ListPage";
import AddFAQ from "../FAQ/AddFAQ";
import ListFAQ from "../FAQ/ListFAQ";
import PendingOrder from "../LoadOrder/PendingOrder";
import AcceptedOrder from "../LoadOrder/AcceptedOrder";
import PickUpOrder from "../LoadOrder/PickUpOrder";
import CompletedOrder from "../LoadOrder/CompletedOrder";
import CancelledOrder from "../LoadOrder/CancelledOrder.";
import Dashboard from "../Dashboard/Dashboard";
import PaymentMethod from "../SinglePage/PaymentMethod";
import TransporterList from "../SinglePage/TransporterList";
import LorryOwnerList from "../SinglePage/LorryOwnerList";
import LorryList from "../SinglePage/LorryList";
import Settings from "../SinglePage/Settings";
import Login from "../Login/Login";
import Home from "../Users/UserHome/Home";
import Orders from "../Users/UserOrders/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/orders" element={<Orders />} />
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/addbanner" element={<AddBanner />} />
      <Route path="/listbanner" element={<ListBanner />} />
      <Route path="/addprovinces" element={<AddProvinces />} />
      <Route path="/listprovinces" element={<ListProvinces />} />
      <Route path="/addvehicle" element={<AddVehicle />} />
      <Route path="/listvehicle" element={<ListVehicle />} />
      <Route path="/addcountrycode" element={<AddCountryCode />} />
      <Route path="/listcountrycode" element={<ListCountryCode />} />
      <Route path="/addpage" element={<AddPage />} />
      <Route path="/listpage" element={<ListPage />} />
      <Route path="/addFAQ" element={<AddFAQ />} />
      <Route path="/listFAQ" element={<ListFAQ />} />
      <Route path="/pendingorder" element={<PendingOrder />} />
      <Route path="/acceptedorder" element={<AcceptedOrder />} />
      <Route path="/pickuporder" element={<PickUpOrder />} />
      <Route path="/completedorder" element={<CompletedOrder />} />
      <Route path="/cancelledorder" element={<CancelledOrder />} />
      <Route path="/paymentmethod" element={<PaymentMethod />} />
      <Route path="/transporterlist" element={<TransporterList />} />
      <Route path="/lorryownerlist" element={<LorryOwnerList />} />
      <Route path="/lorrylist" element={<LorryList />} />
      <Route path="/settings" element={<Settings />} />
      <Route
        path="*"
        element={
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              fontSize: "2rem",
              // color: "red",
              fontWeight: "bold",
            }}
          >
            Page not found
          </h1>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
