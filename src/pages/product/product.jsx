import React from 'react'
import { Link } from 'react-router-dom'

export const Product = () => {
  return (
    <div className='w-[300px] h-[500px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400  mt-2 absolute top-7 right-0 transition-all duration- '>
        <Link className='text-white text-lg ml-2 py-2' to={"/"}>ortga</Link>
        <h1 className='text-2xl px-3  text-white mt-10  hover:text-black'>Apple Notebooklari</h1>
        <h1 className='text-2xl px-3 text-white py-10 hover:text-black'>Lenova Notebooklari</h1>
        <h1 className='text-2xl px-3  text-white hover:text-black'>MSI Notebooklari</h1>
        <h1 className='text-2xl px-3 text-white py-10 hover:text-black'>Acer Notebooklari</h1>
        <h1 className='text-2xl px-3  text-white hover:text-black'>Samsung Notebooklari</h1>
    </div>
  )
}
