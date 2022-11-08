require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || 'https://eth-rinkeby.com';
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL || 'https://polygon.com';
const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || '0x34fe';
const POLYGON_API_KEY = process.env.POLYGON_API_KEY || '';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  defaultNetwork: 'hardhat',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [WALLET_PRIVATE_KEY],
      chainId: 5,
    },
    mumbai: {
      url: POLYGON_RPC_URL,
      accounts: [WALLET_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGON_API_KEY,
    },
  },
};
