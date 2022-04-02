# NFT-Me
NFT-Me is a smart contract and companion web app that allows users to capture images from their webcam and mint them as NFTs.

Included is smart contract source code that defines an 'NFT-Me' ERC721 token, intended to be deployed to the Ethereum Rinkeby Testnet and Polygon Mumbai Testnet. The React app frontend provides an interface for users to connect their MetaMask wallet, capture webcam images, and select which network to mint to. 

Images and metadata are uploaded to IPFS, and included in the transaction to create a new token on the contract. 

## Setup
Node.js is required to run this application. Begin by cloning this repository and installing the required Node packages. 

```bash
# Clone this repository
git clone 

# Go into the repository
cd 

# Install required node packages
npm install
```

Developer specific information and keys are required for smart contract deployment and Moralis server configuration. 

These values must be defined as environment variables within an `.env` file in the root directory.

Rename `.env.example` to `.env` and replace the deault values with your unique values. The list of required variables are listed below.

| Variable                         | Description                                                            |
|----------------------------------|------------------------------------------------------------------------|
| REACT_APP_MORALIS_APPLICATION_ID | Application ID provided for a Moralis server                           |
| REACT_APP_MORALIS_SERVER_URL     | URL provided for a Moralis server                                      |
| MNEMONIC                         | 12 word mnemonic for wallet used to deploy contracts                   |
| MUMBAI_NODE_URL                  | URL for Mumbai network node. Ex. Moralis Nodes or Infura.       |
| RINKEBY_NODE_URL                 | URL for Rinkeby network node. Ex. Moralis Nodes or Infura.      |
| ETHERSCAN_API_KEY                | Etherscan.io API Key. Required for Rinkeby contract verification. |
| POLYGONSCAN_API_KEY              | Polyscan.con API Key. Required for Mumbai contract verification.  |

## Smart Contract Setup

Smart contract related source code is located in the `Truffle` directory, where a Truffle project is initiated. Follow the below steps to deploy copies of the 'NFT-Me' contract to both testnets, and configure the frontend to interact with them.

Begin by up updating the 
Update .env file 

`cd Truffle`

Deploy contracts to testnets

`npx truffle migrate --network rinkeby --reset`
`npx truffle migrate --network mumbi --reset`

Verify Contracts

`npx truffle run verify NFTMe --network rinkeby`

`npx truffle run verify NFTMe --network mumbai`

Copy contract info to frontent sourcecode

`node scripts/copyContractInfo.js`

Add to OpenSea

`https://testnets.opensea.io/get-listed/step-two`

## Start server

Update .env file 

