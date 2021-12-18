import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import Clients from './components/clients/Clients'
import Products from './components/products/Products'
import Orders from './components/orders/Orders'

function App() {
	return (
		<>
			<Header />
			<div className="grid contenedor contenido-principal">
				<Navigation />
				<main className="caja-contenido col-9">
					<Routes>
						<Route path="/" element={<Clients />} />
						<Route path="/products" element={<Products />} />
						<Route path="/orders" element={<Orders />} />
					</Routes>
				</main>
			</div>
		</>
	)
}

export default App
