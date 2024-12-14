import React, { useEffect, useState } from 'react';
import "./Main.css";
import axios from 'axios'
import { useContext } from 'react';
import { UserContext } from './App';

export default function Main() {
// const {user,setUser} = useContext(UserContext)
//  setName(name)

// const {name,cart,setCart,products,setProducts } = useContext(UserContext)
// const [quantity,setQuantity] = useState()

const [qty, setQty] = useState(1);
const { user, setUser, cart, setCart, products, setProducts } =   useContext(UserContext);

const url = "http://localhost:8080/";
const showProducts = async() =>{
    const response = await axios.get(url);
    setProducts(response.data);
};
    useEffect(()=>{
        showProducts()
    },[])

    const handleAdd = (id, qty) => {
    
        setCart((prev) => ({ ...prev, [id]: qty }));
        setQty(1)
        console.log(cart);
      };

    // const addProduct = (id,quantity) =>{
    //     console.log(id,quantity)
    //     setCart([id+":" + quantity])
    //     console.log(cart)
    // }
    // const products =[
    //     {name:"Product 1", price:34},
    //     {name:"Product 2", price:34},
    //     {name:"Product 3", price:34},
    // ];
    
    return(
        <div className='row'>
            {/* {name} ,{quantity}

            {products && products.map((value,index) =>(
                <div key={index} className='box'>
                    <h3>{value.name}</h3>
                    <h4>${value.price}</h4>

                    <select onChange={(e) => setQuantity(e.target.value)}  >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <button onClick={() => addProduct(value._id,quantity)} >Add to Cart</button>
//  */}

                 
              {/* </div> */}
    {/* ))} */}




    {products &&
        products.map((value, index) => (
          <div key={index} className="box">
            <h3>{value.name}</h3>
            <h4>${value.price}</h4>
            <select onChange={(e) => setQty(Number(e.target.value))}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button onClick={() => handleAdd(value._id, qty)}>
              Add to Cart
            </button>
          </div>
        ))}

        </div>
    )
  
}
