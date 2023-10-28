
const Products = () => {
    const imgZanahorian = 'https://cdn-icons-png.flaticon.com/512/5617/5617585.png'
    const datos =[ 
        {img: imgZanahorian , title:"zanahoria" , price:'34,33'},
        {img: imgZanahorian , title:"papa" , price:'4,33'},
        {img: imgZanahorian , title:"yuca" , price:'36,33'},
        {img: imgZanahorian , title:"camote" , price:'32,33'},
        {img: imgZanahorian , title:"frejol" , price:'31,33'},
        {img: imgZanahorian , title:"arroz" , price:'3,33'},
    
    ] 
    

    return (
    <section className="card-group">
        {datos?datos.map((data,index)=>(
            <div className="relative">
                <div className="card border-2 p-3 flex flex-col justify-center items-center rounded-xl">
                    <button type="button" className=" absolute bg-slate-200 display rounded-2xl p-1 top-0 right-0" >Agregar Carrito</button>
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