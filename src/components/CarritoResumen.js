import React from 'react';
import './CarritoResumen.css';

const CarritoResumen = ({ productos }) => {
  const totalProductos = productos.reduce((acc, producto) => acc + producto.cantidad, 0);
  const totalCompra = productos.reduce((acc, producto) => acc + (producto.cantidad * producto.precio), 0);
  const precioTotalEnvio = productos
    .filter(producto => producto.envio !== 'Envío Gratis')
    .reduce((acc, producto) => acc + producto.envio, 0);
  const precioFinal = totalCompra + precioTotalEnvio;

  return (
    <div id="carrito-resumen">
      <div className="num-total">Total productos: {totalProductos}</div>
      <div className="precio-productos-compra">Total compra: $ {totalCompra.toLocaleString()}</div>
      <div className="carrito-resumen-precio-envio">Total envío: $ {precioTotalEnvio.toLocaleString()}</div>
      <div className="precio-final">Precio final: $ {precioFinal.toLocaleString()}</div>
    </div>
  );
};

export default CarritoResumen;