import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";



const ItemDetail = ( {item} ) => {


  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito);


  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 &&  setCantidad(cantidad - 1)
  }
  
  const handleSumar = () => {
      cantidad < item.stock && setCantidad(cantidad + 1)
  }

  


  return (
    <div className="container">
        <div className="producto-detalle"></div>
        <img src={item.imagen} alt={item.titulo} style={{ maxWidth: '100px' }} />
        <div>
            <h3 className="titulo">{item.titulo}</h3>
            <p className="descripcion">{item.descripcion}</p>
            <p className="categoria">Categoría: {item.categoria}</p>
            <p className="precio">${item.precio}</p>
            <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => {agregarAlCarrito(item, cantidad)}}/>
        </div>
    
    </div>
  )
}

export default ItemDetail
