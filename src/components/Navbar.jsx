import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>Sneakers Shop</h1></Link>
        <ul className='menu'>
            <li><Link to="/" className='menu-link'>Inicio</Link></li>
            <li><Link to="/productos" className='menu-link'>Productos</Link></li>
            <li><Link to="/productos/adidas" className='menu-link'>Adidas</Link></li>
            <li><Link to="/productos/nike" className='menu-link'>Nike</Link></li>
            <li><Link to="/productos/puma" className='menu-link'>Puma</Link></li>
            <li><Link to="/productos/fila" className='menu-link'>Fila</Link></li>
            <li><Link to="/nosotros" className='menu-link'>Nosotros</Link></li>
            <li><Link to="/contacto" className='menu-link'>Contacto</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default Navbar
