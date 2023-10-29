import { useEffect, useState } from "react"
import axios from "axios"

const Products = ({setActivado}) => {
    const [itemsCar, setItemsCar] = useState([])
    const [trigger, setTrigger] = useState(true)
    const [total, setTotal] = useState(0)
    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Realiza una solicitud GET a la API
        axios.get('http://127.0.0.1:8000/api/productos')
          .then((response) => {
            setDatos(response.data); // Guarda los datos en el estado
            setLoading(false); // Cambia el estado de carga a falso
          })
          .catch((error) => {
            console.error('Error al cargar los datos: ', error);
          });
      }, []);
   
    useEffect(() => {
      console.log(itemsCar)
        localStorage.setItem("carrito", JSON.stringify(itemsCar))
        setTrigger(!trigger)
        setActivado(!trigger)
    }, [itemsCar])
    
    const agregarItem =(dats)=>{
        setItemsCar([...itemsCar, dats])
    }

    if (loading) {
        return <div>Cargando...</div>;
      }

    return (
    <section className="card-group">
        {datos?datos.map((data,index)=>(
            <div className="relative" key={index}>
                <div className="card border-2  pt-3 flex flex-col justify-center items-center rounded-xl">
                    <button type="button" onClick={()=>agregarItem({id:data.id,titulo:data.nombre, imagen:data.imgUrl, precio:data.precio})} className=" absolute bg-slate-200 display rounded-2xl p-1 top-0 right-0" >Agregar Carrito</button>
                    <img src={data.imgUrl} className="w-20" alt={data.nombre} />
                    <label >{data.nombre}</label>
                    <p className=" bg-orange-500 w-full text-center etiqueta">{(data.precio/100).toFixed(2)}$</p>
                </div>
            </div>
        )):cargando}
            

    </section>
  )
}

export default Products