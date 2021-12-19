import React from 'react'

function Client({ name, company, email, telephone }) {
	return (
		<li className="cliente">
			<div className="info-cliente">
				<p className="nombre">{name}</p>
				<p className="empresa">{company}</p>
				<p>{email}</p>
				<p>Tel: {telephone}</p>
			</div>
			<div className="acciones">
				{/* <a href="" className="btn btn-azul">
					<i className="fas fa-pen-alt"></i>
					Editar Cliente
				</a> */}
				<button type="button" className="btn btn-rojo btn-eliminar">
					<i className="fas fa-times"></i>
					Eliminar Cliente
				</button>
			</div>
		</li>
	)
}

export default Client
