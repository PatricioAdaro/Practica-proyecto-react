import "./itemListContainer.css";
import { useState,useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore/lite";


const ItemListContainer = ({todo})=>{

  const [product, setProduct] = useState([])
  const {categoryId} = useParams()



  useEffect(()=>{
    const db = getFirestore();
    const collectionRef = collection(db, "items"); 
    
      if(categoryId){
        const collectionFilter = query(collectionRef, where("categoryId","==",categoryId))
        getDocs(collectionFilter)
          .then((snapshot)=>{
            setProduct(snapshot.docs.map((doc)=>({id: doc.id , ...doc.data()})))
          })
          .catch((err)=>{console.log(err)})  
      }else{
        getDocs(collectionRef)
          .then((snapshot)=>{
            setProduct(snapshot.docs.map((doc)=>({id: doc.id , ...doc.data()})))
          })
          .catch((err)=>{console.log(err)})  
      }
      
      
  },[categoryId])
  console.log(product);
  
  

  const renderCategory = () => {    
    switch (categoryId) {
      case 'pantalones':
        return 'Pantalones';
      case 'remeras':
        return 'Remeras';
      case 'camperas':
        return 'Camperas';
      default:
        return todo ;
    }
  }

  return(
    <div>
      <NavBar/>
      <h2 className="home-title">{renderCategory()}</h2>
      <div  className="item-list-content">
        <ItemList producto={product}/> 
      </div>
    </div>
  )
}
export default ItemListContainer;




      