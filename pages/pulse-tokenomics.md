import Bleed from 'nextra-theme-docs/bleed';

import { Chart } from "react-google-charts";

# Tokenomics

<Bleed>
<div align="center">
  ![The FLOW Token](/Flow-circle-aqua.png)
</div>
</Bleed>

&nbsp;

# 13m oFLOW will be distributed during epoch 1

oFLOW is an option to buy FLOW at a 50% discount on market price.
Funds raised will be used for a range of operations to support the health of the protocol such as adding protocol owned liquidity. Incentivising veFLOW & FLOW-PLS LP lockers.

# Initial liquidity Bootstrapping Sale

5m FLOW will be sold via https://launch.velocimeter.xyz/ in the build up to epoch 1. PLS raised in the sale will be used to provide FLOW-PLS liquidity on day one.


Velocimeter uses three tokens to manage its utility and governance:

- `oFLOW` &mdash; Reward token for LPs. Can be redeemed at any time @ 50% discount on market price of FLOW
- `FLOW` &mdash; ERC-20 liquid token
- `veFLOW` &mdash; ERC-721 governance token in the form of an NFT
  (non-fungible token)

`oFLOW` is used for rewarding liquidity providers through emissions it's option mechanism provides sustainble funding for the protocol and support for the FLOW market.

`veFLOW` is used for governance. Any `FLOW` holder can vote-escrow their tokens and
receive a `veFLOW` (also known as veNFT) in exchange. Additional tokens can be
added to the `veFLOW` NFT at any time.

The lock period (also known as vote-escrowed period, hence the _ve_ prefix) can be up
to 26 weeks, following the linear relationship shown below:

- 100 `FLOW` locked for 26 weeks will become 100 `veFLOW`
- 100 `FLOW` locked for 7 weeks will become 25 `veFLOW`

The longer the vesting time, the higher the voting power (voting weight) and
rewards the `veFLOW` holder receives.

## ve(3,3) Mechanics

Velocimeter mechanics reflect a combination of two DeFi concepts:

- Vote-Escrow &mdash; first introduced by Curve to strengthen incentives for long-term token holders
- Staking/Rebasing/Bonding or (3,3) game theory &mdash; designed by Olympus DAO

Combined, the _ve(3,3)_ mechanism rewards behaviors correlated with Velocimeter's success, such as
liquidity provision and long-term token holding. Liquidity providers receive `FLOW` emissions,
and `veFLOW` holders receive protocol fees, bribes, rebases, and governance power.


## Version 3 Pulsechain Tokennomic Distribution


The initial 315M FLOW
* ~150M veFLOW are claimable via airdrop claim contract prior to epoch 1 flip.
* 5m FLOW allocated to sale. And 5m allocatated to adding initial liquidity.
50 million for protocol owned voting power.
100m for future partners

### 100M FLOW is in the mint tank contract and can only be used for minting future partner veFLOW


### 50M FLOW
50 million FLOW is in the mint tank to be used for protocol owned voting power.

### veFLOW & Initial FLOW Distribution Chart

Note that there is only max 2% of total FLOW liquid on day one. Everything else is earmarked (in mint tank which can only mint NFTs FLOW cannot be withdrawn) or already minted to veFLOW.

<Bleed>
  <Chart
    chartType="PieChart"
    data={[
      [ "Receivers", "Amount" ],
      
      [ "Protocol Owned NFTs", 50 ],
      
      [ "Partner Protocol NFTs", 100],
      [ "Protocol owned voting power", 50],
      [ "Liquidity Bootstrapping Sale", 5],
      [ "Initial liquidity", 5],
      [ "Airdrop", 150]
    ]}
    options={{
      title: "FLOW Distribution (M)",
      backgroundColor: '#111111',
      colors: ['#046971', '#10575D', '#1D565B', '#003C40', '#4EAC9D', '#3BBFAA', '#21CCB1' ],
      legend: {textStyle: {color: 'white' }},
      pieHole: 0.4,
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>



## Gauge Voting

`veFLOW` holders decide which liquidity pools receive emissions in a given epoch by
voting on their preferred liquidity pool _gauges_. `FLOW` emissions will be distributed
proportionally to the total votes a liquidity pool receives.

In return, voters receive 100% of the trading fees and bribes collected through the
liquidity pool they vote for.

More information on voting can be found the [Voting Section](/voting) section of this document.

### Emission Schedule

<Bleed>
  <Chart
    chartType="LineChart"
    data={[
      ["Week", "LP Emissions", "veRebase (@50% locking rate)", "Total Supply"],
      ["1", 15, 0, 300],
      ["50", 9.1, 2, 750],
      ["100", 5.5, 1.5, 1125],
      ["150", 3.3, 1, 1275],
      ["200", 2, 0.5, 1350]
    ]}
    options={{
      title: "FLOW Emissions (M)",
      curveType: 'function',
      aggregationTarget: 'series',
      selectionMode: 'multiple',
      legend: { position: "top", textStyle: {color: 'white'}},
      series: {
        0: { targetAxisIndex: 0 },
        1: { targetAxisIndex: 0 },
        2: { targetAxisIndex: 1 },
      },
      vAxes: {
        1: { title: "Total Supply", titleTextStyle: { color: 'white' }},
        0: { title: "Epoch Distribution", titleTextStyle: { color: 'white' }}
      },
      hAxis: {
        title: "Week", titleTextStyle: { color: 'white' },
      },
      backgroundColor: '#111111',
      lineWidth: 3,
      colors: ['#79F8DB', '#2180DF', '#EA1000', '#59BFD8', '#0281FF'],
      legend: {textStyle: {color: 'white'}},
      titleTextStyle: { color: 'white' },
    }}
    width={"100%"}
    height={"600px"}
  />
</Bleed>

## Whitelisting

While Velocimeter supports permissionless liquidity pool. Gauge creation can
only include _whitelisted_ tokens. Part of the partner onboarding program will include whitelisting of their tokens where needed.

Partners can request additional tokens to be _whitelisted_.
There is a complete list of all the whitelisted tokens in the [Gauges Section](/gauges)

## Council of Velocimetry

Requirements for _whitelisting_ are critical to ensuring that the protocol cannot
be exploited by actors attempting to game emissions.

To support the health of the protocol and ecosystem, the Council of Velocimetry (similar to the Curve.Finance _Emergency DAO_)
will have the right to disable hostile gauges.

An example of a hostile gauge would be one that has two tokens that cannot be obtained public via any route either inside Velocimeter or in other protocols.

The Council of Velocimetry will initially consist of members from the Velocimeter team but community members will be recruited to bolster this role.



