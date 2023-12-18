import { useState } from 'react'
// import { createContext,useState } from 'react';
// import toglar from "../src/assets/IMG/toglar.jpg"
import Main from './Main/Main'
import Login from './Login/Login'
import Register from './Register/Register'
import Zebo from './Ismozgartirish/Zebo'
import Kitob from './Kitob/Kitob'
// import Home from './Homecard/Home'
import Tajriba from './Tajribalar/Tajriba'
import Nur from './inputlar/Nur'
import Shov from './show/Shov'
import Dark from './dark/Dark'








function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='app'>
      <h2 onMouseOver={()=> console.log("h2 ni ustiga bordingiz ")}onMouseLeave={()=>console.log("h2 dan chiqdingiz")}>hello world</h2>
{/* <img src={toglar} alt="toglar" /> */}
<Main/>
<Login/>
<Register/>
<Zebo/>
<Kitob/>
<Tajriba/>
<Nur/>
<Shov/>
<Dark/>








    </div>



  )
}

export default App
