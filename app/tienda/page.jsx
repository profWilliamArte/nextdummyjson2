'use client';
import  { useEffect, useState } from 'react'
import Card from '../components/Card';
const API='https://dummyjson.com/products?limit=10&skip=';
const Tienda = () => {
  const [datos, setDatos] = useState(null);
  const [skip, setSkip] = useState(0);
  const [total , setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const URI=API+skip
  const fetchDatos = async () => {
    const response = await fetch(URI);
    const data = await response.json();
    setDatos(data.products);
    setTotal(data.total)
    setLoading(false);
  };
  useEffect(() => {
    fetchDatos();
  }, [skip]);

  if (loading) {
    return (
      <div className="container">

        <h4 className="text-center py-4">Cargando...</h4>
      </div>
    );
  }

  return (

    <div className="container">
    <h3 className="text-center py-4">Tienda </h3>



    <div className="card mb-2 p-1" data-bs-theme="dark">
      <div className="d-flex justify-content-between align-content-center px-2">
          <p className="lead m-0 fw-bold text-sombra ">Pagina {Math.floor(skip / 10) + 1} de {Math.ceil(total / 10)}</p>
          <nav className="">
            <ul className="pagination m-0">
              <li className="page-item">
                <a className="page-link" href="#" onClick={() => {if (skip >= 10) {setSkip(skip - 10);}}}>&lt;&lt;</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">{Math.floor(skip / 10) + 1}</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" onClick={() => {if (skip + 10 < total) {setSkip(skip + 10);}}}>&gt;&gt;</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    <div className="row d-flex align-items-center justify-content-center">
      {datos.map((item) => (
        <Card key={item.id} item={item} columnas="col-sm-6 col-md-4 col-lg-3"/>              
      ))}
    </div>
  </div>
  )
}

export default Tienda