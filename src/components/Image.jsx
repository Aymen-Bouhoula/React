import React from 'react'
import Product from '../Data/Product'
const Image = ({Product}) => {
  return (
    <div>
      <img src={Product.url}/>
    </div>
  )
}

export default Image
