import React from 'react'
import { Link } from 'react-router-dom'

function Product({ id, name, prize, image }) {
	const deleteProduct = (id) => {
		console.log(id)
	}
	return (
		<li className="producto">
			<div className="info-producto">
				<p className="nombre">{name}</p>
				<p className="precio">${prize}</p>
				{image ? (
					<img src={`http://127.0.0.1:5000/${image}`} alt={image} />
				) : (
					<p>No image</p>
				)}
			</div>
			<div className="acciones">
				<Link to={`/products/edit/${id}`} className="btn btn-azul">
					<i className="fas fa-pen-alt"></i>
					Edit Product
				</Link>

				<button
					type="button"
					className="btn btn-rojo btn-eliminar"
					onClick={() => deleteProduct(id)}
				>
					<i className="fas fa-times"></i>
					Delete Client
				</button>
			</div>
		</li>
	)
}

export default Product
