import "./cartWidget.css"
import shopping from "../CarWidget/asset/cart2.png"
import { CartContext } from "../../Context/cartConntext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = ()=>{
    const{totalProduct} = useContext(CartContext)

    return (
        <div >
            <Link to={"/cart/Cart"}> <img src={shopping} alt="cart" width='40px'/> </Link>
            <span className="cart-quantity" >{totalProduct()}</span>
        </div>
    )
}
export default CartWidget;