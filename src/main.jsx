import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Log from './Log.jsx'
import Sign from './Sign.jsx'
import AuthProvider from './AuthProvider.jsx'
import ServiceDetails from './ServiceDetails.jsx'
import Cart from './Cart.jsx'
import Private from './Private.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/log',
        element: <Log></Log>
      },
      {
        path: '/sign',
        element: <Sign></Sign>
      },
      {
        path: '/cart',
        element: <Private><Cart></Cart></Private>
      },
      {
        path: '/service/:id',
        element: <Private><ServiceDetails></ServiceDetails></Private>,
        loader: ({ params }) => fetch(`https://car-doctor-server-beige-tau.vercel.app/service/${params.id}`)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)
