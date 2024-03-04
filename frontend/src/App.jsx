import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.scss'
import Home from './pages/home/Home'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Mygigs from './pages/myGigs/Mygigs'
import Order from './pages/order/Order'
import Register from './pages/register/Register'
import Messages from './pages/messages/Messages'
import Login from './pages/login/Login'
import Message from './pages/message/Message'
import Layout from './Layout'
import Add from './pages/add/Add'
import Pay from './pages/pay/Pay'
import Success from './pages/success/Success'



function App() {
 
  const Router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <Mygigs />,
        },
        {
          path: "/orders",
          element: <Order />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    }
])

  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
