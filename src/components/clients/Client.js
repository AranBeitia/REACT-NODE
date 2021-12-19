import React from 'react'
import { Link } from 'react-router-dom'
import clientAxios from '../../config/axios'
import Swal from 'sweetalert2'

function Client({ id, name, company, email, telephone }) {
	const deleteClient = (clientId) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				clientAxios.delete(`/clients/${clientId}`).then((res) => {
					Swal.fire('Deleted!', res.data.message, 'success')
				})
			}
		})
	}
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
				<button
					type="button"
					onClick={() => deleteClient(id)}
					className="btn btn-rojo btn-eliminar"
				>
					<i className="fas fa-times"></i>
					Delete
				</button>
			</div>
		</li>
	)
}

export default Client
