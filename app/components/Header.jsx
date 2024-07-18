
import Image from 'next/image';
import logo from '../img/logo2.jpg';
import Filtrocategorias from './Filtrocategorias';
import Entradabusqueda from './Entradabusqueda';

const Header = () => {
  return (
            <nav className="navbar navbar-expand-lg bg-menu py-2 sticky-top shadow" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><Image src={logo} alt=""  width={250}  height={300} className="img-fluid img-thumbnail" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/inicio">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/movil">Movil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/laptop">Laptop</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/tienda">Tienda</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/productos">Productos</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categoria
                </a>
                <ul className="dropdown-menu">
                    <Filtrocategorias/>
                    
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link "  href="/habilidades">Habilidades</a>
                </li>
            </ul>
            <Entradabusqueda/>
            </div>
        </div>
        </nav>

  )
}

export default Header