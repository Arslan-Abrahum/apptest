import React from 'react'
import { Link } from 'react-router-dom'
import arr from './arr'

const Nav = () => {
  return (
    <div>

        {arr.map((ele, i)=>{
            console.log(ele[i]);
            return(

                <Link to={`/${ele.id}`}>{ele.name}</Link>
                
            )
        })}
Nav
    </div>
  )
}

export default Nav