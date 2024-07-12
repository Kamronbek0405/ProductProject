import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import HeroImg from './hero-img/heroImg.png'
import HeroImg1 from './hero-img/heroImg1.png'

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 
  return (
    
      
      <Slider className=' w-[91%] ml-16 ' {...settings}>
        <div className=' rounded-lg  '>
          <div className='flex items-center justify-center mt-10'>
            <img className='rounded-2xl' src={HeroImg} alt="" />
          </div>
        </div>
        <div className='flex items-center justify-center mt-20 px-5  '>
          <img className='w-[100%] flex items-center justify-center' src={HeroImg1} alt="" />
        </div>
      </Slider>

     
    
    )
  }

