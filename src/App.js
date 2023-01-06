import logo from './logo.svg';
import './App.css';
import Wallet from './components/Wallet';
import Chain from './components/Chain';
import Navbar from './components/Navbar';
import Organization from './components/Organization';
import DonationList from './components/DonationList';
import React,{useEffect,useState} from 'react';
import { ethers } from 'ethers';



function App() {
  const [wallet,setWallet]=useState(false);
  const [chain,setChain]=useState(false);
  const [account,setAccount]=useState('Not Connected');
  function setConnection({provider,account}){
    if(provider && account){
      setAccount(account);
      setWallet(true);
    }
  }
  function getChain(networkId){
    if(networkId=='80001'){
      setChain(true)
    }
  }
  useEffect(()=>{
    window.ethereum.on("accountsChanged", () => {
      window.location.reload();
    }); 

    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
  })
  return (
   <>
     <Navbar account={account}/>
     {
     wallet==false?<Wallet setConnection={setConnection}/>:chain==false?<Chain getChain={getChain}/>:
     <div className='flex justify-between items-start px-20 pt-32'>
      <Organization/>
      <DonationList/>
     </div>
    }
   </>
  );
}

export default App;
