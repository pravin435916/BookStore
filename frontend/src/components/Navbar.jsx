import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className='w-full h-20 flex justify-between items-center bg-gray-900 px-4 text-white font-semibold text-lg'>
         <span>LOGO</span>
         <div className='flex gap-8 items-center'>
            <Link to='/'>Books</Link>
            <Link to='/books/create'>Add Book</Link>
            <Link to='/'>Users</Link>
            <Link to='/'>Signup</Link>
         </div>
      </div>
    </>
  )
}

export default Navbar