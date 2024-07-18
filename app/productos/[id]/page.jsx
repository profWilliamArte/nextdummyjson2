import { notFound } from "next/navigation"

const page = ({params}) => {
    
    if(parseInt(params.id) > 100){
        notFound()
    }
  return (
    <>
        <h3 className="text-center py-4">Pagina detalle de producto {params.id}</h3>
        <h4 className="text-center py-4">Rutas Dinamicas</h4>
    </>
   
  )
}

export default page