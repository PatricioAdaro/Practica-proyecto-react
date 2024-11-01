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
  apiKey: "AIzaSyA2N6LgiVmRiN4MJ-AIUuyFFyAhM_pPUNM",
  authDomain: "ecomerce-reactapp-5047a.firebaseapp.com",
  projectId: "ecomerce-reactapp-5047a",
  storageBucket: "ecomerce-reactapp-5047a.appspot.com",
  messagingSenderId: "165941261098",
  appId: "1:165941261098:web:01814ab20984ee3e98a453"
};

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
  
  // <React.StrictMode>
    <CartContextProvider value={[]} >
        <RouterProvider router={router} />
    </CartContextProvider>
  // </React.StrictMode>
);
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
