---
sidebar_position: 1
---

# Building with Remix

This tutorial aims to instruct how to deploy a basic smart contract using [Remix](https://remix.ethereum.org)

We will deploy a contract that stores a value inside a variable and displays it. The tutorial is intended to be done on the Remix IDE which is available online at [Remix](https://remix.ethereum.org).

## Purpose 
This guide is designed to help new developers understand the basics and deploying a contract on the EXX network using Remix - an easy to use platform fully online and does not require logins.

## Actions 

- Go to [Remix](https://remix.ethereum.org)
- Connect to EXX Testnet via Metamask
- Create a file 
- Copy and paste the Storage.sol file
- Compile the smart contract
- Deploy the smart contract


## Start building with Remix

### Go to [remix](https://remix.ethereum.org)

### Connect to EXX Testnet
To connect to EXX Testnet, we have to configure Metamask to direct to our RPC. If you don't have Metamask setup or installed, follow the tutorial on [how to setup a Metamask account](/docs/wallet/Metamask/using-metamask.md)

- Open Metamask and  click on Networks

- Select custom RPC or Add Netork 

- Enter `EXX Testnet `as the network name 

- Enter `https://ds2.exx.network` for the RPC

- Enter `47` for the chain ID

- Enter `EXX` for the currency symbol

- Enter `https://exxscan.com` for the Block explorer

![Network](/img/NetworkConfiguration.png)

- save it and copy your wallet address.


### How to get free Testnet tokens 

- Go to the [EXX Testnet Faucet ](https://faucet.exx.network)

![faucet](/img/faucet.png)

- Paste your wallet address in the input field.

- Click on `Submit` to continue .

- Click on `Transfer` to receive the tokens.

## Getting started
Remix is an EVM (Ethereum Virtual  Machine) IDE: an online platform to develop smart contracts. 
To start building a smart contract, click on New File and name it `storage.sol`.
![remix](/img/Remix.png)

### Smart Contract
Copy and paste the smart contract below into the field available inside the storage.sol on Remix.

```js title="storage.sol" 
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}

```

![soliditycode](/img/SimpleStorageCode.png)

The first line tells you that the source code is licensed under the GPL version 3.0. Machine-readable license specifiers are important in a setting where publishing the source code is the default.

The next line specifies that the source code is written for Solidity version 0.4.16, or a newer version of the language up to, but not including version 0.9.0. This is to ensure that the contract is not compilable with a new (breaking) compiler version, where it could behave differently. [Pragmas](https://docs.soliditylang.org/en/v0.8.16/layout-of-source-files.html#pragma) are common instructions for compilers about how to treat the source code (e.g. [pragma once](https://en.wikipedia.org/wiki/Pragma_once)).

A contract in the sense of Solidity is a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain. The line `uint storedData`; declares a state variable called `storedData` of type uint (unsigned integer of 256 bits). You can think of it as a single slot in a database that you can query and alter by calling functions of the code that manages the database. In this example, the contract defines the functions `set` and `get` that can be used to modify or retrieve the value of the variable.

###  Compile the contract
- Go to Solidity Compiler 
- Select Compiler Version to 0.8.7
- Compile storage.sol
![soliditycode](/img/Compiler.png)


After successful compilling, it will show a green tick.

### Deployment 

:::note
Ensure you are connected to EXX Testnet 
:::

- Select Injected Provider Metamask in the Environment dropdown and your contract

![soliditycode](/img/DeploymentNetwork.png)

- Accept connection request from Metamask, if you haven't before.

![deploying](/img/Deploying1.png)

- Click on Deploy to deploy on the EXX testnet

![deployed](/img/Deployed.png)

Congrats! You have deployed your first EXX smart contract.
