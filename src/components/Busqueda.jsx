import React, { useState } from 'react'

const Busqueda = () => {
   
    const [inputSearch, setinputSearch] = useState("")
    const buscarSubmit=(e)=>{
        e.preventDefault()
        console.log(inputSearch)
    }

  return (
    <div className=' fixed right-0 backdrop-blur-sm z-10 rounded-sm'>
        <form onSubmit={buscarSubmit} className='flex flex-col items-center'>
            <input 
                value={inputSearch}
                onChange={e=>setinputSearch(e.target.value)}
                type="text" 
                className='w-60 h-10 border rounded-xl m-5'
            />
            <button 
                type="submit"
                className='bg-orange-400 rounded-md py-2 w-3/5 m-3'
            >Enviar</button>
        </form>
    </div>
  )
}

export default Busqueda