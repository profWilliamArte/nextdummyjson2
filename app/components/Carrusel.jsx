
import Image from "next/image"
import b1 from "../img/banner1.jpg"
import b2 from "../img/banner2.jpg"
import b3 from "../img/banner3.jpg"

const Carrusel = () => {
  return (
    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image src={b1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
      <Image src={b2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
      <Image src={b3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carrusel