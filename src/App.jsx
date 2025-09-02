import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router";
import Dashborad from "./pages/Dashboard";
import EditPage from "./pages/Edit";
import Component from "./pages/LoginForm";
import TotalOrders from "./pages/TotalOrders";
import ProductList from "./pages/ProductList"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashborad />}/>
          <Route path="/orders" element={<TotalOrders/>}/>
          <Route path="/edit" element={<EditPage/>}/>
          <Route path="/component" element ={<Component/>} />
          <Route path="/product-list" element={<ProductList/>}/>
          <Route path="*" element={<>
            
            <h1>Page note found</h1>
            </>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App