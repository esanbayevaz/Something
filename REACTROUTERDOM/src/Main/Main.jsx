import React, { useState } from 'react'
import "../Main/Main.css"

function Main() {

    const add = () => alert('plus');
    const remove =() => alert('record');
   

    return (
        <main>
            <h1>main component</h1>
            <h2>ismi: {}</h2>
            <button onClick={add}>plus</button>
            <button onClick={() => alert('Reg')}>Reg</button>
            <button onClick={() => alert('minus')}>minus</button>
            <button onClick={remove}>Nomsiz</button>

        </main>
    )
}

export default Main

821024645202