import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import { getFirestore, getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct]= useState([]);
    
    const {itemId} = useParams()

  useEffect(()=>{
    const db = getFirestore();
    const itemRef = doc(db, "items", itemId );
    getDoc(itemRef)
      .then((snapshot)=>{
        if(snapshot.exists){
          setProduct({id:snapshot.id , ...snapshot.data()});
        }
      })
      .catch((err)=>{console.log(err)})

  },[itemId])
  

  return (
    <div>
      <NavBar/>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer;