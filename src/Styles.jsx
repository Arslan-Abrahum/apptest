import React from 'react'
import Nav from './Nav'

export const Styles = () => {
  return (
    <div>
      <div className='container mx-auto'>

        <p className='text-3xl border h-max bg-red-600 sm:bg-blue-400 md:bg-zinc-400 lg:bg-lime-400 xl:bg-teal-950 2xl:bg-green-700'>Welcome</p>  

        <button className='bg-green-400 hover:bg-blue-300 transition-all duration-[10s]'>Click</button>

        <Nav/>
      </div>

    </div>
  )
}
