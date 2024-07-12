import React from 'react'
import { useParams } from 'react-router-dom'
import { catigoriesData } from '../../data/catigories';
import { Link } from 'react-router-dom';

export const Malumot = () => {
  const obj = useParams();
  const data = catigoriesData.find((item) => item.id == obj.id)
  return (
    <div className='w-[100%] h-[120vh]   bg-white z-10 text-white  absolute bottom-[-770px] flex items-center justify-center '>
      <div className='w-[50%] h-[50vh  shadow-xl shadow-gray-400'>
      <img className='w-[400px] h-[350px]' src={data.img} alt="" />
      <h1>{data?.name}</h1>
      <h1 className='text-black text-xl ml-5'>{data.price} /dona</h1>
      <h1 className='ml-5 text-gray-400 text-lg'>{data.name}</h1>
      <p className='py-2 ml-5 text-black'>{data.buyurtma}</p>
      <div className=' w-[400px]flex items-center justify-around py-5 ml-5 '>
      <button className='w-[130px] h-[40px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mr-7 text-white '>Sotib olish</button>
      <button className='w-[130px] h-[40px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white '>Bolib tolash</button>
      <Link to={"/"}><button className='w-[130px] h-[40px] bg-gradient-to-r from-red-500 ml-5 via-purple-500 to-red-500  text-white '>Chiqish</button></Link>
                    
                </div>
      </div>
      </div>
  )
}
