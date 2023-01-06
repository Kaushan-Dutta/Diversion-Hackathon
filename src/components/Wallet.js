import React,{useEffect,useState} from 'react';
import Metamask from '../images/metamask.png';
import { ethers } from 'ethers';


const Wallet = (props) => {
  const [provider,setProvider]=useState(null);
  const [account,setAccount]=useState('');
  
  useEffect(()=>{

    async function loadContents(){

      

      let connected;
      if(window.ethereum){
        connected=window.ethereum;
        try{
          await connected.enable();
        }
        catch(err){
          console.log(err);
        }
       }
      const provider=new ethers.providers.Web3Provider(connected);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = ethers.utils.getAddress(accounts[0]);
      setProvider(provider);
      setAccount(account);

    }
     
    loadContents();
  },[]);

  useEffect(()=>{
     props.setConnection({provider,account});
  },[provider,account]);

  return (
    <>
     <div className='h-screen w-screen place-content-center grid bg-slate-700'>
      <div className='box max-w-sm rounded-md shadow-lg px-10 py-5 bg-slate-600  place-items-center grid'>
           <img src={Metamask} width="50px" style={{cursor:'pointer'}} className="text-center"/>
           <h1 className='text-center text-2xl text-zinc-300 mt-3' style={{fontFamily:'Montserrat, sans-serif'}}>Connect your Metamask wallet to continue...</h1>
           
      </div>
    </div>
    
    </>
  )
}

export default Wallet