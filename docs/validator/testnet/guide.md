---
sidebar_position: 3
---

# Validator Guide
How validators confirm transactions on EXX Testnet. 


## How Proof of Staked Authority works 
EXX Testnet became Proof of Staked Authority on the 17th of December 2022 where the team upgraded the blockchain from Proof of Authority to an automated Proof of Authority - PoSA which is the **Lagos Upgrade**


### How to become a validator 
In EXX Testnet, you can become a validator if you are approved via an application process. 


### Run a Validator node

This document will help you to setup a validator node.

<b>IMPORTANT:</b>Ubuntu 18 or later versions required.

#### Prerequisites

- Hardware
    - 24 hr running Server
    - High connectivity

- Software 
    - [NodeJS installed](nodejs) 
    - [Geth Installed](geth)
    - [GitHub Intalled](github)
    

After you have everything installed.
Lets start by generating keystore

#### Clone `keypair-utill` repo

Open linux terminal by pressing `Ctrl+Alt+T` key

<img src="/img/geth/5.png" alt="TERMINAL" />


You are in terminal create a dir by `mkdir workspace`. And go to that directory by `cd workspace`.

now clone the git repos here by 

```bash  
git clone https://github.com/exxnetwork/keypair-util.git
git clone https://github.com/exxnetwork/consensus-system.git
```

These two consecutive commands will clone two different repo `keypair-utill`, `consensus-system`.

Now,

```bash  
cd exxpoas-keypair-util
node keygen.js
```

Answer all the question and There is your seed phrase generated.
Copy it and STORE in a safe place

Now copy keystore folder from `cp ./blockchain/.ethereum/keystore /home/$user/.ethereum`


#### Initialize the genesis file using the command below

``` js
geth init exxpoas-keypair-util/blockchain/genesis.json
```

Now, create a service file named as `exx_geth.service` in the following location -- `/usr/lib/systemd/system`

```bash  
[Unit]
Description=Ethereum go client
After=network.target 
Wants=network.target
[Service]
User=root 
Group=root
Type=simple
Restart=always
RestartSec=5
ExecStart=geth --config /root/exx/config.toml --datadir /root/.ethereum/ --mine --allow-insecure-unlock --unlock 0xxxxxxxxxxxxxxxxxxxxxxxxxxxx --password /root/exx/password.txt --nat extip:[ip address]
[Install]
WantedBy=default.target

```
after creating the file save it and then run the following commands -
```bash
sudo systemctl daemon-reload
sudo systemctl start exx_geth.service

````




