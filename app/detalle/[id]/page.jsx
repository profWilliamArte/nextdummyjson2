'use client';
const API='https://dummyjson.com/products/';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Card from "@/app/components/Card";








const DetlleProducto = ({params}) => {
    const router = useRouter();
    const [datos, setDatos] = useState(null);
    const [products, setProducts] = useState([]);
    const [datos2, setDatos2] = useState(null);
    const URI=API+params.id;
    
    const fetchDatos= async () => {
        const response = await fetch(URI);
        const data = await response.json();
        setDatos(data);
     

        let URI2=API+'category/'+data.category+'?limit=6';
        console.log('Fetching datos2...');
        console.log(API+'category/'+data.category)
        const response2 = await fetch(URI2);
        const data2 = await response2.json();
        setDatos2(data2.products);
        console.log(data2)

    };
  
    useEffect(() => {
      fetchDatos();
     
    }, [params.id]);

    if (!datos) {
      return <div>Loading...</div>;
    } 
    
   

  return (
    <div className="container">
      <h3 className="text-center pt-5 pb-3">{datos.title} </h3>
      <hr/>
      <div className="row">
        <div className="col-md-4">
          <img src={datos.thumbnail} alt={datos.title} className="img-fluid img-thumbnail"  data-bs-theme="dark"/>
        </div>
        <div className="col-md-8">
          <p>{datos.description}</p>
          <p>Price: ${datos.price}</p>
          <p>Brand: {datos.brand}</p>
          <p>Category: {datos.category}</p>
          <p>Stock: {datos.stock}</p>
          <p>Ratings: {datos.rating}</p>
   
          
        </div>
      </div>
      <hr/>
      <h4 className="text-center py-4">{datos.category.toUpperCase()}</h4>
      
      
      <div className="row d-flex align-items-center justify-content-center">
      
        {datos2 && datos2.map((item) => (
          <Card key={item.id} item={item} columnas="col-sm-6 col-md-4 col-lg-3 col-xl-2"/>              
        ))}

  
      </div>
      <hr/>

      <div className="text-center py-4">
        <button className="btn btn-primary" onClick={() => router.back()}>
            Regresar
        </button>
      </div>




    </div>
  )
}

export default DetlleProducto