import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import './LoginSignup.css'

const LoginSignup = () => {
    const [action,setAction] =useState("Sign Up")

    const [name,setName]=useState("")
    const [email, setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const handleSignup=async()=>{
        let user={
            name,
            email,
            password
        }
        await fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
            

        })
        renderToStaticMarkup.success("SignUp Sucessfull")
        setName("")
        setEmail("")
        setPassword("")
        setAction("Login")
    }
    const handleLogin=async()=>{
        let res=await fetch ("http://localhost:3000/users")
        let data=await res.json()

        let validUser=data.find(
            (user)=>
                user.email===email&&
            user.password===password
        )
        if(validUser){
            localStorage.setItem("user",JSON.stringify(validUser))
            setEmail("")
            setPassword("")
            renderToStaticMarkup.success("login successfull!")
            navigate("/")
        }
        else{
            toast.error("Inavlid Crendentials")
        }
    }
  return (
    <div className='LoginSignup'>
         <div className="loginSignupContainer">
            <h1>{action}</h1>
            <div className="loginSignupFields">
                {action === "Sign Up" && (
                  <input
                    type="text"
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                   />
                )}
                <input
                    type="email"
                    placeholder='Your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                onClick={action === "Sign Up" ? handleSignup : handleLogin}
            >
            Continue
            </button>
            {action === "Sign Up" ? (
                <p className='loginSignupLogin'>
                    Already have an account?
                    <span onClick={() => setAction("Login")}> Login here</span>
                </p>
            ) : (
                <p className='loginSignupLogin'>
                     Create new account?
                <span onClick={() => setAction("Sign Up")}> Click here</span>
                </p>
            )}
            {action === "Sign Up" && (
                <div className="loginSignupAgree">
                    <input type="checkbox" />
                    <span>By continuing, I agree to the terms of use & privacy policy</span>
                </div>
            )}
      </div>
 </div>
 )
}
export default LoginSignup


    

        
    