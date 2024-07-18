
"use client"

import { useState } from "react"
import { useRouter, usePathname } from 'next/navigation';
const Entradabusqueda = () => {
    const [busqueda, setBusqueda] = useState('')
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("busqueda" + busqueda)
        router.push(`/buscar?q=${busqueda}`);
    }
  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}   >
        <input onChange={(e) => setBusqueda(e.target.value)} value={busqueda} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  )
}

export default Entradabusqueda