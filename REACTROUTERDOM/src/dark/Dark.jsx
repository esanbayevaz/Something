import React, { useState } from 'react'
import "./Dark.css"

function Dark() {
    const [greenBg,setGreenBg]=useState(false);

  return (
    <div className='dark' style={{ backgroundColor: greenBg ? 'green' : 'red'}}>
        <button onClick={() => setGreenBg((p) => !p)}>darkmod</button>
        <h1>{greenBg ? 'orqa fon green': 'orqa fon oq'}</h1>
    </div>
  )
}

export default Dark