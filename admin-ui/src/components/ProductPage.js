import React, { useState } from "react";
import ProductRow from "./ProductRow";
import "./ProductPage.css";

function ProductPage({ category }) {
  const [search, setSearch] = useState("");

  const products = category === "Biscuits" ? [
    { category: "Biscuit", code: "B12", image: "link-to-image", name: "Fine Biscuit", rating: "5/5", stock: "44 Left", sold: "50 Sold", pricePerUnit: "Rup.5", units: "40", totalPrice: "200" },
    // Add more biscuit products here
  ] : [
    { category: "Choco", code: "C26", image: "link-to-image", name: "Hero Choco", rating: "3.9/5", stock: "44 Left", sold: "50 Sold", pricePerUnit: "Rup.5", units: "30", totalPrice: "150" },
    // Add more chocolate products here
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-page">
      <div className="header">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="logout-button">Log Out</button>
      </div>
      <div className="title-row">
        <button className="back-button">← Back</button>
        <h1 className="product-title">My Products / {category}</h1>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Code</th>
            <th>Photo</th>
            <th>Item Name</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Per Unit</th>
            <th>Units</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <ProductRow key={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPage;
