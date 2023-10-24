import React from 'react'
import arr from './arr'
import { useParams } from 'react-router-dom'

const Data = () => {
    const {id} = useParams()
    console.log(id);

    console.log(arr);
  return (
    // <div>{arr.map((item)=>{

    //     return(

    //         <div>{item.id}</div>
    //     )
    // })}</div>

    <div>{arr[id].name}</div>
  )
}

export default Data