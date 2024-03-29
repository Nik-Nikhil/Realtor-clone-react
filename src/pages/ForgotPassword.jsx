import { useState } from "react"
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";
import {toast} from 'react-toastify'
import { sendPasswordResetEmail, getAuth } from "firebase/auth";



const ForgotPassword = () => {
  
 const [email, setEmail] = useState('')

 async function onSubmit(e){
   e.preventDefault()
   try {
    const auth =getAuth()
    await sendPasswordResetEmail(auth, email)
    toast.success("Check your email for reset link")
    
   } catch (error) {
    toast.error("Couldn't send reset email")
    
   }
 }


  

  function onChange(e){
    setEmail(e.target.value)
  }


  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
      <div className='md:w-[67%] lg:w-[50%] mb- 12 md:mb-6'> 
        <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2V5c3xlbnwwfHwwfHx8MA%3D%3D" alt="key" className='w-full rounded-2xl'/>
      </div>
      <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
        <form onSubmit={onSubmit}>
          <div>
            <input  type='email' id='email' value={email} onChange={onChange} placeholder="Email address" className= "mb-6 w-full px-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"/>
           
          </div>
          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
            
            <p className="mb-6">Don't have account?<Link to='/sign-up' className="text-orange-600 hover:text-orange-700 transition duration-200 ease-in-out ml-1">Register</Link></p>
            <p>
              <Link to='/sign-in'className="text-blue-600 hover:text-indigo-700 transition duration-200 ease-in-out ">Sign in instead</Link>
            </p>
          </div> 
          <button className="w-full bg-indigo-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-indigo-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-indigo-800" type="submit">Reset Password </button>
        <div className="flex items-center my-4 before:border-t before:flex-1  before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
          <p className="text-center font-semibold mx-4">OR</p>
        </div>
        <OAuth />     
        </form>        
      </div>
      </div>
    </section>
  )
}

export default ForgotPassword