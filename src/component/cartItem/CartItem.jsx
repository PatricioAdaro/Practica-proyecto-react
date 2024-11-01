import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/cartConntext'
import "../cartItem/cartItem.css"
import delete1 from "../cartItem/icon/delete4.png";

const CartItem = ({ id, titulo,precio,cantidad,img}) => {

    const {deleteItem}= useContext(CartContext)
  return (
    <div className='cartItemContent' >
        <img src={img} alt="imagen"width='85' />
        <span>producto: <h4>{titulo}</h4></span>
        <span>precio: <h4>${precio}</h4></span>
        <span>cantidad:<h4> {cantidad}</h4></span>
        <span>Subtotal:<h4>${cantidad * precio}</h4></span>
        <img src={delete1} alt="icon" width='30' onClick={()=> deleteItem(id)} />  
    </div>
  )
}

export default CartItem  