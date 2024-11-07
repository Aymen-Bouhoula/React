import React from 'react'
import Product from './components/Product'
import Players from './Data/Players'


import Products from './Data/Product'
import Player from './components/Player'


const App = () => {
  return (
    <div>
    

    {Players.map( item => <Player data= {item} />

    // {Products.map(item => <Product product={item} />
 )}

    </div>
  )
}

export default App
