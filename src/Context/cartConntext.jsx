
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if( !isInCart(item.id)){
            setCart((prevState)=> [...prevState, { ...item, cantidad:quantity}] ); //agregar un producto al carrito
        }else{
            setCart(
                cart.map((cartItem)=>{
                    if(cartItem.id === item.id){
                        
                            return {...cartItem , cantidad: cartItem.cantidad + quantity}
                        
                    }else{
                        return cartItem;
                    }
                })
            )
        }
    } 
    console.log(cart);

    const totalProduct = ()=>cart.reduce((acc, el)=> acc + el.cantidad,0);//acumula la cantidad de todos los productos

    const totalPrice =  ()=>cart.reduce((acc, el)=> acc + el.cantidad * el.price ,0); //acumula el precio de todos los productos

    const clearCart = () =>  setCart([]);	// deja el carrito vacío
    
    const deleteItem = (itemId) => setCart(cart.filter((prod)=> prod.id !== itemId)); // borra un producto del carrito
    
    const isInCart = (id)=> cart.some(prod=>prod.id === id); //indica si el producto existe o no en el carrito 
    
    
    
    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, deleteItem, totalProduct, totalPrice}}>
            { children }
        </CartContext.Provider>
    );
}
export default CartContextProvider;
