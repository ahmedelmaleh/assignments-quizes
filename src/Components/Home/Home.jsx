import React from 'react'
import img from '../Assets/Img/avataaars.svg'
export default function Home() {
  return (
   <>
   <div className=' home d-flex justify-content-center align-items-center  text-center' >
    <div className='p-5 m-5 text-white '>
    <img className='mb-4' src={img} alt=""/>
    <h2 className='fs-1 my-3'>START FRAMEWORK</h2>
    <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
   </div>
   </>
  )
}
