import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Categories from './components/Categories'
import About from './components/About'
import Layout from './components/Layout'
import Category from './components/category'
import CategoryLayout from './components/CategoryLayout'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  return (
    <Layout>
      <Routes>
        {/* Forsiden i elementet */}
        <Route index element={<Home />} />
        <Route path='categories' element={<CategoryLayout />}>
        <Route index element={<Categories />} />
          <Route path=':slug' element={<Category />}/>
        </Route>
        <Route path='about' element={<About />} />
      </Routes>
    </Layout>
  )
}

//Oultlet brukes for å lage nested routes, altså ruter inni ruter.
//Slug er en del av URL-en som identifiserer en bestemt side, for eksempel i en nettbutikk kan det være produktnavnet eller produktkategorien. 
// I dette tilfellet er det brukt for å identifisere en spesifikk produktkategori.

export default App
