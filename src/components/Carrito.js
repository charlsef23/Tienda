import React, { useState, useEffect } from 'react';
import CarritoProducto from './CarritoProducto';
import CarritoResumen from './CarritoResumen';
import './Carrito.css';

function Carrito() {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  useEffect(() => {
    const productos = JSON.parse(localStorage.getItem('productos-en-carrito')) || [];
    setProductosEnCarrito(productos);
  }, []);

  const actualizarCarrito = (nuevoCarrito) => {
    setProductosEnCarrito(nuevoCarrito);
    localStorage.setItem('productos-en-carrito', JSON.stringify(nuevoCarrito));
  };

  const eliminarDelCarrito = (id) => {
    const nuevosProductos = productosEnCarrito.filter(producto => producto.id !== id);
    actualizarCarrito(nuevosProductos);
  };

  const sumarCantidad = (id) => {
    const nuevosProductos = productosEnCarrito.map(producto => {
      if (producto.id === id) {
        return { ...producto, cantidad: producto.cantidad + 1 };
      }
      return producto;
    });
    actualizarCarrito(nuevosProductos);
  };

  const restarCantidad = (id) => {
    const nuevosProductos = productosEnCarrito.map(producto => {
      if (producto.id === id && producto.cantidad > 1) {
        return { ...producto, cantidad: producto.cantidad - 1 };
      }
      return producto;
    });
    actualizarCarrito(nuevosProductos);
  };

  return (
    <div className="carrito-container">
      {productosEnCarrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {productosEnCarrito.map(producto => (
            <CarritoProducto
              key={producto.id}
              producto={producto}
              sumarCantidad={sumarCantidad}
              restarCantidad={restarCantidad}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          ))}
          <CarritoResumen productosEnCarrito={productosEnCarrito} />
        </div>
      )}
    </div>
  );
}

export default Carrito;