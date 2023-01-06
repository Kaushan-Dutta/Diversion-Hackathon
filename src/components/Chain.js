import React,{useEffect,useState} from 'react';
import Polygon from '../images/polygon.png';
import {ethers} from 'ethers';


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
    <div className='h-screen w-screen place-content-center grid bg-slate-700'>
        <div className='box max-w-sm  rounded-md shadow-lg px-10 py-5 bg-slate-600  place-items-center grid'>
            <img src={Polygon} width="50px" style={{cursor:'pointer'}} className="text-center"/>
            <h1 className='text-center text-2xl text-zinc-300 mt-3' style={{fontFamily:'Montserrat, sans-serif'}}>Switch to Mumbai Testnet</h1>
            
        </div>
    </div>
  )
}

export default Chain