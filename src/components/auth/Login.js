import React, { useState } from 'react'
import Swal from 'sweetalert2'
import clientAxios from '../../config/axios'
import { useNavigate } from 'react-router-dom'

function Login() {
	const [credentials, setCredentials] = useState({})
	let navigate = useNavigate()

	const handleChange = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await clientAxios.post('/start-session', credentials)
			const { token } = response.data
			localStorage.setItem('token', token)
			Swal.fire('Login correct', 'Session started', 'success')
			navigate('/')
		} catch (error) {
			console.log(error)
			Swal.fire({
				icon: 'error',
				title: 'An error occurred',
				text: error.response.data.message,
			})
		}
	}

	return (
		<div className="login">
			<h2>Start session</h2>
			<div className="contenedor-formularios">
				<form onSubmit={handleSubmit}>
					<div className="campo">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							placeholder="Email to start session"
							required
							onChange={handleChange}
						/>
					</div>
					<div className="campo">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password to start session"
							required
							onChange={handleChange}
						/>
					</div>
					<input
						type="submit"
						value="Start session"
						className="btn btn-verde btn-block"
					/>
				</form>
			</div>
		</div>
	)
}

export default Login
