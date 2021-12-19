import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clientAxios from '../../config/axios'
import Client from './Client'

function Clients() {
	const [clients, setClients] = useState([])

	const consultAPI = async () => {
		const consultClients = await clientAxios.get('/clients')
		setClients(consultClients.data)
	}

	useEffect(() => {
		consultAPI()
	}, [])

	return (
		<>
			<h2>Clients</h2>

			<Link to={'/clients/new'} className="btn btn-verde nvo-cliente">
				<i className="fas fa-plus-circle"></i>
				New Client
			</Link>
			<ul className="listado-clientes">
				{clients.map((client) => (
					<Client
						key={client._id}
						id={client._id}
						name={client.name}
						company={client.company}
						email={client.email}
						telephone={client.telephone}
					/>
				))}
			</ul>
		</>
	)
}

export default Clients
