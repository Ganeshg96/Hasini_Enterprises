import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "../src/components/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/biscuits" element={<ProductPage category="Biscuits" />} />
        <Route path="/chocolates" element={<ProductPage category="Chocolates" />} />
      </Routes>
    </Router>
  );
}

export default App;
