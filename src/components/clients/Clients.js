import React, { useEffect } from 'react'
import clientAxios from '../../config/axios'

function Clients() {
	const consultAPI = async () => {
		const consultClients = await clientAxios.get('/clients')
		console.log(consultClients)
	}

	useEffect(() => {
		consultAPI()
	}, [])
	return <h2>Clients</h2>
}

export default Clients
