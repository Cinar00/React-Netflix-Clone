import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, signUp} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e)=> {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate("/")
        } catch (error) {
            console.log(error)
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
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-[#333333] rounded' type="email" placeholder='Email' autoComplete='email' />
                            <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-[#333333] rounded' type="password" placeholder='Password' autoComplete='current-password' />
                            <button className='bg-[#E50914] py-3 my-6 rounded font-bold'>Sign Up</button>
                            <div className='flex justify-between items-center text-sm text-[#b3b3b3]'>
                                <p className='flex'><input className='mr-1' type="checkbox" />Remember me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='py-6 pt-10'><span className='text-gray-500 mr-1'>Already subscribed to Netflix? </span> 
                                <Link to="/login" className='hover:underline'>
                                    Sign In
                                </Link>
                            </p>
                            <div className='flex flex-col items-start text-sm text-gray-500'>
                                <p>
                                    This page is protected by Google reCAPTCHA to prove you are not a robot.
                                </p>
                                <p className='text-[#0071eb] hover:underline'>Learn more.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp