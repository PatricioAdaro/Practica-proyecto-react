import './item.css'
import { Link } from 'react-router-dom';
const Item = ({id,image,title,price})=>{
    return(
        <div className="item">
            <img src={image} alt="imagen" width='100%'/>
            <div className='detail-item'>
                <h3>{title}</h3>
                <p>{price}</p>
                <Link to={`/item/${id}`}>
                <button className='boton'> ver detalle </button>
                </Link>
            </div>

        </div>
    )
}
export default Item ;