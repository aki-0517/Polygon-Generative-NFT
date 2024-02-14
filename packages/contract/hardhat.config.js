// require("@nomicfoundation/hardhat-toolbox");
// require('dotenv').config();

// const { API_URL, PRIVATE_KEY } = process.env;

// module.exports = {
//   solidity: "0.8.17",
//   defaultNetwork: "sepolia",
//   networks: {
//     sepolia: {
//       url: API_URL,
//       accounts: [PRIVATE_KEY]
//     }
//   },
// };

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const { API_URL, PRIVATE_KEY, ETHERSCAN_API, POLYGON_URL } = process.env;

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: POLYGON_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API,
  },
};

