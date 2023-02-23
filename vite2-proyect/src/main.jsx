import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Ejercicio from './components/ejercicio'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/tabla',
    element: <Ejercicio />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
