import React,{useEffect,useState} from 'react';
import { ethers } from 'ethers';
import './Donation.css';

const DonationList = (props) => {
  const [transactions,setTransactions]=useState([]);
  useEffect(()=>{
      async function loadContents(){
          let array=[];
          const Transactions=await props.contract.showTransactions();
          console.log("++++++++++++++",Transactions);
          for(let i=0;i<Transactions.length;i++){

            let object={sender:Transactions[i].sender,txHash:Transactions[i].txHash,amount:Transactions[i].amount};
            console.log("+++",object)
            array.push(object);
           
          }
          console.log("............",array);
          setTransactions(array);
      }
      loadContents();
      console.log("......==========.....",transactions);
  },[])
  return (
    <div className='donation  px-5 py-5 mx-3 my-3' >
      <div className='heading'>
        <span>User</span>
        <span>Address</span>
        <span>Amount</span>
      </div>
      <hr />

      <div className='transactions'>
   
        
        
         {transactions.map((object,idx)=>{
          console.log("99999999999999999",object.sender);
          return(
                  <div className='transaction my-3' key={idx}>
                    <span><img src={"https://avatars.dicebear.com/api/identicon/"+object.sender+"1.svg" }/></span>
                    <span><a href={"https://mumbai.polygonscan.com/tx/"+object.txHash}>{(object.txHash).slice(0,5)+"..."+(object.txHash).slice(-5,)}</a></span>
                    <span>{object.amount}&nbsp;ETH</span>
                  </div>)
        })} 
      </div>
    </div>
  )
}

export default DonationList