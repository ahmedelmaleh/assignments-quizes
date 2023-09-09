import React from 'react'

export default function Footer() {
  return (
   <>
   <div className='footer-up text-white '>
   <div className="container ">
    <div className="row py-5 ">
        <div className="col-md-4 p-5">
            <div className='text-center '>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
        </div>
        <div className="col-md-4 text-center p-5 ">
            <h3>AROUND THE WEB</h3>
            <div className="icons">
            <i className="fa-brands fa-facebook  mx-1 icon"></i>
            <i className="fa-brands fa-twitter mx-1 icon"></i>
            <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
            <i className="fa-solid fa-globe mx-1 icon"></i>
            </div>
        </div>
        <div className="col-md-4  text-center p-5">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
   </div>
   </div>
   <div className="  p-1 text-center footer-lower text-white">
    <p className='mt-2'>Copyright © Your Website 2021</p>
   </div>

   </>
  )
}
