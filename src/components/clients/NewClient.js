import React, { useState } from 'react'
import clientAxios from '../../config/axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function NewClient() {
	let navigate = useNavigate()
	const [client, setClient] = useState({
		name: '',
		firstName: '',
		company: '',
		email: '',
		telephone: '',
	})

	const handleChange = (e) => {
		setClient({ ...client, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		clientAxios.post('/clients', client).then((res) => {
			if (res.data.code === 11000) {
				Swal.fire({
					type: 'error',
					title: 'An error occurred',
					text: 'This client already exists',
				})
			} else {
				Swal.fire('New client', res.data.message, 'success')
			}
			navigate('/')
		})
	}

	const validateClient = () => {
		const { name, firstName, company, email, telephone } = client

		let valid =
			!name.length ||
			!firstName.length ||
			!company.length ||
			!email.length ||
			!telephone.length
		return valid
	}

	return (
		<>
			<h2>New Client</h2>
			<form onSubmit={handleSubmit}>
				<legend>Fill all the fields</legend>
				<div className="campo">
					<label>Name:</label>
					<input
						type="text"
						placeholder="name Cliente"
						name="name"
						onChange={handleChange}
					/>
				</div>

				<div className="campo">
					<label>First name:</label>
					<input
						type="text"
						placeholder="firstName Cliente"
						name="firstName"
						onChange={handleChange}
					/>
				</div>

				<div className="campo">
					<label>Company:</label>
					<input
						type="text"
						placeholder="company Cliente"
						name="company"
						onChange={handleChange}
					/>
				</div>

				<div className="campo">
					<label>Email:</label>
					<input
						type="email"
						placeholder="Email Cliente"
						name="email"
						onChange={handleChange}
					/>
				</div>

				<div className="campo">
					<label>Telephone:</label>
					<input
						type="number"
						placeholder="Teléfono Cliente"
						name="telephone"
						onChange={handleChange}
					/>
				</div>

				<div className="enviar">
					<input
						type="submit"
						className="btn btn-azul"
						value="Add Client"
						disabled={validateClient()}
					/>
				</div>
			</form>
		</>
	)
}

export default NewClient
