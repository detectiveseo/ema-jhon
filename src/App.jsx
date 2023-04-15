import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'

function App() {

  return (
    <div className="App">
      <Header></Header>
      
      <Outlet></Outlet>
    </div>
  )
}

export default App
