import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddProduct = ({handleAddProduct,editId,products,handleUpdateProduct}) => {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    category: '',
    available: 'available',
    description:''
  })

  useEffect(() => {
    if (editId) {
      const product = products.find(p => p._id === editId)
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
        available: product.available,
        description: product.description
      })
    }
  },[editId])

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (editId) {
      handleUpdateProduct(formData,editId)
    } else {
       handleAddProduct(formData)
   }
    setFormData({
			name: "",
			price: 0,
			category: "",
			available: available,
			description: "",
		})
  }
  const {name,price,category,available,description} = formData
  return (
		<div>
      <h1>{ editId ? 'Update Product' : 'Add Product'}</h1>
			<form
				onSubmit={handleSubmit}
				style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
			>
				<div>
					<input
						type='text'
						name='name'
						value={name}
						onChange={handleChange}
						placeholder='Product Name'
					/>
				</div>
				<div>
					<input
						type='number'
						name='price'
						value={price ? price : ""}
						onChange={handleChange}
						placeholder='Price'
					/>
				</div>
				<div>
					{" "}
					<select name='category' value={category} onChange={handleChange}>
						<option value=''>Select Category</option>
						<option value='shoe'>Shoe</option>
						<option value='shirt'>Shirt</option>
						<option value='pant'>Pant</option>
					</select>
				</div>
				<div>
					{" "}
					<select name='available' value={available} onChange={handleChange}>
						<option value=''>Select Availability</option>
						<option value='shoe'>Available</option>
						<option value='shirt'>Unavailable</option>
						
					</select>
				</div>
				<div>
					<textarea
						name='description'
						value={description}
						onChange={handleChange}
						id=''
						cols='30'
						rows='10'
						placeholder='Description'
					></textarea>
				</div>
				<div>
					<input type='submit' value={editId ? 'Update Product' : 'Add Product'} />
				</div>
				<div>
					<Link to='/'>
						<button>Go to Product Page</button>
					</Link>
				</div>
			</form>
		</div>
	)
};

export default AddProduct;