import React from 'react'
import { Link } from 'react-router-dom'
import "./modal.css";
import { useContext } from 'react';
import { CartContext } from '../../Context/cartConntext';
import icono from  '../modal/icon/icono.png';



const Modal = ({isOpen, closeModal}) => {

  const {clearCart}=useContext(CartContext);

  function handleClick(){
      closeModal();
      clearCart();
  }

  if(!isOpen) return null;
    
  return (
      <div className='modalContainer'>
        <div className='confirmacion'>
          <h3>Su compra se realizo con exito!!</h3>
          <img src={icono} alt="imagen"  />
          <Link to={"/"}>
              <button onClick={()=>handleClick()}>Aceptar</button>
          </Link>
        </div>
      </div>
    
    )
}

export default Modal;