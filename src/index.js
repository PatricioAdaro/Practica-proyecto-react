import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './Context/cartConntext';
import Cart from './component/cart/Cart';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
  projectId:  process.env.REACT_APP_PROYECT_ID,
  storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_MESSAGING_SENDER_ID,
  appId:  process.env.REACT_APP_APP_ID,
};
console.log(firebaseConfig);

// Initialize Firebase
initializeApp(firebaseConfig);

const router = createBrowserRouter([
 
  {
    path: "/",
    element:<ItemListContainer todo={"Todos los productos"}/>
  },
  {
    path:"/categoria/:categoryId",
    element: <ItemListContainer/>
  },
  {
    path:"/Item/:itemId",
    element: <ItemDetailContainer/>
  },
  {
   path:"/cart/Cart",
   element:<Cart/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <CartContextProvider value={[]} >
        <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
 


reportWebVitals();
