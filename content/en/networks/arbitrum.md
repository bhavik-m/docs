---
title: Instadapp on Arbitrum
menuTitle: Arbitrum
description: ""
position: 2
category: "Networks"
---

## Deployed addresses

Below are all the addresses of Core Contracts of the DSL ecosystem on Arbitrum:


1. Index.sol: [0x1eE00C305C51Ff3bE60162456A9B533C07cD9288](https://arbiscan.io/address/0x1eE00C305C51Ff3bE60162456A9B533C07cD9288#code)
2. InstaList.sol: [0x3565F6057b7fFE36984779A507fC87b31EFb0f09](https://arbiscan.io/address/0x3565F6057b7fFE36984779A507fC87b31EFb0f09#code)
3. InstaAccount.sol: [0x857f3b524317C0C403EC40e01837F1B160F9E7Ab](https://arbiscan.io/address/0x857f3b524317C0C403EC40e01837F1B160F9E7Ab#code)
4. InstaConnectors.sol: [0x67fCE99Dd6d8d659eea2a1ac1b8881c57eb6592B](https://arbiscan.io/address/0x67fCE99Dd6d8d659eea2a1ac1b8881c57eb6592B#code)
5. InstaMemory.sol: [0xc109f7Ef06152c3a63dc7254fD861E612d3Ac571](https://arbiscan.io/address/0xc109f7Ef06152c3a63dc7254fD861E612d3Ac571#code)
6. Implementations: [0xF3Bb2FbdCDa1B8B6d19f513D69462eA548d0eF12](https://arbiscan.io/address/0xF3Bb2FbdCDa1B8B6d19f513D69462eA548d0eF12#code)

## Networks and Underlying meanings

- Index.sol: This is the Main Contract for all the DeFi Smart Accounts. Used for creating a new DeFi Smart Account of a user and to run a cast function in the new smart account.
- InstaList.sol: Maintains a registry of all the DeFi Smart Account users using a Linked List. Using the user’s address, a smart account Id is created which is later mapped to get a smart account address. With this address, an account link is created which is utilised to add and remove accounts from the LinkedList.
- InstaAccounts.sol: It’s the DeFi Smart Account Wallet. All smart accounts that are created are a clone of this contract.
- InstaConnectors.sol: Holds a registry of all the Connectors associated with InstaDapp. An array of all the connectors is maintained using their address.
- InstaMemory: All the data (bytes, uint, address and Storage Id) for the cast function are stored in this contract.
