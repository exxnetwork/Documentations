---
sidebar_position: 2
---

# Building with Truffle 

## Overview 
[Truffle](https://trufflesuite.com/) is a blockchain development environment, which you can use to create and test smart contracts on the EXX network and other EVM compatible.

### Purpose 
This guide is designed to help new developers understand the basics and deploying a contract on the EXX network using Truffle.

### Actions 
- Install and set up Truffle
- Deploy contract on EXX network 

## Setting up the environment

There are a few technical requirements before you can start developing. 

If you do not have, please install the following:

- [Node.js](https://nodejs.org/en/download/) v12+ 
- [Git](https://git-scm.com/downloads)

Once we have the two installed, use this command to install Truffle:

```bash 
npm install -g truffle
```

To verify that Truffle is installed properly, type `truffle version` on a terminal. If you see an error, make sure that your npm modules are added to your path.

## Creating a project

### Metacoin  

Metacoin is one of the projects in the [Truffle Boxes](https://trufflesuite.com/boxes/). 

- Create a new dir for the truffle project 

```bash 
mkdir MetaCoin

```

- Change to the newly created directory

``` bash 
cd MetaCoin
```

- Download Metacoin box: 

```bash 
truffle unbox metacoin
```

- Copy the smart contract in `Metacoin.sol` here:

```js title="metacoin.sol"
// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;

import "./ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not ERC20 compatible and cannot be expected to talk to other
// coin/token contracts.

contract MetaCoin {
    mapping (address => uint) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() {
        balances[tx.origin] = 10000;
    }

    function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Transfer(msg.sender, receiver, amount);
        return true;
    }

    function getBalanceInEth(address addr) public view returns(uint){
        return ConvertLib.convert(getBalance(addr),2);
    }

    function getBalance(address addr) public view returns(uint) {
        return balances[addr];
    }
}

```

:::note 

Notice that ConvertLib is being imported just after the `pragma` statement. In this project, we will be deployed two smart contracts at the end: one is Metacoin, containing all the send and balance logic; the other is ConvertLib, a library used to convert values.
:::

## Compiling the contract 

Compile the contract using: 

``` js 
truffle compile
```

You should see a successful message in the terminal


## Configuring the contract 

Before deploying the contract, we need to set up the truffle-config.js file, inserting network and compilers data. 

- Go the truffle-config.js file.
- Update the truffle-config with the `EXX network details`.

```bash title="truffle-config.js"
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    exx_testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://ds2.exx.network`),
      network_id: 47,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
        version: "0.8.13",
    }
  }
}
```

:::note 
Notice, it requires mnemonic to be passed in for exx_testnetProvider, this is the seed phrase for the account you'd like to deploy from. 
:::

Create a new .secret file in the root directory and enter your 12-word mnemonic seed phrase to get started. To get the seed words from Metamask wallet, you can go to Metamask settings, then from the menu, choose Security and Privacy where you will see a button that says "reveal seed words".

## Deploying on EXX Network

Ensure you have EXX tokens for gas fees. You can claim for free using the [faucet](https://faucet.exx.network)

Deploy using 
```js
truffle migrate --network exx
```

Congratulations! 
You have successfully deployed a Smart Contract using Truffle. Now you can interact with it check your deployment status on [EXXscan](https://exxscan.com/)