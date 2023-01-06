import React from 'react';
import Logo from '../images/metamask.png'

const Navbar = (props) => {
  return (
    <>
    <div className=' w-screen px-10 py-5  fixed'>

            <div className='   flex justify-between items-center px-20 py-5 bg-slate-800 shadow-lg rounded-lg'>
                <div className=''>
                    <img   src={Logo}/>
                </div>
                <div className=''>
                    <button className='px-10 py-2 text-sm text-gray-300 border-white border-solid border-4 rounded-md'>{props.account}</button>
                </div>
            </div>
      </div>
    </>
  )
}

export default Navbar