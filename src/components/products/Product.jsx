import { Link } from "react-router-dom";

const Product = ({ product,handleDelete,setEditId }) => {
  const {name,price,category,description,available,_id} = product
  return (
		<div style={{ border: "1px solid #ccc", padding: "1rem" }}>
			<p>
				<strong>{name}</strong>
			</p>
			<p>{price}</p>
			<p>{category}</p>
			<p>{description}</p>
			<p>{available ? "available" : "not available"}</p>
			<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
				<div>
					<button onClick={() => handleDelete(_id)}>Delete Product</button>
				</div>
				<div>
					<Link to='add'>
						<button onClick={() => setEditId(_id)}>Update Product</button>
					</Link>
				</div>
			</div>
		</div>
	)
};

export default Product;