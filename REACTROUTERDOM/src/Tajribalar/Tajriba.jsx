
import React, { useState } from 'react'
import '..//Tajribalar/Tajriba.css'
// import '../Kitob/Kitob.css''

function Tajriba() {
  const [son,setSon] =useState(10);
  const [ism,setIsm]=useState("sarvar")
  const add =()=>{
    setSon((p) =>p+1);
  }
   
  return (
    <div className='cont'>
      <h1>Tajriba component: {son}</h1>
      <h1>Tajriba component: {ism}</h1>
      <button onClick={()=>setIsm("Ozoda")}>change ism</button>
      <br />
      <button onClick={()=>setIsm("zebo")}>change ism</button>
      <br />
      <button onClick={add}>start</button>
      <br />
      <button onClick={()=>setSon(son-1)}>enter</button>



    </div>
  )
}

export default Tajriba
