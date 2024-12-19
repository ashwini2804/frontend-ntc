import React, { useState } from 'react'

export default function App2() {
    const [n1,setn1] = useState(0);
    const [n2,setn2] = useState(0);
    const [result,setResult] =useState(0);
    const handleSum =() =>{
        setResult(Number(n1) + Number(n2));

    }
  return (
    <div>App2
        <p><input type="number" onChange={(e) =>setn1(e.target.value)}></input></p>
        <p><input type="number" onChange={(e) =>setn2(e.target.value)}></input></p>
        <button onClick={handleSum}>Sum</button>
        <hr></hr>
        {result}
    </div>
  )
}
