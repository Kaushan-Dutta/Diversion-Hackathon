import React from 'react';
import Image1 from '../images/A4.jpg'
import Image2 from '../images/A5.jpg'

const Organization = () => {
  return (
    <div className='bg-slate-600 rounded-xl px-10 py-5 shadow-lg w-4/6'>
        <div className='px-2 py-2 flex items-center justify-between'>
           <img src={Image2} className='max-w-lg h-64 shadow-lg rounded-md'/>
           <img src={Image1} className='max-w-64 h-64 shadow-lg rounded-md'/>
        </div>
        <div className='contents'>
            <div className='w-full py-4 rounded-md shadow-md  bg-lime-400 text-center '>
                <span className=' w-full'>Total Fund RAISED: 45ETH</span>
            </div>
            <h1>Img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</h1>
            <div className='flex justify-between items-center'>
                <div className='bg-slate-400 rounded-md shadow-md px-10 py-3 w-3/5 flex items-center justify-between'>
                    <input type="text" className='bg-slate-400 focus:outline-none placeholder:text-slate-900 ' placeholder='Enter the amount'/>
                    <button className='py-2 font-serif text-blue-500 bg-red-400 px-4 rounded-md'>Send ETH</button>
                </div>
                <div className=''>
                    <button className='rounded-md px-10 py-3 bg-yellow-500'>Withdraw(Only Owner)</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Organization