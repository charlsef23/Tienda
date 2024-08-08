import React from 'react';
import './CarritoProducto.css';

const CarritoProducto = ({ producto, eliminarProducto, modificarCantidad }) => {
  const tipoEnvio = producto.envio !== 'Envío Gratis' ? `$ ${producto.envio.toLocaleString()}` : 'Envío Gratis';
  const tipoEstilo = producto.envio !== 'Envío Gratis' ? '' : 'precio-envio';

  const sumarCantidad = () => modificarCantidad(producto.id, producto.cantidad + 1);
  const restarCantidad = () => {
    if (producto.cantidad > 1) {
      modificarCantidad(producto.id, producto.cantidad - 1);
    }
  };

  return (
    <div className="carrito-producto">
      <div className="carrito-producto-proveedor">
        <span>{producto.proveedor}</span>
      </div>
      <div className="carrito-item">
        <div className="container-producto-img">
          <img src={producto.imagen[0]} alt="" className="carrito-producto-img" />
        </div>
        <div className="carrito-producto-info">
          <span className="carrito-producto-titulo">{producto.titulo}</span>
          <div className="carrito-producto-opciones">
            <button className="carrito-producto-eliminar" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </div>
        </div>
        <div className="container-selector-cantidad">
          <div className="selector">
            <button className="restar-cantidad" onClick={restarCantidad}> <i className="bi bi-dash-lg"></i> </button>
            <span className="cantidad">{producto.cantidad}</span>
            <button className="sumar-cantidad" onClick={sumarCantidad}> <i className="bi bi-plus-lg"></i> </button>
          </div>
        </div>
        <div className="carrito-producto-precio">
          <p>$ {(producto.precio * producto.cantidad).toLocaleString()}</p>
        </div>
      </div>
      <div className="carrito-producto-precio-envio">
        <span>Envio</span>
        <span className={tipoEstilo}>{tipoEnvio}</span>
      </div>
      <div className="carrito-producto-mas-info">
        <span>Aprovechá tu envío gratis agregando más. <a href="#">Ver más producto del vendedor</a></span>
      </div>
    </div>
  );
};

export default CarritoProducto;