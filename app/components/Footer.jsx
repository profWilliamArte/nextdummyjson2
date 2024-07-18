import Link from "next/link"


const Footer = () => {
  return (
<div className="bg-menu">
<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Para Hogar</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="/categoria/kitchen-accessories" className="nav-link p-0 text-body-light">Kitchen accessories</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/fragrances" className="nav-link p-0 text-body-light">Fragrances</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/furniture" className="nav-link p-0 text-body-light">Furniture</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/groceries" className="nav-link p-0 text-body-light">Groceries</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/home-decoration" className="nav-link p-0 text-body-light">Home Decoration</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Para Hombres</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="/categoria/laptops" className="nav-link p-0 text-body-light">Laptops</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/mens-shirts" className="nav-link p-0 text-body-light">Mens shirts</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/mens-watches" className="nav-link p-0 text-body-light">Mens watches</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/mens-shoes" className="nav-link p-0 text-body-light">Mens shoes</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/motorcycle" className="nav-link p-0 text-body-light">Motorcycle</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Para Mujeres</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="/categoria/womens-bags" className="nav-link p-0 text-body-light">Womens bags</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/womens-dresses" className="nav-link p-0 text-body-light">Womens dresses</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/womens-jewellery" className="nav-link p-0 text-body-light">Womens jewellery</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/womens-shoes" className="nav-link p-0 text-body-light">Womens shoes</Link></li>
          <li className="nav-item mb-2"><Link href="/categoria/womens-watches" className="nav-link p-0 text-body-light">Womens watches</Link></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Suscríbete a nuestro boletín</h5>
          <p>Resumen mensual de nuestras novedades y novedades.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Dirección de correo electrónico</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Suscribir</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024, Ar Sistema c.a. Curso de Next 14 <span className="small">(FullStack)</span></p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
</div>

  )
}

export default Footer