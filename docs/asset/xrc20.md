---
sidebar_position: 2
sidebar_label: XRC20 Tokens
---

# XRC20: Tokens on EXX

## 1.  Summary
The XRC20 interface as proposed and implemented through the [EIP20](https://eips.ethereum.org/EIPS/eip-20)

## 2.  Abstract
The following standard defines the implementation of APIs for token smart contracts. It is proposed by deriving the ERC20 protocol of Ethereum and provides the basic functionality to transfer tokens and allow tokens to be approved so they can be spent by another on-chain third party.

## 3.  Motivation
A standard interface allows any tokens on EXX to be used by other applications including wallets, decentralised apps, decentralised exchanges etc. in a consistent way. 

## 4.  Specification

### 4.1 Token

**NOTES**:
- The following specifications use syntax from Solidity **0.5.16** (or above)
- Callers MUST handle false from returns (bool success). Callers MUST NOT assume that false is never returned!

####  4.1.1 Methods

##### name
```
function name() public view returns (string)
```
- Returns the name of the token - e.g. "MyToken".
- **OPTIONAL** - This method can be used to improve usability, but interfaces and other contracts MUST NOT expect these values to be present.

##### symbol
```
function symbol() public view returns (string)
```
- Returns the symbol of the token. E.g. “HIX”.
- **OPTIONAL** - This method can be used to improve usability, but interfaces and other contracts MUST NOT expect these values to be present.

##### decimals
```
function decimals() public view returns (uint8)
```
- Returns the number of decimals the token uses - e.g. 8, means to divide the token amount by 100000000 to get its standard representation.
- **OPTIONAL** - This method can be used to improve usability, but interfaces and other contracts MUST NOT expect these values to be present.

##### totalSupply
```
function totalSupply() public view returns (uint256)
```
- Returns the total token supply. 

##### balanceOf
```
function balanceOf(address _owner) public view returns (uint256 balance)
```
- Returns the account balance of another account with address `_owner`.

##### getOwner
```
function getOwner() external view returns (address);
```
- Returns the xrc20 token owner.

##### transfer
```
function transfer(address _to, uint256 _value) public returns (bool success)
```
- Transfers `_value` amount of tokens to address `_to`, and MUST fire the Transfer event. The function SHOULD throw if the message caller’s account balance does not have enough tokens to spend.
- **NOTE** - Except transfer of 0 value is disabled in a contract, Transfers of 0 values MUST be treated as normal transfers and fire the Transfer event.

##### transferFrom
```
function transferFrom(address _from, address _to, uint256 _value) public returns (bool success)
```
- Transfers `_value` amount of tokens from address `_from` to address `_to`, and MUST fire the Transfer event.
- The transferFrom method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf. This can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies. The function SHOULD throw unless the `_from` account has deliberately authorized the sender of the message via some mechanism.
- **NOTE** - Except transfer of 0 value is disabled in a contract, Transfers of 0 values MUST be treated as normal transfers and fire the Transfer event.

##### approve
```
function approve(address _spender, uint256 _value) public returns (bool success)
```
- Allows `_spender` to withdraw from your account multiple times, up to the `_value` amount. If this function is called again it overwrites the current allowance with `_value`.
- **NOTE** - To prevent attack vectors like the one described [here](https://docs.google.com/document/d/1YLPtQxZu1UAvO9cZ1O2RPXBbT0mooh4DYKjA_jp-RLM/), clients SHOULD make sure to create user interfaces in such a way that they set the allowance first to 0 before setting it to another value for the same spender. THOUGH The contract itself shouldn’t enforce it, to allow backwards compatibility with contracts deployed before.

##### allowance
```
function allowance(address _owner, address _spender) public view returns (uint256 remaining)
```
- Returns the amount which `_spender` is still allowed to withdraw from `_owner`.

#### Events

##### Transfer
```
event Transfer(address indexed _from, address indexed _to, uint256 _value)
```
- **MUST** trigger when tokens are transferred, including zero value transfers.
- A token contract which creates new tokens SHOULD trigger a Transfer event with the `_from` address set to 0x0 when tokens are created.

##### Approval
```
event Approval(address indexed _owner, address indexed _spender, uint256 _value)
```
**MUST** trigger on any successful call to `approve(address _spender, uint256 _value)`.
