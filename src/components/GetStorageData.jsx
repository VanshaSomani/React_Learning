import React, { useEffect, useState } from 'react'

export const GetStorageData = () => {
    const[name , setname] = useState();
    const[age , setage] = useState();
    const getDataFromLocalStorage = () => {
        setname(localStorage.getItem('name'))
        setage(localStorage.getItem('age'))
    }
    useEffect(() => {
        getDataFromLocalStorage();
    },[])
  return (
    <>
    <div>GetStorageData</div>
    <div>
        {
            name ? <h1>{name}</h1> : <h1>No Data</h1>
        }
        {
            age ? <h1>{age}</h1> : <h1>No Data</h1>
        }
    </div>
    </>
  )
}
