import React from 'react';
import './CarritoProducto.css';

function CarritoProducto({ producto, sumarCantidad, restarCantidad, eliminarDelCarrito }) {
  return (
    <div className="carrito-producto">
      <div className="carrito-producto-info">
        <h3>{producto.titulo}</h3>
        <p>Precio: ${producto.precio.toLocaleString()}</p>
        <p>Cantidad: {producto.cantidad}</p>
        <div className="carrito-producto-controles">
          <button onClick={() => restarCantidad(producto.id)}>-</button>
          <button onClick={() => sumarCantidad(producto.id)}>+</button>
          <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default CarritoProducto;