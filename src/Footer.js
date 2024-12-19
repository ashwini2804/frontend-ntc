import React, { useState } from 'react'

export default function Footer() {
  const [name,setName] = useState();
  console.log("Reloaded")
  const greet = () => {
    alert(name)
  }
  // const greet1 = (name) =>{
  //   alert(name)
  // }
  return (
    <div>
        <hr></hr> 
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={greet}>Click</button>
          
        {/* <button onClick={() =>greet1("John")}>Click</button> */}
        <h3>@Copyright 2024. All rights resvered</h3>
    </div>
  )
}
