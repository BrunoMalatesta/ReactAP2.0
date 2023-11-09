import React from 'react';

function ProductDetail({ name, description, price, sku, quantity }) {
  return (
    <div className="product-detail">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Precio: ${price}usd</p>
      <p>SKU: {sku}</p>
      <p>Cantidad Disponible: {quantity}</p>
    </div>
  );
}

export default ProductDetail;
