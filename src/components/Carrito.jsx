import { useEffect, useState } from "react"
import PayphoneButton from "./PayphoneButton"
import Slider from "./Slider"

const Carrito = ({productos}) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const datosLocal = JSON.parse(localStorage.getItem("carrito"))
        setData(datosLocal)
        console.log(datosLocal)
    }, [productos])
    
    console.log(productos)
  return (
    <div className=" bg-white fixed bottom-0   w-full ">
        <div className="flex justify-center items-center">
            <div className=" bg-white rounded-xl m-4 flex flex-row overflow max-w-xl ">
                {data? <Slider
                            data= {data}
                        />:null }    
            </div>
            <PayphoneButton monto={1230} />
        </div>
    </div>
  )
}

export default Carrito