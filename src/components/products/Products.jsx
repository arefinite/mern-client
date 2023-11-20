import { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({products,handleDelete,setEditId}) => {

  return (
    <div style={{display:'flex',gap:'1rem'}}>
      {
        products.length > 0 ? (
          products.map(product => <Product key={product._id} setEditId={setEditId} product={product} handleDelete={handleDelete} />)
        ):<p>No product found</p>
      }
    </div>
  );
};

export default Products;