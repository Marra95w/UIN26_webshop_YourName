import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout' 
import Characters from './pages/Characters'
import Home from './pages/Home'
import Character from './pages/Character'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Layout>
      <Routes>
        <Route index element={<Home/>}/>
          <Route path='/characters' element={<Characters/>} />
          <Route path='/characters/:id' element={<Character/>}/>
      </Routes>
    </Layout>
    
  )
}

export default App
