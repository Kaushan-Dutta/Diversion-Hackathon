// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract V3Fund is ERC721URIStorage,Ownable{

     uint public contribution;
     struct Transaction{
          address sender;
          string  txHash;
          string amount;
     }
     
     Transaction[] public Transactions;
     uint public maxSupply;

     string svg1=
               '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1080" height="1080" viewBox="0 0 1080 1080" xml:space="preserve"><defs></defs><rect x="0" y="0" width="100%" height="100%" fill="transparent"></rect><g transform="matrix(1 0 0 1 540 540)" id="0db2a1df-28f5-4205-868f-9ea05aaaacac"  ><rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(55,181,185); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  x="-540" y="-540" rx="0" ry="0" width="1080" height="1080" /></g><g transform="matrix(1 0 0 1 540 540)" id="314d77d4-f6f5-44b4-852b-cc2540663e87"  ></g><g transform="matrix(5.54 0 0 5.54 821.5 922)" id="fc83c0be-e60b-4e96-b140-7b0a0c70dfcd"  ><rect style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(207,190,13); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  x="-37.4585" y="-19.4165" rx="0" ry="0" width="74.917" height="38.833" /></g><g transform="matrix(0.66 0 0 0.66 828.96 927.82)" style="" id="02405e21-4cc4-4e3d-8bc4-4b3c9cd20bb3"  ><text xml:space="preserve" font-family="Alegreya" font-size="80" font-style="normal" font-weight="700" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(46,57,54); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-226.44" y="25.13" >From V3Fund</tspan></text></g><g transform="matrix(0.7 0 0 0.7 259.48 107.82)" style="" id="ac64816a-e75a-484d-b636-0e105d7b17cb"  ><text xml:space="preserve" font-family="Alegreya" font-size="80" font-style="normal" font-weight="700" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-291.24" y="25.13" style="white-space: pre; ">Support Us!!</tspan></text></g><g transform="matrix(1 0 0 1 540 439.57)" style="" id="00f3c8f6-c5a0-4856-93cc-e3e145882593"  ><text xml:space="preserve" font-family="Raleway" font-size="105" font-style="normal" font-weight="900" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,230,230); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan x="-99.59" y="32.98" >#';
     string svg2='</tspan></text></g></svg>';



     
     constructor()ERC721("CrowdFund","ENIC"){
          
     }

     function contribute()public payable{
          require(msg.value>0,"Enter some amount");
          maxSupply+=1;
          
     
          if(msg.value >= 0.1 ether){
               
               _mint(msg.sender,maxSupply);
               string memory svg3=string(abi.encodePacked(svg1,Strings.toString(maxSupply),svg2));
               string memory metaData=Base64.encode(abi.encodePacked(
               '  {"name":"Rainbow Token"  ,',
               ' "description":"A unique token for those who donated more than 0.1 ETH"  ,',
               '  "image": "data:image/svg+xml;base64, ',
               Base64.encode(bytes(svg3)),' "} '

               ));
               string memory tokenURI=string(abi.encodePacked("data:application/json;base64,",metaData));
               _setTokenURI(maxSupply,tokenURI);
          }
     }

     function showTransactions()public view returns(Transaction[] memory ){
          return(Transactions);
     }

     function addTransaction(string memory _txHash,string memory _amount)public{
          Transactions.push(Transaction(msg.sender,_txHash,_amount));
     }

     function withdraw()public onlyOwner{
          payable(msg.sender).transfer(address(this).balance);
     }
//the withdraw function will withdraw the total amount collected
     
}
