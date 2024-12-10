import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin';

export default function App() {
  return (
    <div>
     <BrowserRouter>
        <Header name="John" age={25}/>
        
        <Routes>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="admin" element={<Admin/>} />

        </Routes>
        

        <Footer/>

    </BrowserRouter>
       
        
    </div>
  )
}
