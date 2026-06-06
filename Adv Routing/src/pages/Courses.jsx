import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <h2>Courses Page</h2>

        <div className='flex justify-center items-center text-2xl gap-4 font-bold py-8'>
            <Link to='/courses/mens'>Men</Link>
            <Link to='/courses/womens'>Women</Link>
        </div>

        <Outlet />
    </div>
  )
}

export default Courses