import React, { useState } from 'react'
import '../Ismozgartirish/Zebo.css'

function Zebo() {
    const [son,setSon]= useState(1);
    const [ism,setIsm]= useState ('Nur');
    const add =() =>{
      setSon((p) => p+1);

    };
   
    console.log('main');

  return (
    <div>
        <h1>Nur corporative:{son}</h1>
        <h1>Zebo corporation:{ism}</h1>
        <button onClick={() => setIsm("Muhammad Nur")}>ofChange ism </button>
        <button onClick={() => setIsm("Zebo")}>onChange ism </button>
        <button onClick={add}>plus</button>
        <button onClick={() => setSon(son-1)}>minus</button>



    </div>
  )
}

export default Zebo