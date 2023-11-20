import Products from "./components/products/Products"
import AddProduct from "./components/products/AddProduct"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const baseURL = "https://mern-api-five.vercel.app"
const App = () => {
	const [products, setProducts] = useState([])
	const [editId, setEditId] = useState(null)
	const getProducts = async () => {
		const data = await axios.get(`${baseURL}/products`)
		setProducts(data.data)
	}
	useEffect(() => {
		getProducts()
	}, [])

	const handleAddProduct = async product => {
		try {
			await axios.post(`${baseURL}/product`, product)
			setProducts(prev => [...prev, product])
			toast.success("Product Added")
		} catch (err) {
			console.log(err.message)
		}
	}

	const handleDelete = async id => {
		try {
			await axios.delete(`${baseURL}/product/${id}`)
			setProducts(prev => prev.filter(product => product._id !== id))
			toast.error("Product Deleted")
		} catch (err) {
			console.log(err.message)
		}
	}

	const handleUpdateProduct = async (product, editId) => {
		try {
			await axios.patch(`${baseURL}/product/${editId}`, product)
			const updatedProduct = products.map(p =>
				p._id === editId ? { _id: editId, ...product } : p
			)
			setProducts(updatedProduct)
			toast.success("Product Updated")
		} catch (err) {
			console.log(err.message)
		}
	}

	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <RootLayout />,
			children: [
				{
					index: true,
					element: (
						<Products
							products={products}
							handleDelete={handleDelete}
							setEditId={setEditId}
						/>
					),
				},
				{
					path: "/add",
					element: (
						<AddProduct
							handleUpdateProduct={handleUpdateProduct}
							products={products}
							handleAddProduct={handleAddProduct}
							editId={editId}
						/>
					),
				},
			],
		},
	])
	return (
		<>
			<RouterProvider router={appRouter} />
			<ToastContainer />
		</>
	)
}

export default App
