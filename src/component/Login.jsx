import React, { useState } from 'react'
import  {useNavigate} from 'react-router-dom'

const Login = () => {
const navigate = useNavigate();
    const [form , setForm ] = useState({
        email: " ",
        password:"",
    });

    const [error , setError ] = useState({});

    //input filed 
    const handleChange = (e) => {
        setForm({...form ,[e.target.name] : e.target.value})
    }
//validation 

    const validate =() => {
        let err = {} ;

        if(!form.email ){
            err.email = " email  is required";
        }else if(!/\S+@\S+/.test(form.email)){
            err.email = 'invails email';
        }
         
        if(!form.password) {
            err.password = " password is required" ;
        }else if ( form .password.length < 6){
            err.password = " password min 6 digit "
        }
        return err;
    }

    //submit

    const handleSubmit =(e) => {
     e.preventDefault();
       const errors = validate();
       setError(errors)

       if(Object.keys(errors).length === 0){

        localStorage.setItem('user', JSON.stringify(form));

        navigate('/dashboard');
       }


    }
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
    <form onSubmit={handleSubmit} className='bg-white p-6 w-80 shadow rounded-2xl'>
        <h1 className=' text-2xl font-bold text-center mb-4'>Login</h1>
        <label className='font-medium m-2 '>Email <span className='text-red-500 text-sm'>*</span></label>
        <input type="email" 
        name='email'
        placeholder='sim@gmail.com'
        onChange={handleChange}
        value={form.email}
        className=' border w-full p-2 rounded-xl m-2'
        />

{error.email && (
    <p className='text-red-500 text-sm '>{error.email}</p>
)}
          <label className='font-medium m-2 '>Password <span className='text-red-500 text-sm'>*</span></label>
        <input type="password" 
        placeholder='*******'
        onChange={handleChange}
        name='password'
        value={form.password}
        className='border w-full p-2 rounded-xl m-2'
        />
{error.password && (
    <p className='text-red-500 text-sm '>{error.password}</p>
)}
        <button type='submit' className='w-full bg-blue-500 text-white p-2 m-2 rounded'>Login</button>
    </form>
    </div>
  )
}

export default Login