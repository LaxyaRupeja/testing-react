import React from 'react'
import { Routes,Route, } from 'react-router-dom'
raf
import Form from './components/Form'
import Post from './components/post'
import Navbar from './components/navbar'
const AllPages = () => {
  return (
    <>
    <Navbar/>
<Routes>
    <Route path='/' element={<h1>HOME</h1>}/>
    <Route path='/add' element={<Form/>}/>
    <Route path='/post' element={<Post/>}/>
</Routes>
    </>
    
  )
}

export default AllPages