import React from 'react';
import Logo from '../images/metamask.png';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <>
      <div className='navbar'>

            <div className='container px-5 py-3 my-3'>
                <div className='logo'>
                    <a href="/">V3Fund</a>
                </div>
                <div className='account'>
                    <button >{(props.account).slice(0,6)+"..."+(props.account).slice(-7,)}</button>
                </div>
            </div>
      </div>
    </>
  )
}

export default Navbar