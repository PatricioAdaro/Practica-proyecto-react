import React from 'react'
import Item from '../Item/Item'
import './item-list.css'

const ItemList = ({producto}) => {
  return (
    <div className='item-list'>
        {producto.map(prod => <Item key={prod.id}{...prod}/> )}
        
    </div>
  )
}

export default ItemList