import React, { useState } from 'react';
import '../Register/Register.css'

function Register() {
    const [son, setSon] = useState(1);
    const remove = () => {
        setSon(son-1) 
        if (son===1){
            setSon(1)
        }
    }
    const add = () => {
        if (son == 10) {
            console.log(10)
        }
        else if (son == 10) {
            setSon(1)
        }
        else {
            setSon(son + 1);
        }
    };
    return (
        <main>
            <h1>main component: {son}</h1>
            <button onClick={add}>plus</button>
            <button onClick={remove}>minus</button>
            

        </main>
    );
}

export default Register