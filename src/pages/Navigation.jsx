import React from 'react'
import FormikForm from './FormikForm'
import { Link } from 'react-router-dom'
import Home from './Home'
import '../index.css'


const Navigation = () => {
  return (
    <>
        <div className='dis'>
            <Link to='/' element={<Home />} >Home</Link>
            <Link to='/form' element={<FormikForm/>} >Form</Link>
        </div>
        
    </>
  )
}

export default Navigation