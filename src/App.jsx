import { useState } from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import {BrowserRouter,Routes,Route} from react-router-dom
import Home from './pages/Home'
import Menu from './Pages/Menu'
import Food from './Pages/Food'
import Contact from './Pages/Contact'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Menu' element={<Menu/>}></Route>
      <Route path='/Food' element={<Food/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App