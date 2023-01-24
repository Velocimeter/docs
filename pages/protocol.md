import Bleed from 'nextra-theme-docs/bleed'
import Callout from 'nextra-theme-docs/callout'

# Protocol Overview

<Bleed>
<div align="center">
![Velocimeter Problem Statement](/dome.jpg)
</div>

</Bleed>


&nbsp;



## Problems with Liquidity Incentivization

Almost every protocol in DeFi needs to have a certain amount of liquidity for one reason or another.

| Liquidity    | Example   | Benefit                                        |
| ------------ | --------- | ---------------------------------------------- |
| Native token | WETH-USDC | Treasury access to capital markets             |
| Stablecoins  | DAI-USDC  | Ensure stability by minimizing depeg risk      |
| Pegged asset | ETH-stETH | Minimize opportunity cost of converting assets |

However, current solutions for incentivizing liquidity come with their own tradeoffs and pitfalls:

- Pool 2 emissions (i.e. attaching a reward to staked LPs) can be costly to maintain, and often times result in a "farm and dump" resulting in "unsticky" liquidity.

- Protocol owned liquidity can be costly to bootstrap, and liquidity may only be needed occasionally, instead of on-going basis.

- Bribing voters in the CRV/CVX system can be costly as incumbents already have a sizeable lead. Additionally, the universe of pool types here are limited.

## Introducing Velocimeter

Velocimeter addresses these issues and presents an attractive alternative by addressing the core issues in Solidly and adding its own improvements. To recall, the key innovation of Solidly was to align protocol emissions with fees generated, not simply liquidity. To do this, it would allow protocols and other large stakeholders to become veNFT "voters", using their locked voting power to direct future emissions and collecting fees (termed bribes in Solidly) from the pools they voted for.

Velocimeter has made several improvements to the Solidly codebase, all of which were thoughtfully chosen to ensure that the protocol would carry out the original intended mechanism of allowing voters to _fairly compensate_ LPs for impermanent loss.

Solidly had several key issues that prevented its success in the Fantom ecosystem:

## Improvement: Tying Rewards with Emissions

**In Solidly, voting rewards (i.e. bribes) were claimable _before_ the emissions from that vote were committed.** Velocimeter addresses this with new mechanisms:

- First, we allow voters to make only one "active" voting decision (i.e. `Voter.vote()`, `Voter.reset()`) every epoch (note: this does not include the `Voter.poke()` function).
- Additionally, bribes from fees (_internal_) and external sources (_external_) are treated differently.
  Internal bribes function more or less the same way as they did in Solidly, streamed to voters who vote for them.
  External bribes, however, are rewarded _per epoch_ rather than streamed, and are claimable only after the next epoch starts.
  This means that a bribe sent at the last minute of an epoch will accrue to all voters of that epoch, and be claimable once the epoch flips.

The goal of these changes is to ensure a healthy equilibrium between voters and external bribers. Bribers are incentivized to get their bribes early in that week, as to attract early voters. They also benefit from bribing later, as to have more information on competing bribes. Voters face a similar dilemma, as voting too early means forgoing potentially lucrative bribes that come later, and voting too late means voting with a lower (`$FLOW`) balance. Note that this latter affect is especially pronounced for voters who have locked for shorter time periods (e.g. voters who have locked for weeks rather than months/years will experience larger differences in the bribes they receive from voting later vs. earlier in the epoch).

## Improvement: Ensuring Productive Gauges

**In Solidly, exploitive voters were able to direct emissions towards unproductive gauges, including those for pools 100% owned by those voters.** Velocimeter addresses this in three ways:

- First, the team only has the ability to whitelist tokens for gauges. The following list of tokens are already whitelisted at genesis.
| Signer      | Project          | Address                                    |
| ----------- | ---------------- | ------------------------------------------ |
| WETH        | Etherum          | 0x82aF49447D8a07e3bd95BD0d56f35241523fBab1 |
| USDC        | Circle           | 0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8 |
| USDT        | Tether           | 0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9 |
| MIM         | Abracadabra      | 0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A |
| FRAX        | FRAX Finance     | 0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F |
| FLOW        | Velocimeter      | ??? |

The basic guidelines for whitelisting a token is a committment to supply, or have, a TVL in the pool of at least $30,000 USD. This ensures trading in that pool at least a small measure of stability before a guage is granted. There could be individual cases where this requirement might be modified.

<Callout>If your team wants a gauge, we suggest you first ask for token whitelisting prior to making the gauge. This is because you will be able to complete the entire process. However, if you have already created a liquidity pool, we can still help you to get a gauge.</Callout> 

- Second, we've also added an Emergency ["Council"](), which has the ability to perform the following functions 
| Function           | Purpose                                                        |
| killGauge          | This kills a certain gauge and stops it from receiving FLOW    |
| reviveGauge        | This resets a killed gauge and allow to to start reciving FLOW |
| setEmergencyCouncil| This changes the MSIG address                                  |

Any gauge that is deeemed unproductive to the broader ecosystem or violates the agreement with the partners. ie, isn't using a valid rightside token, may be killed. This Council will start off containing only the Velocimeter core team but individuals from the community will be added later, and the broader Arbitrum and DeFi ecosystems. The Commissaire multisig is available here, and signers include:

| Signer      | Affiliation      | Address                                    |
| ----------- | ---------------- | ------------------------------------------ |
| Ceazor      | Velocimeter      | ??? |
| Dunks       | Velocimeter      | ??? |
| Coolie      | Velocimeter      | ??? |
| Faeflow     | Velocimeter      | ??? |
| Torbik      | Velocimeter      | ??? |
| wtkc        | Velocimeter      | ??? |

- Third, the initial swap fee was changed from 0.01% to 0.02% to ensure that voters have more twice the incentive to direct emissions towards productive liquidity. Note that this rate is still much lower than alternative exchanges (e.g. Curve at 0.04%). Stable and volatile pairs also have different fees, both modifiable up to 0.05%.

- Forth, to reward our most loyal partner, the requiremnt of TVL for whitelisting is halved for new gauges that use their token as the right side token in their pool. 

## Improvement: Prolonged Emissions Decay

**In Solidly, protocol emissions decayed too quickly, leading to minimal incentives for late entrants.** Obviously early adopters should be rewarded for the risks they're taking, but we observed that the emissions decayed too quickly in the Solidly model. As a result, we made a few small tweaks to ensure that while early adopters would still be rewarded, the protocol would still be an attractive opportunity for future protocols.

- First, we modified the emissions growth function to

    > (FLOW.totalSupply ÷ FLOW.totalsupply)³ × 0.5 × Emissions

- Second, there is no negative voting.
- Third, there is no emissions "boost" for voters.
- Fourth, the initial distribution has been carefully selected to include partner protocols that were felt would bring their own types of unique value to the ecosystem.

## Improvement: White-Glove Support

**In Solidly, the lack of a "team" meant lack of support post-launch.**
To ensure that our team has sufficient resources to pay contributors an expand on our product offering, a maximum of 2% of emissions can be directed towards our team multisig. At genesis, this will be set to 0%
