import './App.css'
import { MainLayout } from './layout/main-layout'
import { Route, Routes } from 'react-router-dom'
import { Product } from './pages/product'

import { Malumot } from './pages/malumot'


function App() {

  return (
   <div className='w-[100%]  flex flex-col justify-center '>  
    <div className='relative  '>
    <MainLayout/>
    </div>
    <div className=''>
    <Routes >
      <Route  path='/product' element={<Product/>}/>
      <Route path='/malumot/:id' element={<Malumot/>}/>
    </Routes>
    </div>

     
   </div>
  )
}

export default App
