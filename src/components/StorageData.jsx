import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export const StorageData = () => {
    const storeDataToLocalStorage= () => {
        localStorage.setItem('name' , 'Vansha')
        localStorage.setItem('age' , '20')
        toast.success("Data Stored....", {
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
    const removeDataFromLocalStorage = () => {
        localStorage.removeItem('name')
        localStorage.removeItem('age')
        toast.warning("Data Removed....", {
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
  return (
    <div>
        <h1>StorageData</h1>
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
        <button className='btn btn-outline-primary btn-lg' onClick={() => {storeDataToLocalStorage()}}>Store Data in Local Storage</button><br></br>
        <button className='btn btn btn-outline-danger' onClick={()=>{removeDataFromLocalStorage()}}>Remove Data from Local Storage</button><br></br>
        <button className='btn btn-outline-primary btn-lg'><Link to='/getstoredata'> Get Stored Data</Link></button>
    </div>
  )
}
