const {expect}=require('chai');
const { ethers } = require('hardhat');
function toWei(getValue){
    return(ethers.utils.parseUnits(getValue.toString(),'ether'));
}

describe("Testing V3Fund",()=>{
    let owner,acc1,acc2;
    let getContract,contract;
    beforeEach(async()=>{

        [owner,acc1,acc2]=await ethers.getSigners();
        getContract =await ethers.getContractFactory('V3Fund');
        contract=await getContract.deploy();
        
    });

    describe("Contribute to contract",()=>{
        it("Check for supply",async()=>{
            const getSupply=await contract.maxSupply();
            //console.log(ethers.utils.formatUnits(getSupply));
            expect(getSupply).to.equal(0);
        });
        it("Contribute",async()=>{
            const contribute=await contract.connect(acc1).contribute({value:toWei(0.01)});
            await contribute.wait();
            const addTransaction=await contract.connect(acc1).addTransaction(contribute.hash,toWei(0.01));
            expect(await contract.maxSupply()).to.equal(1);
            const transactions=await contract.showTransactions();
            for(let i=0;i<transactions.length;i++){
                const [sender,txHash,amount]=transactions[i];
                console.log(sender,txHash,ethers.utils.formatUnits(amount));
            }

        });
        it("Display transactions",async()=>{

        })
    })
})