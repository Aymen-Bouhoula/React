import React from 'react'
import Product from './components/Product'


import Products from './Data/Product'


const App = () => {
  return (
    <div>
    


    {Products.map(item => <Product product={item} />
 )}
    </div>
  )
}

export default App
