---
sidebar_position: 1
---

# EXX Native token
EXX is the native token of EXX network, similar to ETH in Ethereum. EXX is used to interact with EXX Testnet and pay gas fees. XRC20  is the standard toke type on the EXX network just as ERC20 is standard for the ethereum blockchain.

## EVM Native Asset Call

An EVM Transaction is composed of the following :

- `nonce` Scalar value equal to the number of transactions sent by the sender.
- `gasPrice` Scalar value equal to the number of Wei (1 Wei = 10^-18 AVAX) paid per unit of gas to execute this transaction.
- `gasLimit` Scalar value equal to the maximum amount of gas that should be used in executing this transaction.
- `to` The 20 byte address of the message call's recipient. If the transaction is creating a contract, to is left empty.
- `value` Scalar value of native asset (AVAX), in Wei (1 Wei = 10^-18 AVAX), to be transferred to the message call's recipient or in the case of a contract creation, as an endowment to the newly created contract.
- `v`, `r`, `s` Values corresponding to the signature of the transaction.
- `data` Unlimited size byte array specifying the input data to a contract call or, if creating a contract, the EVM bytecode for the account initialization process.

## EXX Testnet token 
In order to interact EXX Testnet, you need to have the EXX native token. On testnet, it is free to claim these tokens at specified intervals. 

*To claim  tokens:* use the [faucet](https://faucet.exx.network)

## How to use the faucet 

1. Connect to the faucet via https://faucet.exx.network

![faucet](/img/faucet.png)

2. Enter the wallet address you want faucet to send EXX to.

3. Click on `Submit`.

4. Click on `Transfer` to receive the tokens.
