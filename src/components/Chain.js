
import React,{useEffect,useState} from 'react';
import Polygon from '../images/polygon.png';

import {ethers} from 'ethers';
import './Chain.css';


const Chain = (props) => {
  useEffect(()=>{
    async function loadContents(){
      const provider=await window.ethereum;

        const web3 = new ethers.providers.Web3Provider(provider);
        const networkId=await web3.provider.networkVersion;
        props.getChain(networkId);
    }
    loadContents();
  })
  return (
    <div className='chain'>
        <div className='contents px-5 py-3 mx-5'>
            <img src={Polygon} width="50px" style={{cursor:'pointer'}} />
            <p style={{fontFamily:'Montserrat, sans-serif'}}>Switch to Mumbai Testnet</p>
            
        </div>
    </div>
  )
}

export default Chain 