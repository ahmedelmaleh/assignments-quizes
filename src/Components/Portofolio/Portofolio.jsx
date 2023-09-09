import React from 'react'
import image1 from '../Assets/Img/poert1.png'
import image2 from '../Assets/Img/port2.png'
import image3 from '../Assets/Img/port3.png'
export default function Portofolio() {
  return (
    <>
   <div className="portofolio ">
   <h2 className='fs-1 text-center my-5'>PORTFOLIO COMPONENT</h2>
    <div className="container p-4">
        <div className="row g-5">
            <div className="col-md-4">
                <div className='position-relative box'>
                    <img className='w-100 rounded-3' src={image1} alt="" />
                    <div className="layer rounded-3 position-absolute start-0  top-0 h-100 w-100 d-flex justify-content-center align-items-center ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='position-relative box'>
                    <img className='w-100 rounded-3' src={image2} alt="" />
                    <div className="layer rounded-3 position-absolute start-0  top-0 h-100 w-100 d-flex justify-content-center align-items-center ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='position-relative box'>
                    <img className='w-100 rounded-3' src={image3} alt="" />
                    <div className="layer rounded-3 position-absolute start-0  top-0 h-100 w-100 d-flex justify-content-center align-items-center ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='position-relative box'>
                    <img className='w-100 rounded-3' src={image1} alt="" />
                    <div className="layer rounded-3 position-absolute start-0  top-0 h-100 w-100 d-flex justify-content-center align-items-center ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='position-relative box'>
                    <img className='w-100 rounded-3' src={image2} alt="" />
                    <div className="layer rounded-3 position-absolute start-0  top-0 h-100 w-100 d-flex justify-content-center align-items-center ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='position-relative box'>
                    <img className='w-100 rounded-3' src={image3} alt="" />
                    <div className="layer rounded-3 position-absolute start-0  top-0 h-100 w-100 d-flex justify-content-center align-items-center ">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
    </>
  )
}
