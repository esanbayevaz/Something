
import React, { useState } from 'react'
import '../Kitob/Kitob.css'
import Kartoshka from '../assets/IMG/Kartoshka.jpg'
import kabachka from '../assets/IMG/kabachka.jpg'
import piyoz from '../assets/IMG/piyoz.jpg'
import sabzi from '../assets/IMG/sabzi.jpg'



function Kitob() {
    const[son, setSon]=useState(1);
    const remove=()=>{
        setSon(son-1)
        if (son===1)
        setSon(1)
    }
    const add = () =>{
        if (son==10){
            console.log(10);
        }
        else if (son===10){
            setSon(1)
        }
        else{
            setSon(son +1);
        }
    };



    let sabzavot=[
        {nomi:"kabachka",rasm:kabachka,narxi:10000,id:1},
        {nomi:"piyoz", rasm:piyoz,narxi:8000,id:2},
        {nomi:"kartoshka", rasm:Kartoshka, narxi:5000,id:3},
        {nomi:"sabzi", rasm:sabzi, narxi:4000,id:4,},

    ]
    // let auto = [
    //     {name:"elyor",age:24,id:1},
    //     {name:"zebo",age:23,id:2},
    //     {name:"ruslan",age:16,id:3},

    // ]
    return (
        // <div className='cars'>

        //     <h1>mashinalar ruyxati</h1>
        //     <ol>
        //         {auto.map((element, index) =>(
        //             < li key={index}> menda {element} bor</li>
        //     ))}
        // </ol>

        <div className="container">

            <h1>Sabzavotlar ruyxati</h1>
        <div className="sa">

            {sabzavot.map((item,index)=>(

                <div key={item.id} className="sabza">
                    <img src={item.rasm} alt="" />
                    <button onClick={add}>Buy</button>
                    <button onClick={remove}>Delete</button>
                    <h1>main component: {son}</h1>
                    <h2>nomi:{item.nomi}</h2>
                    <h2>narxi:{item.narxi}</h2>


                </div>
            ))}

        
            
        </div>

        </div>


  )
}

export default Kitob