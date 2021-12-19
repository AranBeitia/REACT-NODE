import React, { useState } from 'react'
import clientAxios from '../../config/axios'
import Swal from 'sweetalert2'

function EditClient() {
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
			<form>
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

export default EditClient
