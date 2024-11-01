import { useState } from "react"

import "./count.css" 

function Contador ({stock, onAdd, agregado}){
    const [contador, setContador] = useState(agregado);
   
    
    const sumar= ()=> {
    
        
        if(contador < stock){
            setContador(contador + 1);
               
        }else{
          alert('no hay stok');  
        }
    }        
    const restar= ()=> contador > 1 ? setContador(contador - 1 ): alert('cantidad no valida');
    
    return (
            <div className="count-container">
                <div className="btn-content">
                    <button onClick={restar}> - </button>
                    <h3>{contador}</h3>
                    <button onClick={sumar} disabled={contador > (stock - agregado)}  > + </button>
                </div>
                
                <button className="btn-agregar" onClick={()=>{onAdd(contador)}} disabled={!stock} >
                 Agregar al carrito
                </button>
            </div>
    )
}
export default Contador;