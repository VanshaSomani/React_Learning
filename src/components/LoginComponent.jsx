import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const LoginComponent = () => {
    const[user , setuser] = useState({
        id:100,
        email:"vansh@gmail.com",
        password:'12345'
    })
    const{register , handleSubmit } = useForm();
    const LoginUser = (data) => {
        console.log(data);
        if(data.email == user.email && data.password == user.password){
            // alert('Login User Success');
            localStorage.setItem('id' , user.id);
            toast.success("User Login....", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
        else{
            alert('Login User Fail')
        }
    }
  return (
    <div>
        <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        <h1>LoginComponent</h1>
        <form onSubmit={handleSubmit(LoginUser)}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' {...register('email')}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' {...register('password')}/>
            </div>
            <div>
                <input type='submit' value='login'/>
            </div>
        </form>
    </div>
  )
}
