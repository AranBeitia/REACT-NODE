import React from 'react'
import { Link } from 'react-router-dom'

function Client({ id, name, company, email, telephone }) {
	return (
		<li className="cliente">
			<div className="info-cliente">
				<p className="nombre">{name}</p>
				<p className="empresa">{company}</p>
				<p>{email}</p>
				<p>Tel: {telephone}</p>
			</div>
			<div className="acciones">
				<Link to={`/clients/edit/${id}`} className="btn btn-azul">
					<i className="fas fa-pen-alt"></i>
					Edit
				</Link>
				<button type="button" className="btn btn-rojo btn-eliminar">
					<i className="fas fa-times"></i>
					Delete
				</button>
			</div>
		</li>
	)
}

export default Client
