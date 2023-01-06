import React from 'react'

const DonationList = () => {
  return (
    <div className='w-96 bg-orange-400 rounded-md shadow-lg px-10 py-5'>
      <div className='flex justify-between items-center'>
        <p>User</p>
        <p>Address</p>
        <p>Amount</p>
      </div>
      <hr className='my-3' />

      <div className=''>
        <div className='flex justify-between items-center'>
          <img src="https://avatars.dicebear.com/api/identicon/your-custom-seed.svg" className='h-8 w-8 rounded-full'/>
          <a href="">0x5d2...2118d</a>
          <p>0.09&nbsp;ETH</p>
        </div>
      </div>
    </div>
  )
}

export default DonationList