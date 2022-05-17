import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Master = () => {
  return (
    <div>
        <Navbar/>

        <div id="content">
            <Outlet/>
        </div>

        <Footer/>
    </div>
  )
}

export default Master