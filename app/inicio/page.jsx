"use client"

import { useEffect, useState } from "react";
import Card from "../components/Card";

const API='https://dummyjson.com/products?limit=200';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const page = () => {
    const [datos, setDatos] = useState(null);
 
  const fetchDatos = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setDatos(data.products);
    
  };
  useEffect(() => {
    fetchDatos();
  }, []); 
    








    return (
        <div className="container">
           <h3 className="text-center py-4">Inicio</h3>
           <div className="">
            <DataTable value={datos} paginator   rows={5} rowsPerPageOptions={[5, 10, 25, 50]} >
                <Column field="id" header="ID"></Column>
                <Column field="thumbnail" header="Foto" body={(rowData) => <img src={rowData.thumbnail} alt={rowData.title} width="50" />} />
                <Column field="title" header="Nombre"></Column>
                <Column field="category" header="Categoria"></Column>
                <Column field="stock" header="Cantidad"></Column>
                <Column field="price" header="Precio"></Column>
                <Column header="Total" body={(rowData) => (rowData.price * rowData.stock).toFixed(2)} />
            </DataTable>
            </div>
        </div>
    );
};

export default page;