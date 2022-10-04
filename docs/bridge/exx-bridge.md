---
sidebar_position: 1
sidebar_label: EXX Bridge
---

# EXX Bridge 
EXX bridge is an interface for users to exchange assets across chain and specifically to port tokens to the EXX network. At the time of launch, we will feature the following networks for cross chain transactions:
- EXX
- Ethereum
- Binance Smart Chain 


:::note
There is no increase or decrease in the circulating or total supply of any token when it crossed using the bridge. 
:::

## How the bridge works
The bridge uses a withdraw / deposit technic which is a literal explanation of its architecture. We initially deposit tokens across all chains the bridge will function and then we call functions to mint or lock tokens depending on `current chain` and  `destination chain` of the tokens.

### For example
Adam wants to bridge 100 USDT from Binance Smart Chain to EXX network, 
100 USDT leaving Binance Smart Chain is locked on it's current chain (Binance Smart Chain) then minted and deposited to Adam's wallet on the destination chain (EXX network). 
- 100 USDT is locked on BSC and minted on EXX network and as a pegged token (1:1).
- To bridge tokens back to Binance Smart Chain, the USDT is burnt on EXX network and unlocked on BSC.