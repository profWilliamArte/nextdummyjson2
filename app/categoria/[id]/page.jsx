'use client';
import { useEffect, useState } from "react";
const API='https://dummyjson.com/products/category/';

import Card from "@/app/components/Card";

const Categorias = ({params}) => {
  const [datos, setDatos] = useState(null);
  const [loading, setLoading] = useState(true);
  const URI=API+params.id;
  const fetchDatos= async () => {
    const response = await fetch(URI);
    const data = await response.json();
    setDatos(data.products);
    setLoading(false);
};
useEffect(() => {
  fetchDatos();
}, [params.id]);

if (loading) {
  return (
    <div className="container">
      <h4 className="text-center py-4">Cargando...</h4>
    </div>
  );
}
if (datos.length === 0) {
  return (
    <div className="container">
      <h3 className="text-center py-4">No Existe la categoria {params.id} </h3>

    </div>
  );
}
  return (
    <div className="container">
      <h3 className="text-center py-4">Productos de la categoria {params.id} </h3>
      <div className="row d-flex align-items-center justify-content-center">
        {datos && datos.map((item) => (
          <Card key={item.id} item={item} columnas="col-sm-6 col-md-4 col-lg-3"/>              
        ))}
    </div>
  </div>
  )
}

export default Categorias