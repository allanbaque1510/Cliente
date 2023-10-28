import React, { useState } from 'react'

const Busqueda = () => {
    const [inputSearch, setinputSearch] = useState("")
    const buscarSubmit=(e)=>{
        e.preventDefault()
    }

  return (
    <div>
        <form onSubmit={buscarSubmit} className='flex flex-col'>
            <input 
                value={inputSearch}
                onChange={e=>setinputSearch(e.target.value)}
                type="text" 
                className='w-60 h-80 border rounded-xl'
            />
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Busqueda