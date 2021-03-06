import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'

import Clients from './components/clients/Clients'
import NewClient from './components/clients/NewClient'
import EditClient from './components/clients/EditClient'

import Products from './components/products/Products'
import EditProduct from './components/products/EditProduct'
import NewProduct from './components/products/NewProduct'

import Orders from './components/orders/Orders'

import Login from './components/auth/Login'

function App() {
	return (
		<>
			<Header />
			<div className="grid contenedor contenido-principal">
				<Navigation />
				<main className="caja-contenido col-9">
					<Routes>
						<Route path="/" element={<Clients />} />
						<Route path="/clients/new" element={<NewClient />} />
						<Route path="/clients/edit/:id" element={<EditClient />} />
						<Route path="/products" element={<Products />} />
						<Route path="/products/new" element={<NewProduct />} />
						<Route path="/products/edit/:id" element={<EditProduct />} />
						<Route path="/orders" element={<Orders />} />
						<Route path="/start-session" element={<Login />} />
					</Routes>
				</main>
			</div>
		</>
	)
}

export default App
