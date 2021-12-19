import * as React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
	<aside className="sidebar col-3">
		<h2>Administración</h2>

		<nav className="navegacion">
			<Link to={'/'} className="clientes">
				Clients
			</Link>
			<Link to={'/products'} className="productos">
				Products
			</Link>
			<Link to={'/orders'} className="pedidos">
				Orders
			</Link>
		</nav>
	</aside>
)

export default Navigation
