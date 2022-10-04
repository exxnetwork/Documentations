---
sidebar_position: 4
sidebar_label: Sample Full Stack Dapp
---

# Building a full stack Dapp
This tutorial is a brief introduction to full stack development on the blockchain. This procedure will allow you to be able to develop and deploy your dapps on the EVM, testnet or even the mainnet.

## What we are building
We are developing a simple greeter dapp that allows you to display a greeting and also change the greeting that displays.

### Prerequisites 
In this tutorial, there are a few requirements
1. [Node](https://nodejs.org/en/download/)
2. [Visual Studio Code](https://code.visualstudio.com/download)
3. [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#overview) 
4. [Metamask](https://metamask.io/download/) 

    Once you have all these installed, you can start development.

### Creating React
To get started, we'll create a new React application:

```bash 
npx create-react-app react-dapp
```

Next, change into the new directory and install ethers.js and hardhat using either NPM or Yarn:

```bash
npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
```

### Installing an EVM environment
Next, initialize a new Ethereum Development Environment with Hardhat:

```bash 
npx hardhat
```

Now you should see the following artifacts created for you in your root directory:
 
- **hardhat.config.js** – The entirety of your Hardhat setup (that is, your config, plugins, and custom tasks) is contained in this file.
- **scripts** – A folder containing a script named sample-script.js that will deploy your smart contract when executed.
- **test** – A folder containing an example testing script.
- **contracts** – A folder holding an example Ethereum smart contract.

    In your hardhat.config.js file, modify your module.exports to look like this:

```bash 
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 47
    }
  }
};

```

*Now you can go on to the smart contract.*

### Smart contract 
The contact will perform two main tasks:
- Display a greeting
- Set a greeting

First we have to set the license and the solidity compiler version. It is important that the solidity compiler version you set in your config file be higher or equal to the compiler version in your contract

```jsx
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
```

Now we declare the variables in the contract, since it is a basic contract, only one variable is needed which is the greeting.

```js
string greeting;
```
The default value of a string is “ ”, which is clearly not a greeting, we will love to have a greeting set already in the variable when the contract is being deployed. This is where a constructor comes in. 
A constructor is used to set values or perform operations in a contract when it is being deployed. It is also used to assign values to immutable variables (Immutable variables are the variables that will never change or have a new value all through a contract, e.g admin wallet address).

The constructor in this case will take in one string input, which will serve as the original greeting value.

```js
constructor(string memory _greeting) {
    greeting = _greeting;
  }
```

Now that we have a constructor that sets a value, we need a function that will display the value, an alternative is to set the greeting variable to have a public visibility like this;

```js
string public greeting;
```

But for this tutorial, we will go for the function. A function that returns a value in solidity has a syntax of its own, it must have the basic requirements of a function which is “function”, “nameOfFunction()”, “external/internal/public/private” and then it needs to have either “View” or “Pure” and then “returns(data_type)”. It is important to state the exact datatype being returned in the parenthesis, in this example, the datatype will be string memory.

```js
function greet() public view returns (string memory) {
    return greeting;
  }
```

Now, remember that we not only want to display the greeting, we also want to change what the greeting is, so we will be needing another function to do this job.
```js
function setGreeting(string memory _greeting) public {
    console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
    greeting = _greeting;
  } 
```

Together, your contract should look like this

```js title=greeting.sol
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "hardhat/console.sol";


contract Greeter {
  string greeting;

  constructor(string memory _greeting) {
    console.log("Deploying a Greeter with greeting:", _greeting);
    greeting = _greeting;
  }

  function greet() public view returns (string memory) {
    return greeting;
  }

  function setGreeting(string memory _greeting) public {
    console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
    greeting = _greeting;
  }
}
```

Once everything is done correctly till this point, you can now compile the contract by running this command in your VScode terminal
```bash
npx hardhat compile
```
You will be needing the ABI of the contract to go on with integration. The ABI is created when the contract is compiled, after running the command above, you will see a new folder called artifacts show up. Inside the directory, there is a JSON file that contains all the ABi. 
You can now import it in your javascript file like this
```js
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'
```
We can now reference the ABi like this
```js
console.log("Greeter ABI: ", Greeter.abi)
```


### Deploying the contract 
Using Hardhat, it’s pretty easy to deploy a contract on a local network, this comes with different accounts and it lets you perform transactions just like the real blockchain. Open your CLI and run 

   npx hardhat node

Once you run this command, a list of addresses and their private keys will be displayed. These are 20 test accounts and addresses created for us that we can use to deploy and test our smart contracts. Each account is also loaded up with 10,000 test Ether. In a moment, we'll learn how to import the test account into Metamask so that we can use it.

![image1](/img/image1.jpg) 

Now we will deploy the contract on a test network, we need to change scripts/sample-script.js to scripts/deploy.js. Now we can run the deploy script and deploy the contract.

    npx hardhat run scripts/deploy.js --network localhost

When the contract deploys, it should return something like this 

**Greeter deployed to: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0**

Copy the address and keep it somewhere because it will be used to integrate the contract to the front end application.
To send transactions to the smart contract, we will need to connect our MetaMask wallet using one of the accounts created when we ran npx hardhat node. In the list of contracts that the CLI logs out, you should see both an Account number as well as a Private Key:

```bash 
➜  react-defi-stack git:(main) npx hardhat node
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========
Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
```

We can import this account into MetaMask in order to start using some of the fake Eth available there. To do so, first open MetaMask and update the network to be Localhost 8545:


![image2](/img/image2.jpg) 

Next, in MetaMask click on Import Account from the accounts menu:

![image3](/img/image3.jpg) 

Copy then paste one of the Private Keys logged out by the CLI and click Import. Once the account is imported, you should see the Eth in the account:

![image4](/img/image4.jpg) 

Now that we have deployed our smart contract and set up our account, we can start interacting with it from the React app.

### Connecting to the front end
In this tutorial, we will not be discussing the development of the front end, we are focusing on the functionality, this will give you the freedom to be creative with the front end. This part was developed using reactJS.

There are two things we want the interface to perform 
1. Fetch the current value of greeting from the smart contract
2. Allow a user to update the value of the greeting

To do this, open src/App.js and update it with the following code, setting the value of greeterAddress to the address of your smart contract:

```js title=app.js
import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

// Update with the contract address logged out to the CLI when it was deployed 
const greeterAddress = "your-contract-address"

function App() {
  // store greeting in local state
  const [greeting, setGreetingValue] = useState()

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // call the smart contract, read the current greeting value
  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.greet()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (!greeting) return
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount()
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
      const transaction = await contract.setGreeting(greeting)
      await transaction.wait()
      fetchGreeting()
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
      </header>
    </div>
  );
}

export default App;
```

To test it, start the react server by entering 

    npm start

When the app loads, you should be able to fetch the current greeting and log it out to the console. You should also be able to make updates to the greeting by signing the contract with your MetaMask wallet and spending the test Ether.


![image5](/img/image5.png) 

### Congrats 
You have now created a dapp running on your local environment.