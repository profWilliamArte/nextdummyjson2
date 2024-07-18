

const page = ({params}) => {
    
  return (
    
    <>
        <h3 className="text-center py-4">Pagina de Documentos</h3>
        <h4 className="text-center py-4">Segmento Anidados Dinamicos</h4>
        <div className="text-center">

    
            {params &&  params.slug?.map((item) => (
                <h5 key={item}>{item}</h5>              
            ))}
        </div>
    </>

  )
}

export default page