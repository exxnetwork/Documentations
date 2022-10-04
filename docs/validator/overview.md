---
sidebar_position: 1
---
# Overview

EXX network is an innovative solution to accelerate global web3 adoption.The EXX network mainnet is designed to be backed by a pool of 21 active validators via the Proof of Staked Authority consensus mechanism which supports short block time, up to 600,000 transactions per sec (theoretically) and lower transaction fees. The system implements slashing algorithms to ensure security.

There is another set of validators which are inactive and will be introduced when there is a need for them to come in due to issues from the active validators. They are called `Validator Candidates`.

The Validator Candidates will also produce blocks and validate transactions, but in a lesser frequency than the active validators. The unavailable candidates will be slashed but only in a smaller size. 

In a situation where the active validators get attacked and go offline, the Validator Candidates are automatically brought in to replace them.


## What is a Validator?

A validator is someone or in this case, a system who is responsible for verifying transactions by committing new blocks in the blockchain. They participate in the consensus protocol by signing blocks collectively using each of their private keys.  The validator set is determined by the Validator Staking Module (VSM) built on top of the blockchain.


## Reward

A validator's reward come from transaction fees from blocks signed and commission fees taken from delegators.

Given that the reward for a certain validator (with 30% self-bonded EXX) in a block is 10 EXX and there is a 10% commission fee for its delegators. The reward is shared among the validator and delegators according to each of their stake in the following manner: 

### Commision 
Amount of fees paid by the delegators to the validators
```js title="Commission (Delegator Fee) Calculations"
// Pool total - Self-bonded (validator)
100 - 30%
Delegator share = 70%

70% * 10 = 7 

// With 10% Commission fee, 

7 * 10% = 0.7 EXX

// Commission of 7 EXX is collected from delegators and given to the validator.
```

### Validator Reward
Amount in EXX recieved by the validator.

```js title="Validator Reward"
// Total reward * validator percent + commission 

10 * 30% + 0.7 = 3.7 EXX

// Validator gets 3.7 EXX.
```

### Delegator Reward
Amount in EXX shared among the delegators.
```js title="Delegator Reward"
// Total reward * delegator percent - commission 

10 * 70% - 0.7 = 6.3 EXX

//Validator gets 6.3 EXX.
```

If validators double sign and / or are frequently offline, their staked EXX ( excluding EXX that delegated to them) can be slashed. The penalty depends on the severity of the violation.


## Risks for Validators
If you try to cheat the system, or act contrary to the responsibility specification of a validator, you will be liable to incur a penalty, known as slashing.



