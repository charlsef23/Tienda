import React from 'react';
import './CarritoResumen.css';

function CarritoResumen({ productosEnCarrito }) {
  const calcularTotal = () => {
    return productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  };

  const calcularEnvio = () => {
    return productosEnCarrito.reduce((acc, producto) => {
      return producto.envio !== 'Envío Gratis' ? acc + producto.envio : acc;
    }, 0);
  };

  const total = calcularTotal();
  const envio = calcularEnvio();
  const totalFinal = total + envio;

  return (
    <div className="resumen-compra">
      <h2>Resumen de la Compra</h2>
      <p>Total de productos: {productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)}</p>
      <p>Precio total: ${total.toLocaleString()}</p>
      <p>Costo de envío: ${envio.toLocaleString()}</p>
      <p>Total Final: ${totalFinal.toLocaleString()}</p>
    </div>
  );
}

export default CarritoResumen;