import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto}) => {
  return (
    <div className='producto'>
      <img src={producto.imagen} alt={producto.titulo}/>
    <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>Categoria: {producto.categoria}</p>
        <Link className='ver-mas' to={`/Item/${producto.id}`}>Ver más</Link>
    </div>
    </div>
  )
}

export default Item
