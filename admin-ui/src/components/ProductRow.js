import React from "react";
import "./ProductPage.css"; // Assuming you have a separate CSS file for styles

function ProductRow({ product }) {
  return (
    <tr className="product-row">
      <td>{product.category}</td>
      <td>{product.code}</td>
      <td>
        <img src={product.image} alt={product.name} className="product-image" />
      </td>
      <td>{product.name}</td>
      <td>{product.rating}</td>
      <td>
        {product.stock} <br /> {product.sold}
      </td>
      <td>{product.pricePerUnit}</td>
      <td>{product.units}</td>
      <td>{product.totalPrice}</td>
      <td className="button-column">
        <button className="edit-btn">Edit</button>
        <button className="remove-btn">Remove</button>
      </td>
    </tr>
  );
}

export default ProductRow;
