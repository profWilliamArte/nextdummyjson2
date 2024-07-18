import React from 'react'

import Carrusel from '../components/Carrusel'
const layout = ( { children }) => {
  return (

    <> 
      <Carrusel/>
        {children}
      <div className="text-center py-5 bg-dark text-white-50"> un carrusel que sale en todas las paginas de categorias</div> 
    </>
  )
}

export default layout