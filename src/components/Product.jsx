import React from 'react'
import Namee from './Namee'
import Image from './Image'
import Pricee from './Pricee'




const Product = ({product}) => {
  return (
    <div className='row'>
      <Namee name={product.name}/>
      {/* <h2>{product.name}</h2> */}

      <Pricee price={product.price} />
      {/* {product.price} */}

      <Image url={product.url} />
      {/* <img src={product.url} /> */}

    </div>
  )
}

export default Product
