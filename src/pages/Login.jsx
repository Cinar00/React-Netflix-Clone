import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const {user, logIn} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e)=> {
        e.preventDefault()
        setError("")
        try {
            await logIn(email, password)
            navigate("/")
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }


  return (
    <>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/c2578c37-8569-4f88-b8f1-67a26a9ddcdd/905a350c-1d8a-4c71-900a-84c524ec665b/TR-tr-20220725-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-bold'>Sign In</h1>
                        {error ? <p className='p-2 bg-red-400 my-2'>{error}</p> : null}
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-[#333333] rounded' type="email" placeholder='Email' autoComplete='email' />
                            <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-[#333333] rounded' type="password" placeholder='Password' autoComplete='current-password' />
                            <button className='bg-[#E50914] py-3 my-6 rounded font-bold'>Sign In</button>
                            <div className='flex justify-between items-center text-sm text-[#b3b3b3]'>
                                <p className='flex'><input className='mr-1' type="checkbox" />Remember me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-6 pt-10'><span className='text-gray-500 mr-1'>New to Netflix? </span> 
                                <Link to="/signup" className='hover:underline'>
                                    Sign Up
                                </Link>
                            </p>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login