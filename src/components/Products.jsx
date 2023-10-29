import { useEffect, useState } from "react"


const Products = ({setActivado}) => {
    const imgZanahorian = 'https://cdn-icons-png.flaticon.com/512/5617/5617585.png'
    const [itemsCar, setItemsCar] = useState([])
    const [trigger, setTrigger] = useState(true)
    const [total, setTotal] = useState(0)
    const datos =[ 
        {id:1,img: imgZanahorian , title:"zanahoria" , price:'34,33'},
        {id:2,img: imgZanahorian , title:"papa" , price:'4,33'},
        {id:3,img: imgZanahorian , title:"yuca" , price:'36,33'},
        {id:4,img: imgZanahorian , title:"camote" , price:'32,33'},
        {id:5,img: imgZanahorian , title:"frejol" , price:'31,33'},
        {id:6,img: imgZanahorian , title:"arroz" , price:'3,33'}
    
    ] 
    useEffect(() => {
      console.log(itemsCar)
        localStorage.setItem("carrito", JSON.stringify(itemsCar))
        setTrigger(!trigger)
        setActivado(!trigger)
    }, [itemsCar])
    
    const agregarItem =(dats)=>{
        setItemsCar([...itemsCar, dats])
    }
    return (
    <section className="card-group">
        {datos?datos.map((data,index)=>(
            <div className="relative" key={index}>
                <div className="card border-2 p-3 flex flex-col justify-center items-center rounded-xl">
                    <button type="button" onClick={()=>agregarItem({id:data.id,titulo:data.title, imagen:data.img, precio:data.price})} className=" absolute bg-slate-200 display rounded-2xl p-1 top-0 right-0" >Agregar Carrito</button>
                    <img src={data.img} className="w-20" alt={data.title} />
                    <label htmlFor="">{data.title}</label>
                    <p>{data.price}</p>
                </div>
            </div>
        )):cargando}
            

    </section>
  )
}

export default Products