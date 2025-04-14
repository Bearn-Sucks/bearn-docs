# yBGT

## :zap:**yBGT supercharges native BGT.**:zap:

yBGT is a liquid wrapper and reward compounder for Berachain's BGT token. It works similarly to Yearn's [yCRV](https://docs.yearn.fi/getting-started/products/ylockers/ycrv/overview) in that instead of the base token (BGT), you get a new receipt token that gives you additional utility (yBGT). You can use yBGT just like you use BGT, and also get a bunch of cool features.

### First, A Refresher on BGT

Berachain Governance Token (\$BGT) is a soulbound (aka non-transferrable) token that is used for voting in Berachain governance. It also can be used to "boost" validators and earn additional BGT and dApp fees. [Learn more about BGT](https://docs.berachain.com/learn/pol/tokens/bgt) Finally, It can be burned for \$BERA, which is the native gas and staking token of Berachain. [Learn more about BERA](https://docs.berachain.com/learn/help/glossary#bera-token). Once burned, it cannot be converted back to \$BGT.

## 🤔 Why BGT?

Here are 6 features that make yBGT best BGT derivative on the market.

- **Yield**: yBGT earns revenues from activity on Berachain, just like native BGT. Unlike many other BGT derivatives, yBGT is not beholden to any particular Berachain validators and can seek out the highest yields on the market. Yields go to staked yBGT so returns are further boosted when not all of the yBGT supply is staked.
- **Governance**: yBGT provides the same governance rights as native BGT. When the pass through governance system is up and running, it may even offer boosted governance power for stakers.
- **Liquidity**: Unlike native BGT, yBGT is not soulbound and can be sold on the open market like any other token or used in other DeFi protocols.
- **Redeemability**: This one is underrated. Even though yBGT is liquid, this is crypto and pegs do peg things. yBGT always has a floor redeemability for BERA tokens.
- **Premium**: yBGT's premium over naked BGT should match any in the market given its feature completeness.
- **Automation**: yBGT is built with the expertise of Yearn's automation processes. You have control over how much you want to automate. You can earn yBGT and work the system, or sit back, relax, and let our vaults auto-compound the principal for you.

## 🧑‍🌾 Getting yBGT

There are three ways to get yBGT

1. Deposit any BGT eligible staking tokens in the relevant Bearn [yBGT earner vault](/docs/products/vaults.md). yBGT rewards accumulate block by block exactly as they would in the underlying reward vault minus the Bearn wrap fee.

2. Deposit your BGT eligible tokens directly in the reward vault on the Berachain [Hub](https://hub.berachain.com/vaults/). Once you have accumulated claimable BGT go to bearn.sucks and you can mint any unclaimed BGT directly as yBGT.

3. Buy yBGT through one of the liquidity pools using an app such as [Ooga Booga](https://app.oogabooga.io/) or [Kodiak](https://app.kodiak.finance/#/swap?chain=berachain_mainnet).

#### **NOTE**: Until aggregators have the full support for yBERA deposit/withdraw routes it is highly recommended to swap in or out of yBGT one step at a time to achieve the best fill price

Ex Buying yBGT with HONEY:

1) Swap HONEY -> WBERA on any DEX or aggregator
2) DepositWBERA -> yBERA on [Bearn.sucks](bearn.sucks)
3) Swap yBERA -> yBGT on a dex like Kodiak or aggregator like Ooga Booga

Ex Selling yBGT -> HONEY

1) Swap yBGT -> yBERA
2) Redeem yBERA -> WBERA
3) Swap WBERA -> HONEY


## Using yBGT

Currently there are two main uses for yBGT that users can choose from

**Staking your yBGT**

The BGT owned by Bearn is used to boost certain Berachain validators based on who can return the most overall return to Bearn. The bribe tokens received from validators are periodically sold off and accumulated 100% in HONEY. This is then distributed to yBGT stakers.

Stakers can choose to earn the yield in HONEY, or have it autocompounded into more yBGT.

**Provide liquidity in the LP pools**

The main yBGT pool is the yBGT/yBERA Kodiak pool that users can use the deployed [Kodiak Island](https://app.kodiak.finance/#/liquidity/pools/0x5347e5133b22A680Ee94b7e62803E848F8d8C92e?chain=berachain_mainnet) to participate in.

yBGT is paired with [yBERA](/docs/products/yBERA.md) in the pools in order to help give a scalable source of bribe incentives so that liquidity providers can earn extra incentives in the form of more yBGT.

To receive the rewards given to liquidity providers, you will need, yBGT, yBERA or both tokens. Follow the steps [here](/docs/products/yBGT.md#-getting-ybgt) for yBGT, and [here](/docs/products/yBERA.md#-getting-ybera) for yBERA.

Visit the [Kodiak Island](https://app.kodiak.finance/#/liquidity/pools/0x5347e5133b22A680Ee94b7e62803E848F8d8C92e?chain=berachain_mainnet) and deposit into the LP (without staking).

Once deposited come back to [Bearn.sucks](bearn.sucks) and deposit the Kodiak ERC20 token to the yBGT/yBERA vault and you will start receiving all relevant rewards given to liquidity providers.