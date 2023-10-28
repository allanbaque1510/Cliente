import React, { useEffect } from 'react'

const NavBar = ({busqueda,setBusqueda}) => {
    useEffect(() => {
        const submit = (e) => {
            busqueda? setBusqueda(false) : setBusqueda(true)
        }
    },[])
  return (

    <nav>
        <div className='flex bg-orange-400 justify-between text-white font-bold'>
            <input 
                type="search" 
                name="busqueda" 
                id="busqueda" 
                className='w-80 px-4s border m-1 p-2 rounded-xl'
            />
            <button
                onClick={(e) => setBusqueda(!busqueda)}
            >
                busqueda Avanzada
            </button>
            <nav>
                <li className='flex flex-row p-2 gap-4 px-3'>                    
                    <ul>Home</ul>
                    <ul>productos</ul>
                </li>
            </nav>
        </div>
        
        
        
    </nav>
  )
}

export default NavBar