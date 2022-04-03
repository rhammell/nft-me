require('dotenv').config({path: './../.env'});

const HDWalletProvider = require('@truffle/hdwallet-provider');
const { 
  MNEMONIC, 
  RINKEBY_NODE_URL, 
  MUMBAI_NODE_URL, 
  ETHERSCAN_API_KEY,
  POLYGONSCAN_API_KEY
} = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby:{
      provider: () => new HDWalletProvider(MNEMONIC, RINKEBY_NODE_URL),
      network_id: 4
    },
    mumbai: {
      provider: () => new HDWalletProvider(MNEMONIC, MUMBAI_NODE_URL),
      network_id: 80001
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",
    }
  },

  // Required for etherscan/polygonscan verification using truffle-plugin-verify package
  plugins: [
    'truffle-plugin-verify'
  ],

  // API Keys requried for etherscan/polygonscan verification
  api_keys: {
    etherscan: ETHERSCAN_API_KEY,
    polygonscan: POLYGONSCAN_API_KEY,
  }
};