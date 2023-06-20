import Bleed from 'nextra-theme-docs/bleed';

import { Chart } from "react-google-charts";

# Tokenomics

<Bleed>
<div align="center">
  ![The FVM Token](/FVM.png)
</div>
</Bleed>

&nbsp;

### Tokenomics overview

To get a full picture of initial system state and token disribution there are three categories which we will zero in on.

1. Initial veFVM including voteable & non voteable (see mint tank for future partners & partner rebates details below). 
2. Initial liquidity ~6% of total initial FVM is used provided by founding protocols as liquidity on day one. 
2. Week one emissions 

The sum of these 3 make up total supply at any given time. We have aimed to balance these three categories at launch based on our experience launching Canto & Pulsechain + our analyisis of other protocol launches and advice from our network.  



### veFVM Initial Distribution Chart & a distiction between voteable & non voteable initial veFVM

63.5% of total initial veFVM is non voteable during epoch one and it is expected to be release at an average rate of ~1% per epoch.

Categories are marked as non votable if they are in the mint tank due to the fact that voting with these during initial period is impossible. They are released over time via business development & governance processes at an expected average rate of ~1% per epoch.


<Bleed>
  <Chart
    chartType="PieChart"
    data={[
      [ "Receivers", "Amount" ],
      
     
      
      [ "Non Voteable Partner Protocol NFTs", 42],
      [ "Non voteable Partner Protocol Rebate Reserve", 21.5],
      [ "Protocol owned voting power", 10],
      
      [ "Initial liquidity", 5],
      [ "Airdrop", 6]
    ]}
    options={{
      title: "FVM Distribution (M)",
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

# Table

|          | Base % share | 1% bonus for moving entire (or significant) liquidity | Airdrop for community | veFVM  | Group                                               | Total | Total veFVM |
| -------- | ------------ | ----------------------------------------------------- | --------------------- | ------ | --------------------------------------------------- | ----- | ----------- |
|          | 42           |                                                       |                       |        | Future protocols / Advisors / Contributers / Growth | 42    | 2520000     |
|          | 10           |                                                       |                       |        | POL Voting on FVM + core pools                      | 10    |             |
|          | 21.5         |                                                       |                       |        | Mint tank whitelisted protocol bribe rebates        | 21.5  | 1290000     |
|          | 4            |                                                       | 4                     | 240000 | Velocimeter                                         | 8     | 480000      |
|          | 1.5          | 1                                                     | 1                     | 60000  | Tarrot                                              | 3.5   | 210000      |
|          | 1.5          | 1                                                     | 1                     | 60000  | Morpheus                                            | 3.5   | 210000      |
|          | 1.5          | 1                                                     | 1                     | 60000  | Deus                                                | 3.5   | 210000      |
|          | 1.5          | 1                                                     | 1                     | 60000  | Scream                                              | 3.5   | 210000      |
|          | 1.5          | 1                                                     | 1                     | 60000  | Liquid Driver                                       | 3.5   | 210000      |
|          |              |                                                       | 1                     | 60000  | Equaliser                                           | 1     | 60000       |
| Totals % | 85           | 5                                                     | 10                    | 600000 |                                                     | 100   | 5400000     |



# Epoch One Emissions & General Emmissions details.

x FVM will be distributed to gauges in epoch one. Emmissions in v3 may be increases/reduced by a maximum of 50% on a per epoch basis via governance.

# Initial liquidity 

| Protocol      | USD amount | FVM amount |
| ------------- | ---------- | ---------- |
| Tarrot        | $5,000     | 69,643     |
| Morpheus      | $5,000     | 69,643     |
| Deus          | $5,000     | 69,643     |
| Scream        | $5,000     | 69,643     |
| Velocimeter   | $10,000    | 139,286    |
| Liquid Driver | $5,000     | 69,643     |

### The mint tank

This contract holds FVM which may only be used for minting veFVM. Liquid FLOW may never leave the contract as an assurance to liquidity providers and third party partners such as Beefy Finance who requires a limit on liquid tokens controlled by teams.

#### Initial Partner veFVM

42% veFVM is in the mint tank contract and can only be used for minting future partner veFVM

#### Partner Bribe rebates

21.5% veFVM is in the mint tank contract and can only be used for minting partner bribe rebates

#### Note on bribe rebates

Whitelisted protocols get 15% rebate in veFVM each epoch based on total $ bribe amount (price of FVM at epoch flip is relevant). Top 4 bribers get additional 5% rebate of $ bribe amount in veFVM towards their native pool bribes the following epoch

## Protocol Regulation

Velocimeter v3 has three tokens available to regulate the system. At launch FVM & veFVM will be in use. While oFVM may be turned on via governance to further regulate the system.



- `oFVM` &mdash; Reward token for LPs. Can be redeemed at any time @ 50% discount on market price of FVM
- `FVM` &mdash; ERC-20 liquid token (serves as reward token while oFVM lays dormant in the system during launch.)
- `veFVM` &mdash; ERC-721 governance token in the form of an NFT. Votes to direct emissions, earns fees, bribes & oFVM redemption funds + Velocimeter Pro redemption fees.
  (non-fungible token)

`oFVM` is used for rewarding liquidity providers through emissions it's option mechanism provides sustainble funding for the protocol and support for the FVM market.

`veFVM` is used for governance. Any `FVM` holder can vote-escrow their tokens and
receive a `veFVM` (also known as veNFT) in exchange. Additional tokens can be
added to the `veFVM` NFT at any time.

The lock period (also known as vote-escrowed period, hence the _ve_ prefix) can be up
to 1 years, following the linear relationship shown below:

- 100 `FVM` locked for 1 year will become 100 `veFVM`
- 100 `FVM` locked for 3 months will become 25 `veFVM`

The longer the vesting time, the higher the voting power (voting weight) and
rewards the `veFVM` holder receives.

## ve(3,3) Mechanics

Velocimeter mechanics reflect a combination of two DeFi concepts:

- Vote-Escrow &mdash; first introduced by Curve to strengthen incentives for long-term token holders
- Staking/Rebasing/Bonding or (3,3) game theory &mdash; designed by Olympus DAO

Combined, the _ve(3,3)_ mechanism rewards behaviors correlated with Velocimeter's success, such as
liquidity provision and long-term token holding. Liquidity providers receive `FVM` emissions,
and `veFVM` holders receive protocol fees, bribes, rebases, and governance power.



## Gauge Voting

`veFVM` holders decide which liquidity pools receive emissions in a given epoch by
voting on their preferred liquidity pool _gauges_. `FVM` emissions will be distributed
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
      title: "FVM Emissions (M)",
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


