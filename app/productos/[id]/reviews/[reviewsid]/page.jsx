

const page = ({params}) => {
  return (
    <>
       <h3 className="text-center py-4">producto {params.id} reviews {params.reviewsid}</h3>
      <h4 h4 className='text-center py-4'>Segmentos Dinamicos</h4>
  </>
 
  )
}

export default page