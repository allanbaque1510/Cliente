import React from 'react'

const Slider = ({data}) => {
  return (
    <div className='flex overflow-hidden overflow-x-auto'>
        {
            data.map((valor,index)=>(
                <div className="m-1 text-center  contenedor-cards">
                    <img 
                        src={valor.imagen} 
                        key={index}
                        className=''
                    />
                    <legend className=' capitalize font-medium text-gray-700'>{valor.titulo}</legend>
                    <span className=' text-green-600 font-bold'>{valor.precio}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Slider