"use client";

import { useSearchParams } from 'next/navigation';
import Card from "../components/Card";
import { useEffect, useState } from 'react';

const API = 'https://dummyjson.com/products/search?q=';
const Buscar = () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const busqueda = searchParams.get('q');

  const URI = API + busqueda;
  const fetchDatos = async () => {
    const response = await fetch(URI);
    const data = await response.json();
    setDatos(data.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchDatos();
  }, [busqueda]);

  if (loading) {
    return (
      <div className="container">
        <h3 className="text-center py-4">Buscar por {busqueda} </h3>
        <h4 className="text-center py-4">Cargando...</h4>
      </div>
    );
  }

  if (datos.length === 0) {
    return (
      <div className="container">
        <h3 className="text-center py-4">Buscar por {busqueda} </h3>
        <h4 className="text-center py-4">No hay resultados </h4>
      </div>
    );
  }

  return (
    <div className="container">
      <h3 className="text-center py-4">Buscar por {busqueda} </h3>
      <div className="row d-flex align-items-center justify-content-center">
        {datos && datos.map((item) => (
          <Card key={item.id} item={item} columnas="col-sm-6 col-md-4 col-lg-3"/>              
        ))}
      </div>
    </div>
  );
};

export default Buscar;