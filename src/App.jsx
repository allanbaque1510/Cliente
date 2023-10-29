
import NavBar from './components/NavBar'
import Busqueda from './components/Busqueda'
import Products from './components/Products'

import { useEffect, useState } from 'react'
import Carrito from './components/Carrito'
function App() {
  const [busqueda, setBusqueda] = useState(false)
  const [activador, setActivador] = useState(true)
  
  

  return (
    <div className='h-screen w-full'>
      <NavBar
        setBusqueda={setBusqueda}
        busqueda={busqueda}
      />
      {/*busqueda ? <Busqueda/> : null*/}
      <div className="m-4">
        <Products setActivado ={setActivador} />
      </div>
        <Carrito productos ={activador}/>
    </div>
  )
}

export default App
