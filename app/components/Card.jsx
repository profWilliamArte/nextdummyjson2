import Link from "next/link"


const Card = ({ item, columnas }) => {
  
    return (
        <div className={`mb-4 ${columnas}`} >
            <div className="card h-100 shadow"  data-bs-theme="dark">
                <div className="card-header p-0">
                    <img src={item.thumbnail} alt={item.title} className="img-fluid" />
                </div>
                <div className="card-body text-center">
                    <h5>{item.title}</h5>
                    <p className="text-success">Marca: {item.brand}</p>
                    <p className="text-success">Stock: {item.stock}</p>
                    <h5 className="text-danger">Precio: {item.price.toFixed(2).toLocaleString()}$</h5>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-outline-info btn-sm mx-1"  data-bs-toggle="modal" data-bs-target={`#${item.id}`}  >Modal</button>
                    <Link href={`/detalle/${item.id}`}>
                        <button className="btn btn-outline-danger btn-sm mx-1"    >Detalle</button>
                    </Link>
                </div>
            </div>




        <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-4">
                        <img src={item.thumbnail} alt={item.title} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <p className="text-success"><b>Marca: </b>{item.brand}</p>
                      
                        <h5 className="text-success"><b>Stock:</b>{item.stock}</h5>
                        <p>{item.description}</p>
                        <h3 className="text-danger"><b>Precio: </b>{item.price.toFixed(2).toLocaleString()}$</h3>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
 
            </div>
            </div>
        </div>
        </div>


        </div>
    )
}

export default Card