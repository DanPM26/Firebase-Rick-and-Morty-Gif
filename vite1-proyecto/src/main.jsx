import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/components/Home'
import Info from './assets/components/info'
import Ghify from './assets/components/Ghify'
import 'bootstrap/dist/css/bootstrap.min.css';
import Vista from './assets/components/O-components/vistafireBase'
import Formulario from './assets/components/O-components/Formulario-Firebase/formulario'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
  },
  {
    path:'info/:id',
    element: <Info />
  },
  {
    path:'/ghify',
    element:<Ghify />
  },
  {
    path:'/form',
    element: <Vista />
  },{
    path:'/formulario',
    element: <Formulario />
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
