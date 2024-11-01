import { CartContext } from "../../Context/cartConntext";
import Count from "../Count/Count";

import './itemDetail.css'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({id, image, title, categoryId, price, stock, description}) => {

    const[agregado, setAgregado] = useState(0)
    const { addToCart} = useContext(CartContext)
    
    function onAddProduct (contador){
      setAgregado(contador)
      const item ={id, title, price,image,stock}
      addToCart(item, contador);
    }
     console.log(agregado)
  return (
    <div className="detail-content">
      <div className="detail-cart">
        <header className="detail-header">
          <h2>{title}</h2>
        <img src={image} alt={title} width="300px"/>
        </header>
        <main className="detail-body">
          <section className="detail-section">
             <p className="detail-description">Categoria: <b>{categoryId}</b></p> 
             <p className="detail-description">Precio: <b>${price}</b> </p>
             <p className="detail-description">Stock: <b>{stock}</b></p>
             <p className="detail-description">Descripcion: <b>{description}</b></p>
          </section>
          <div className="detail-counter">
              {agregado === 0 && (<Count  stock={stock} onAdd={onAddProduct} agregado={agregado}/>)}
            <div>
              {agregado >= 1 && (<Link to={"/cart/Cart"} ><button className="btn-terminar" >Terminado</button></Link>)} 
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ItemDetail


