
import React,{useEffect,useState} from 'react';
import Metamask from '../images/metamask.png';
import { ethers } from 'ethers';
import './Wallet.css';
import Contract from '../artifacts/contracts/V3Fund.sol/V3Fund.json';


const Wallet = (props) => {
  const [provider,setProvider]=useState(null);
  const [account,setAccount]=useState('');
  const [contract,setContract]=useState(null);
  
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
      const signer=provider.getSigner();
      const contract=new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS,Contract.abi,signer);
      setProvider(provider);
      setAccount(account);
      setContract(contract);

    }
     
    loadContents();
  },[]);

  useEffect(()=>{
     props.setConnection({provider,account,contract});
  },[provider,account,contract]);

  return (
    <>
     <div className='wallet'>
      <div className='contents px-5 py-3 mx-5 '>
           <img src={Metamask} width="50px" style={{cursor:'pointer'}} className="text-center"/>
           <p className=''>Connect your Metamask wallet to continue...</p>
           
      </div>
    </div>
    
    </>
  )
}

export default Wallet 