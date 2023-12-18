import React, { useState } from 'react'
import '../show/Shov.css'

function Shov() {
    let age=20;
    const [show,setShow]=useState (false);
    const showTextBtn=()=>{
        setShow((p)=>!p)
    }

  return (
    <div className='Show'>


        {show && <h2>bu yozuv ekranda korinsin</h2>}
        <button onClick={showTextBtn}>show</button>
        <h2>sizning yoshingiz {age >=16 ? 'katta': 'kichik'}</h2>

    </div>
  )
}

export default Shov