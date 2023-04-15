import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import User from './Components/Users/User'
import Singleuser from './Components/Users/Singleuser'
import Cart from './Components/Users/Cart'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "shop",
        element: <Shop></Shop>
      },
      {
        path: "about",
        element: <div><h1>THis is about us page</h1></div>
      },
      {
        path: "users",
        element: <User></User>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: "user/:id",
        element: <Singleuser></Singleuser>,
        loader: () => console.log()},
      {
        path: "cart",
        element: <Cart></Cart>,
        loader: () => fetch('fakeData/products.json')
      }
    ] 
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
