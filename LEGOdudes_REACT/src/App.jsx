import '../src/style/lego.css'
import { products } from './assets/legodudes.js'
import { useEffect, useState } from 'react'

import Cart from './components/Cart.jsx'
import Products from './components/Products'
import Header from './components/Header'
import Nav from './components/Nav'
import CategoryTitle from './components/CategoryTitle'
import Layout from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0)
  const [totalSum, setTotalSum] = useState(0)

  console.log("Cart", cart)
  useEffect(()=>{
    const totalQuantity = cart.reduce(
      (sum, item) => sum + item.quantity, 
      0
    );
    setCartQuantity(totalQuantity);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setTotalSum(total)
  },[cart]);

  function Page(){
    return(
      <main>
        <CategoryTitle />
        <Products products={products} setCart={setCart} />
      </main>

  )
  }

  return (
    <Layout setIsOpen={setIsOpen} cartQuantity={cartQuantity} isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}>
    <Routes>
      <Route index element={<Page />} />
      <Route path='/city' element={<CategoryTitle title="City" />} />
      <Route path='/ninjago' element={<CategoryTitle title="Ninjago" />} />
      <Route path='/castle-and-knights' element={<CategoryTitle title="Castles & Knights" />} />
      <Route path='/marine-and-pirates' element={<CategoryTitle title="Marine & Pirates" />} />
      <Route path='/movie-characters' element={<CategoryTitle title="Movie characters" />} />
    </Routes>
    </Layout>
  )
  
}

export default App
