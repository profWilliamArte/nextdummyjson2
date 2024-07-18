/*
Cuando utilizas generateStaticParams, Next.js generará páginas estáticas para cada una de las rutas definidas en la función. 
Esto significa que estas páginas se generarán durante el build de tu aplicación, lo que mejora el rendimiento y la experiencia de usuario.


*/
import Card from '../components/Card';
const API = 'https://dummyjson.com/products/category/smartphones';
import { Button } from 'primereact/button';
async function getData() {
    const response = await fetch(API);
    const data = await response.json();
    return data.products;
}
export async function generateStaticParams() {
    const data = await getData();
    return data.map((item) => ({ slug: item.id.toString() }));
  }

  export default async function MovilPage() {
    const data = await getData();
  return (
    <>
      <div className="container">
        <h3 className="text-center py-4">Movil ({data.length})</h3>
        <Button label="Check" icon="pi pi-check" />
        <div className="row d-flex align-items-center justify-content-center">
          {data.map((item) => (
            <Card key={item.id} item={item}  columnas="col-sm-6 col-md-4 col-lg-3"/>          
          ))}
        </div>
      </div>
    </>
  );
};



