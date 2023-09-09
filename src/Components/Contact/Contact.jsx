import React from 'react'

export default function Contact() {
  return (
   <>
   <div className=" contact p-5">
    <h2 className='text-center fs-1'>CONTACT SECTION</h2>
    <div className="container d-flex justify-content-center align-items-center p-5">
      <div className='row gy-4'>
      <input placeholder='User Name' className='form-control border-0 border-bottom py-3' type="text" />
      <input placeholder='User Age' className=' form-control border-0 border-bottom py-3' type="number" />
      <input placeholder='User Email' className=' form-control border-0 border-bottom py-3' type="email" />
      <input placeholder='User Password' className=' form-control border-0 border-bottom py-3' type="password" />
      <button className='btn btn-info w-25 my-5'> Send Message</button>

      </div>
    </div>
   </div>
   </>
  )
}
