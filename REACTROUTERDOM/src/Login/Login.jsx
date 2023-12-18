import React from 'react'


function Login() {
  
    console.log("login")
    const loginHandler=event=>{
        event.preventDefault()
        console.log("submit ishladi")
    }
  return (
    <>
        <form onSubmit={loginHandler}>
            <input type="text" placeholder='ism kiriting' />
            <input type="text" placeholder='ism kiriting'/>
            <button>Login</button>  
        </form>
    </>
  )
}

export default Login