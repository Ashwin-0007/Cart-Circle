// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CartList from './components/CartList';
import ProductList from './components/ProductList';
// import axios from 'axios';
import { useState } from 'react';

function App() {
  const[product, setProduct] = useState([
   {
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4LD4FrGgzWOn67z500I72E8kiHxqbqgzQO61ilCRrPIRHz2PRLV9qXhfnkkGWc2GtEw&usqp=CAU', 
    name:"TRQ White Shoes",
    Category:"Shoes",
    Seller:"AMZ Seller",
    Price:1999
  },
  {
    url:'https://media.gettyimages.com/id/165853320/photo/wristwatch.jpg?s=612x612&w=gi&k=20&c=Nz8tHYXhh1TYmH5oeqAjL6HbZPwkbFmF7X3eUrHvKIc=',
    name:"LOREM Watch Black",
    Category:"Watches",
    Seller:"Watche ltd. Siyana",
    Price:2599
  },
  {
    url:'https://m.media-amazon.com/images/I/61UU0Wd6RaL._AC_UF1000,1000_QL80_.jpg',
    name:"DEll Laptop 8GB RAM",
    Category:"Laptop",
    Seller:"Delhi Laptop",
    Price:50000
  },
  {
    url:'https://m.economictimes.com/thumb/height-450,width-600,imgsize-14008,msid-102079603/6-best-hikvision-cctv-cameras-in-india.jpg',
    name:"Security Camera",
    Category:"Camera",
    Seller:"ARX Security",
    Price:1499
  },
  {
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdo_gbBDtWkVmzb-7QwMnykkafBv-I7gfCA0cbu5K69eWWKgIiB32aeHLjShbVpl1R7ZI&usqp=CAU',
    name:"Smart Watches",
    Category:"Watches",
    Seller:"Watche ltd. Siyana",
    Price:2999
  },
  {
    url:'https://wizekart.com/27409-large_default/oppo-reno8-5g-shimmer-gold-128-gb-8-gb-ram.jpg',
    name:"Oppo reno 8 ",
    Category:"Mobile",
    Seller:"Shree Mobile Shop",
    Price:29999
  },

 ])

 const[cart, setCart] = useState([])
 const[showCart, setShowCart] = useState(false)

 const addToCart = (data)=> {
  setCart([...cart, {...data, quantity : 1}])
 }
 const handleShow = (value) =>{
  setShowCart(value)
 }
  return (
    
    <div className='container'>
        <Header count = {cart.length} handleShow = {handleShow}/>
       {
          showCart ?
          <CartList cart = {cart} /> :
         <ProductList product={product} addToCart={addToCart}/>
        }

    </div>
    
  );
}

export default App;
