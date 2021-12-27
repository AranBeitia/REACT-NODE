import React from 'react'
import { Link } from 'react-router-dom'
import clientAxios from '../../config/axios'
import Swal from 'sweetalert2'

function Product({ id, name, prize, image }) {
	const deleteProduct = (id) => {
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
				clientAxios.delete(`/products/${id}`).then((res) => {
					if (res.status === 200) {
						Swal.fire('Deleted!', res.data.message, 'success')
					}
				})
			}
		})
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
