# NFT-Me
NFT-Me is a smart contract and companion web app that allows users to capture images from their webcam and mint them as NFTs. 

Included is source code for a smart contract defining an 'NFT-Me' ERC721 token, and a React app frontend which interacts with the contract. The app provides an interface for connecting a Metamask wallet, capturing webcam images, and selecting which network to mint to.

Images and their NFT metadata are uploaded and stored on [IPFS](https://ipfs.io/). The metadata's IPFS URI is included in a call to the contract's `mint` function, which the user is prompted to sign. 

Links to view the minted NFT on OpenSea and view the transaction details on the network's blockchain explorer are provided.

## Contract Information
By default, the app is configured to interact with deployed versions of the NFT-ME contract on the following networks: 
- Polygon Mainnet: 
- Polygon Mumbai Testnet: 0xd0bB2E123A729caC9B413783bAB72572A0a17C5D

## Setup
Node.js is required to run this application. Begin by cloning this repository and installing the required Node packages. 

```bash
# Clone this repository
git clone https://github.com/rhammell/nft-me.git

# Go into the repository
cd nft-me

# Install required node packages
npm install
```

Developer specific keys are required for smart contract deployment and Moralis server configuration. These values must be defined as environment variables within an `.env` file in the root directory.

Copy `.env.example` as `.env` and replace the deault values with your unique values. The list of required variables are listed below.

| Variable                         | Description                                                            |
|----------------------------------|------------------------------------------------------------------------|
| REACT_APP_MORALIS_APPLICATION_ID | Moralis server Application ID                                          |
| REACT_APP_MORALIS_SERVER_URL     | Moralis server URL                                                     |
| MNEMONIC                         | 12 word mnemonic for wallet used to deploy contracts                   |
| POLYGON_NODE_URL                 | URL for Polygon mainnet node; Ex. Infura or Alchemy                    |
| MUMBAI_NODE_URL                  | URL for Mumbai testnet node; Ex. Infura or Alchemy                     |
| POLYGONSCAN_API_KEY              | Polygonscan.com API Key; Required for contract verification            |

## Smart Contract Setup

Smart contract related source code is located in the `Truffle` directory, where a Truffle project is initiated. Follow the below steps to deploy copies of the 'NFT-Me' contract to the Polygon Mainnet and Mumbai Testnet, and configure the frontend to interact with them.

```bash
# Navigate into Truffle project 
cd Truffle

# Deploy a copy of the contract to Polygon Mainnet and Mumbai Testnet
npx truffle migrate --network polygon --reset
npx truffle migrate --network mumbai --reset

# Verify the contracts on each explorer
npx truffle run verify NFTMe --network polygon
npx truffle run verify NFTMe --network mumbai

# Copy contract details into frontend 
node scripts/copyContractInfo.js
```

## Development Server

Depoly a local development server to launch the frontend app: 

```bash
# Start development server (from project root directory)
npm start
```

## Usage
<p align="center">
  <img src="img/interface.png" width="600">
</p>
