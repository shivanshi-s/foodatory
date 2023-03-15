import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-slate-800 text-white pb-5'>
        <img src="https://cdn.vectorstock.com/i/1000x1000/23/24/ladybug-insect-small-icon-animal-vector-19752324.webp" width={40} alt="img" className='flex flex-row justify-center'/>
            <div className='flex flex-row justify-center'>
                <ul className='flex flex-row justify-center border-solid border-2 rounded-md border-indigo-500 shadow-md shadow-teal-600  '>
                  <li className='m-4'>About</li>
                  <li className='m-4'>Speakers</li>
                  <li className='m-4'>Sponsers</li>
                  <li className='m-4'>Contact us</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar