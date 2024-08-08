import React, { useState, useEffect } from 'react';
import CarritoProducto from './CarritoProducto';
import CarritoResumen from './CarritoResumen';
import './Carrito.css';

const Carrito = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('productos-en-carrito')) || [];
    setProductosEnCarrito(storedProducts);
  }, []);

  const actualizarProductosEnCarrito = (productos) => {
    setProductosEnCarrito(productos);
    localStorage.setItem('productos-en-carrito', JSON.stringify(productos));
  };

  const eliminarProducto = (id) => {
    const productosActualizados = productosEnCarrito.filter(producto => producto.id !== id);
    actualizarProductosEnCarrito(productosActualizados);
  };

  const modificarCantidad = (id, cantidad) => {
    const productosActualizados = productosEnCarrito.map(producto =>
      producto.id === id ? { ...producto, cantidad } : producto
    );
    actualizarProductosEnCarrito(productosActualizados);
  };

  return (
    <div>
      {productosEnCarrito.length > 0 ? (
        <div>
          <div id="carrito-productos">
            {productosEnCarrito.map(producto => (
              <CarritoProducto
                key={producto.id}
                producto={producto}
                eliminarProducto={eliminarProducto}
                modificarCantidad={modificarCantidad}
              />
            ))}
          </div>
          <CarritoResumen productos={productosEnCarrito} />
        </div>
      ) : (
        <div id="carrito-vacio">
          <p>Tu carrito está vacío</p>
        </div>
      )}
    </div>
  );
};

export default Carrito;