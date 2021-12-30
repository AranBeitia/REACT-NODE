import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clientAxios from '../../config/axios'
import Swal from 'sweetalert2'

function NewProduct() {
	let navigate = useNavigate()
	const [product, setProduct] = useState({
		name: '',
		price: '',
	})
	const [file, setFile] = useState('')

	const handleProduct = (e) => {
		setProduct({
			...product,
			[e.target.name]: e.target.value,
		})
	}

	const handleFile = (e) => {
		setFile(e.target.files[0])
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('name', product.name)
		formData.append('price', product.price)
		formData.append('image', file)

		try {
			const res = await clientAxios.post('/products', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			if (res.status === 200) {
				Swal.fire('Product added correctly', res.data.message, 'success')
				navigate('/products')
			}
		} catch (error) {
			Swal.fire({
				type: 'error',
				title: 'An error occurred',
				text: 'Try again',
			})
		}
	}

	return (
		<>
			<h2>New Product</h2>
			<form onSubmit={handleSubmit}>
				<legend>Fill all the fields</legend>
				<div className="campo">
					<label>Name:</label>
					<input
						type="text"
						placeholder="Name Product"
						name="name"
						onChange={handleProduct}
					/>
				</div>
				<div className="campo">
					<label>Price:</label>
					<input
						type="number"
						name="price"
						min="0.00"
						step="0.01"
						placeholder="Price"
						onChange={handleProduct}
					/>
				</div>
				<div className="campo">
					<label>Image:</label>
					<input type="file" name="image" onChange={handleFile} />
				</div>
				<div className="send">
					<input type="submit" className="btn btn-azul" value="Add Product" />
				</div>
			</form>
		</>
	)
}

export default NewProduct
