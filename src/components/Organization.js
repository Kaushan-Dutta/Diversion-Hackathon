import React,{useEffect,useState} from 'react';
import Image1 from '../images/CrowdFund.jpg'
import Image2 from '../images/NFT.JPG';
import { ethers } from 'ethers';
import './Organization.css';

const Organization = (props) => {
  const [amount,setAmount]=useState('');
  const [contract,setContract]=useState(null);
  const [account,setAccount]=useState('')
  const [totContributed,setTotContributed]=useState(0);

  useEffect(()=>{
   async function loadContents(){
    //const provider = ethers.getDefaultProvider();
    setContract(props.contract);
    setAccount(props.account);
    setTotContributed(ethers.utils.formatUnits(await props.provider.getBalance(props.contract.address)));

   }
   loadContents(); 
  },[])

 function toWei(amount){
    return(ethers.utils.parseEther(amount.toString(),'ether'))
 }

 async function sentAmount(event){
    event.preventDefault()
    const sendAmount=await contract.contribute({value:toWei(amount)});
    await sendAmount.wait();
    
    const sendDetails=await contract.addTransaction(sendAmount.hash,amount);

 }
  return (
    <div className='organization mx-3 px-5 py-5 my-3' >
        <div className='mint-image my-3'>
           <img src={Image1} className='mx-2' />
           <img src={Image2} className='mx-2'/>
        </div>
        <div className='contents'>
            <div className='raised-amount my-2'>
                <span className='py-3 px-5'>{"Total Fund RAISED: "+ totContributed+" ETH"}</span>
            </div>
            <p>Img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>
            <div className='interact-contract my-2'>
                <div className='donate-fund py-3 px-3 mx-1 my-1'>
                    <input type="text" className='' placeholder='Enter the amount' value={amount} onChange={(event)=>{
                        setAmount(event.target.value)
                    }}/>
                    <button className='' onClick={sentAmount}>Send ETH</button>
                </div>
                <div className='withdraw my-1 mx-1 my-1'>
                    <button className="py-3 px-3" onClick={async()=>{
                        console.log("Withdraw")
                        const withdraw=await contract.withdraw();
                    }}>Withdraw(Only Owner)</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Organization