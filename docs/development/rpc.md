---
sidebar_label: RPC
---

# JSON-RPC Endpoint

## Available Resources

### Testnet (ChainID 0x2F, 47 in decimal)

BSC RPC Endpoints:

!!! NOTE
	You can make `eth_getLogs` requests with up to a 5K block range.
	If you need to pull logs frequently, we recommend using WebSockets to push new logs to you when they are available.

Recommend

- https://ds2.exx.network


### Rate limit

The rate limit of EXX endpoint on testnet is 1K/min.


## Start HTTP JSON-RPC

You can start the HTTP JSON-RPC with the --rpc flag
```bash
## testnet
geth attach https://ds2.exx.network/
```

## JSON-RPC methods

Please refer to this [wiki page](https://github.com/ethereum/wiki/wiki/JSON-RPC) or use Postman: <https://documenter.getpostman.com/view/4117254/ethereum-json-rpc/RVu7CT5J?version=latest>