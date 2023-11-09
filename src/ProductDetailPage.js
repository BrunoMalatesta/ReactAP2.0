import React from 'react';
import ProductDetail from './ProductDetail';

function ProductDetailPage() {
  const product = {
    name: 'RX 5600',
    description: 'Tarjeta grafica 8gb',
    price: 200,
    sku: 'SKU12345',
    quantity: 150,
  };

  return (
    <div className="product-detail-page">
      <h1>Detalle del Producto</h1>
      <ProductDetail {...product} />
    </div>
  );
}

export default ProductDetailPage;
