# Vaults

## :chart_with_upwards_trend: Vaults are how you earn yBGT :chart_with_upwards_trend:

Bearn Vaults are the easiest way to put your Berachain assets to work. Bearn offers rewards vaults for every asset that is eligible for BGT rewards, including many BEX and Kodiak pools.

The vaults come in 2 types, with the distinction being in how rewards are paid out.

- **yBGT Earner Vaults** receive rewards in yBGT tokens. When claimed, the earned BGT is claimed by the protocol and new yBGT is minted and given to the depositor. yBGT is earned by depositors block by block at the exact same rate as they would be earning in the underlying Berachain vault.
- **Compounder Vaults** automatically redeem the earned BGT tokens to BERA tokens and sell them for more of the underlying vault token. Bearn's compounder vaults, utilize a dutch auction system developed for Yearn that anyone can participate in to compound into the underlying tokens. Meaning it can permissionlessly support any token pair.

You don't need BGT or yBGT to deposit... So what are you waiting for?

### Deploying

It is permissionless for anyone to deploy their own set of Bearn vaults, as long as there is a deployed Berachain Reward vault.

If there is a new BGT eligible vault that is not listed on the site, simply go the the [Bearn Vault Factory](https://berascan.com/address/0x70b14cd0Cf7BD442DABEf5Cb0247aA478B82fcbb) and call

```
vault_factory.createVaults(reward_vault_staking_token);
```

This will deploy and configure a yBGT earner and auto compounder for the reward vault.

### Steps
- First, check that the BGT eligible vault is on [BeraHub](https://hub.berachain.com/vaults/).
- If it is, click on it and copy the contract address shown beside Staking Token. You may have to click it first which takes you to BeraScan. You can then then copy the address from the BeraScan page.
- Go to the [Bearn Vault Factory](https://berascan.com/address/0x70b14cd0Cf7BD442DABEf5Cb0247aA478B82fcbb) on BeraScan.
- Click the Contract tab.
- Click the Write Contract tab.
- Click the Connect to Web3 button and connect your wallet.
- Click the `createVaults` function.
- Enter or paste the Staking Token address you previously copied.
- Click the Write button and sign the transaction with your connected wallet.
