import React from 'react'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-info">
<div className="container-fluid">
<Link to={"/"}>JRB Inversiones</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    
    <div className="dropdown">
  <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Categorias
  </button>
  <ul className="dropdown-menu">
    <li> <Link to={`/categoria/${"Presencial"}`}>
                  Presencial
                </Link></li>
    <li><Link to={`/categoria/${"Distancia"}`}>
                  Distancia
                </Link></li>
    
  </ul>
</div>
   
    
  </ul>
</div>
</div>
<CartWidget/>
</nav>

</div>
  )
}

export default Navbar