import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/cartConntext'
import CartItem from '../cartItem/CartItem'
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import { getFirestore, addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import Modal from '../modal/Modal';
import "../cart/cart.css"

const Cart = () => {

  const [isModalOpen, setIsModalOpen]= useState(false);
  const {cart, clearCart, totalPrice} = useContext(CartContext);

  const db = getFirestore();

  function updateOrder(productId, finalStock){
    const itemRef = doc(db,"items",productId);
    updateDoc(itemRef,{stock: finalStock}).catch(error=>console.log(error));
  }

  function sendOrder(){
    const collectionRef = collection(db, "orders");
    
    const order = {
      buyer:{name:"Patricio", email: "patricio@app.com" , phone:2345678},
      item:cart,
      totalPrice: totalPrice()    
    }
    
    addDoc(collectionRef, order)
    .then(()=>{
      cart.map((prod)=>{
        const finalStock = prod.stock - prod.cantidad;
        updateOrder(prod.id, finalStock);
      })
    })
  };

  function handleClick(){
   setIsModalOpen(true);
   sendOrder();
  };

  // console.log(cart)
  if(cart.length === 0){
    return <>
          <NavBar/>
          <div className='emptyCart' >
            <h2>El carrito esta vacio</h2>
            <Link to={"/"}>
              <button>selecionar productos</button>
            </Link>
          </div>
          
    </> 
  }
  
  return (
    <div>
      <NavBar/>
      <div className='cartContent'>
         {cart.map((cartItem) => (
            <CartItem 
              key={cartItem.id} 
              id={cartItem.id} 
              titulo={cartItem.title}   
              precio={cartItem.price} 
              cantidad={cartItem.cantidad}
              img={cartItem.image}  
            />
          ))}
      </div>
      <footer>
        
        <button className='clear' onClick={()=>clearCart()} > <span>Vaciar carrito</span> </button>
        <div className='cont-total-pagar'>
          <h4 className='total'>Precio total:${totalPrice()}</h4>
          <button className='pagar' onClick={()=>handleClick()} > <span>Pagar</span></button> 
        </div>
       
        
      </footer>
      
      <Modal isOpen={isModalOpen} closeModal={()=>setIsModalOpen(false)}  />
      
    </div>
  )
};

export default Cart;

