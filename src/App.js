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
  const [contract,setContract]=useState(null);
  const [provider,setProvider]=useState(null);

  function setConnection({provider,account,contract}){
    if(provider && account && contract){
      setAccount(account);
      setWallet(true);
      setContract(contract);
      setProvider(provider);
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
   < div className='body'>
     <Navbar account={account}/>
     {
     wallet==false?<Wallet setConnection={setConnection}/>:chain==false?<Chain getChain={getChain}/>:
     <div className='crowd-fund px-5'>
       <Organization account={account} provider={provider} contract={contract}/>
       <DonationList account={account} provider={provider} contract={contract}/>
     </div>
    }
   </div>
  );
}

export default App;
