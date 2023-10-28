
import NavBar from './components/NavBar'
import Busqueda from './components/Busqueda'
import Products from './components/Products'
import { useEffect, useState } from 'react'
function App() {
  const [busqueda, setBusqueda] = useState(false)

  return (
    <div className='h-screen w-full'>
      <NavBar
        setBusqueda={setBusqueda}
        busqueda={busqueda}
      />
      {busqueda ? <Busqueda/> : null}
      <Products/>
      
    </div>
  )
}

export default App
