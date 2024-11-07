import React from 'react'

const Product = ({product}) => {
  return (
    <div className='colomn'>
      
      <h2>{product.name}</h2>
      {product.price}
      <img src={product.url} />

    </div>
  )
}

export default Product
