import { useState } from "react"

const Login = ({handleLogin}) => {

    
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const submitHandler = (e) => {
        handleLogin(email,password)
        e.preventDefault()  
        setEmail('')
        setpassword('')
    }


    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <form onSubmit={submitHandler} className='px-15 py-25 gap-4 border-3 border-emerald-700 rounded-2xl flex flex-col'>
                <input required onChange={(e)=>setEmail(e.target.value)} value={email}
                    className='border-2 border-emerald-700 outline-none bg-transparent text-2xl px-5 py-2 rounded-full'
                    type="email" placeholder='Enter Email ID' />
                <input required  onChange={(e)=>setpassword(e.target.value)} value={password}
                    className='border-2 border-emerald-700 outline-none bg-transparent text-2xl px-5 py-2 rounded-full'
                    type="password" placeholder='Enter Password' />
                <button className='bg-emerald-700 text-xl px-7 py-2 rounded-full font-semibold cursor-pointer mt-5 hover:bg-emerald-800 hover:scale-98'>LOGIN</button>
            </form>
        </div>
    )
}

export default Login
