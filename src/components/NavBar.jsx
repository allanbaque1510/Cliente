import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <div className='flex bg-orange-400'>
            <input 
                type="search" 
                name="busqueda" 
                id="busqueda" 
                className='w-80 px-4s border m-1 p-2 rounded-xl'
            />
        </div>
        
        <nav>
            <li className='flex flex-row p-2 gap-2'>                    
                <ul>Home</ul>
                <ul>productos</ul>
            </li>
        </nav>
        
    </nav>
  )
}

export default NavBar