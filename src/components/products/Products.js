import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clientAxios from '../../config/axios'
import Product from './Product'
import Spinner from '../layout/Spinner'

function Products() {
	const [products, setProducts] = useState([])

	const consultAPI = async () => {
		const consultProducts = await clientAxios.get('/products')
		setProducts(consultProducts.data.data)
	}

	useEffect(() => {
		consultAPI()
	}, [products])

	return (
		<>
			<h2>Products</h2>
			<Link to={'/products/new'} className="btn btn-verde nvo-cliente">
				<i className="fas fa-plus-circle"></i>New Product
			</Link>

			<ul className="listado-productos">
				{products.length ? (
					products.map((product) => (
						<Product
							key={product._id}
							id={product._id}
							name={product.name}
							prize={product.prize}
							image={product.image}
						/>
					))
				) : (
					<Spinner />
				)}
			</ul>
		</>
	)
}

export default Products
