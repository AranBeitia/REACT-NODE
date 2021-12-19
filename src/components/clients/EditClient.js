import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import clientAxios from '../../config/axios'

import Swal from 'sweetalert2'

function EditClient() {
	const { id } = useParams()
	let navigate = useNavigate()

	const [client, setClient] = useState({
		name: '',
		firstName: '',
		company: '',
		email: '',
		telephone: '',
	})

	const consultAPI = async () => {
		const consultClient = await clientAxios.get(`/clients/${id}`)
		setClient(consultClient.data)
	}

	useEffect(() => {
		consultAPI()
	}, [])

	const handleChange = (e) => {
		setClient({ ...client, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		clientAxios.put(`/clients/${client._id}`, client).then((res) => {
			if (res.data.code === 11000) {
				Swal.fire({
					type: 'error',
					title: 'An error occurred',
					text: 'This client already exists',
				})
			} else {
				Swal.fire('Update client', res.data.message, 'success')
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
			<h2>Edit Client</h2>
			<form onSubmit={handleSubmit}>
				<legend>Fill all the fields</legend>
				<div className="campo">
					<label>Name:</label>
					<input
						type="text"
						placeholder="name Cliente"
						name="name"
						onChange={handleChange}
						value={client.name}
					/>
				</div>

				<div className="campo">
					<label>First name:</label>
					<input
						type="text"
						placeholder="firstName Cliente"
						name="firstName"
						onChange={handleChange}
						value={client.firstName}
					/>
				</div>

				<div className="campo">
					<label>Company:</label>
					<input
						type="text"
						placeholder="company Cliente"
						name="company"
						onChange={handleChange}
						value={client.company}
					/>
				</div>

				<div className="campo">
					<label>Email:</label>
					<input
						type="email"
						placeholder="Email Cliente"
						name="email"
						onChange={handleChange}
						value={client.email}
					/>
				</div>

				<div className="campo">
					<label>Telephone:</label>
					<input
						type="number"
						placeholder="Teléfono Cliente"
						name="telephone"
						onChange={handleChange}
						value={client.telephone}
					/>
				</div>

				<div className="enviar">
					<input
						type="submit"
						className="btn btn-azul"
						value="Save Client"
						disabled={validateClient()}
					/>
				</div>
			</form>
		</>
	)
}

export default EditClient
