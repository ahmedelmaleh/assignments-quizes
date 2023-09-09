import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-sm ">
          <div className="container">
            <Link className="navbar-brand fs-2 text-white " to="home">START FRAMEWORK
</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0  fs-5  fw-bolder ">
                  
                    <li className="nav-item me-4">
                        <Link className="nav-link text-white" to="about">About</Link>
                    </li>
                    <li className="nav-item me-4">
                        <Link className="nav-link text-white" to="portofolio">portofolio</Link>
                    </li>
                    <li className="nav-item me-4">
                        <Link className="nav-link text-white" to="contact">Contact</Link>
                    </li>
                   
                </ul>
               
            </div>
         </div>
       </nav>
    </>
  )
}
