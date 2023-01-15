require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
   
  networks:{
    polygon:{
      url:'https://polygon-mumbai.g.alchemy.com/v2/1zpmBqA2jC1DVr3aIyY7lJtkHoijqQf5',
      accounts:[process.env.REACT_PRIVATE_KEY]
    }
  },
  paths:{
    artifacts:'./src/artifacts',
  }
};
