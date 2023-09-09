import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/MasterLayout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portofolio from './Components/Portofolio/Portofolio';
const router=createBrowserRouter([{
    path:'',element:<Layout/>,children:[
      {path:'',element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portofolio',element:<Portofolio/>},
      {path:'contact',element:<Contact/>},
  ]
  }])
export default function App() {
  return (
    <div>
      <RouterProvider router={router}/>
     
    </div>
  )
}
