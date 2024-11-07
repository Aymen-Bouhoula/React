import React from 'react'
import Product from '../Data/Product'


const Description = ({Product}) => {
  return (
    <div>
      {Product.description}
    </div>
  )
}

export default Description
