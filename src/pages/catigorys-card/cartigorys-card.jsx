import React from 'react'

export const CartigorysCard = ({name, id ,  img, price, buyurtma}) => {
  return (
    <div className='w-[100%] h-[120vh]   mt-10  flex items-center flex-wrap  '>
    <div className='w-[240px] h-[400px] rounded-lg ml-7 border-2 border-solid shadow-lg shadow-gray-400 flex flex-col items-start'>
   <span className='w-[32px] h-[32px] bg-white ml-[200px] flex items-center justify-center'><svg className='bg-white  rounded-lg   ' width={20} height={19} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z" fill="url(#paint0_linear_4427_183)" fillOpacity="0.2" />
           <defs>
               <linearGradient id="paint0_linear_4427_183" x1={20} y1="9.175" x2="-5.36686e-07" y2="9.175" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#4D5EF6" />
                   <stop offset={1} stopColor="#F64D4D" />
               </linearGradient>
           </defs>
       </svg></span>


       <img className='ml-6' src={img} alt="img" />
       <h1 className='text-2xl ml-3 text-blue-600'>{price}</h1>
       <h1 className='py-1 ml-3'>{name}</h1>
       <h1 className='text-gray-600 py-3 px-4 '>{buyurtma}</h1>
       <div className='flex items-center justify-around '>
           <button className='w-[130px] h-[40px] ml-5 bg-blue-700 mr-7 text-white'>Sotib olish</button>
           <svg className='mr-2' width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="#6C757D" />
           </svg>
           
       </div>
   </div>
   <div className='w-[240px] h-[400px] rounded-lg ml-7 border-2 border-solid shadow-lg shadow-gray-400 flex flex-col items-start'>
   <span className='w-[32px] h-[32px] bg-white ml-[200px] flex items-center justify-center'><svg className='bg-white  rounded-lg   ' width={20} height={19} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z" fill="url(#paint0_linear_4427_183)" fillOpacity="0.2" />
           <defs>
               <linearGradient id="paint0_linear_4427_183" x1={20} y1="9.175" x2="-5.36686e-07" y2="9.175" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#4D5EF6" />
                   <stop offset={1} stopColor="#F64D4D" />
               </linearGradient>
           </defs>
       </svg></span>


       <img className='ml-6' src={img} alt="img" />
       <h1 className='text-2xl ml-3 text-blue-600'>{price}</h1>
       <h1 className='py-1 ml-3'>{name}</h1>
       <h1 className='text-gray-600 py-3 px-4 '>{buyurtma}</h1>
       <div className='flex items-center justify-around '>
           <button className='w-[130px] h-[40px] ml-5 bg-blue-700 mr-7 text-white'>Sotib olish</button>
           <svg className='mr-2' width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C20.25 2.82 19.77 2 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="#6C757D" />
           </svg>
           
       </div>
       
   </div>

</div>
  )
}

