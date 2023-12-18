import React from 'react'
import { useState } from 'react'
import '../inputlar/Nur.css'

function Nur() {
    const[ism,setIsm]= useState("sarvar")
    const noosChange = event=>{
        setIsm(event.target.value);
    }
  return (
    <>
        <h1> component: {ism}</h1>
        <input className='ism' placeholder='ism kiriting' onChange={noosChange} type="text" />
    </>
  )
}

export default Nur