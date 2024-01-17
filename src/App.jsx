import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FormikForm from './pages/FormikForm'
import Navigation from './pages/Navigation'

function App() {

  return (
    <>
    <Navigation />
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<FormikForm />} />
      </Routes>
    </>
  )
}

export default App
