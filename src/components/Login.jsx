import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
     <Header/>
     <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_small.jpg" alt="bg-img" />
     </div>
     <form action="" className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white'>
     <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type="text" placeholder='Email address' className='p-2 m-2 w-full' />
        <input type="password" placeholder='Password' className='p-2 m-2 w-full' />
        <button className='p-4 m-4 bg-red-700 w-full'>Sign in</button>
     </form>
    </div>
  )
}

export default Login
