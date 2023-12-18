import React, { useState } from 'react';
// import './Time/Home/Home.css';

function Home({title,price,number}) {
    const [son,setSon]=useState(1)
    const plusBtn=()=>{
        if (number===son){
            return
        }
        setSon(son+1)
    }
    const minusBtn=()=>{
        if(son===1){
            return
        }
        setSon(son-1)
    }
  return (
    <div className='container'>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <h3> {number} </h3>
        <h4>{son}</h4>
        <button onClick={plusBtn}>+</button>
        <button onClick={minusBtn}>-</button>

        plusBtn.addEventlisterner("click",function(){
            clearInterval()
        })



    </div>
  )
}

export default Home