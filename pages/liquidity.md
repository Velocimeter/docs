# Liquidity Pools

<div align="center">
  ![Velocimeter Launch](/dome5.jpg)
</div>

The core functionality of Velocimeter is to allow users to trade
digital assets in a secure way, with very low fees and low slippage.

Slippage is the difference between the current market price of an asset and the
price at which the actual trade/transaction is executed. This difference could
result in a smaller amount (higher price paid) or a higher amount (smaller
price paid) of desired tokens returned from a trade.

To provide access to the best rates on the market, we identified two types of
assets:

- correlated - for example _stable coins_ (`$USDC`, `$DAI`, `NOTE`.)
- uncorrelated - for example `$ETH`, `$CANTO` and `$FLOW`

Velocimeter offers two different liquidity pool types based on token pair needs, _Stable
Pools_ and _Variable Pools_.

The protocol router evaluates both pool types to determine the most efficient price quotation
and trade execution route available. To protect against flash-loan attacks, the router will use
30-minute TWAPs (time-weighted average prices). The router doesn't require _upkeep_ (external maintenance).

The _deeper_ the liquidity of a given pool (higher value locked), the smaller the slippage it will offer.

## Fees

On Velocimeter the trading fees are kept in the originally traded tokens
(if you trade `$USDC` and `FLOW` the fees will be kept in the same tokens).

The trading fees for stable liquidity pool types and for volatile pools are both independent. The current fees can be seen by going [here](https://tuber.build/address/0xF80909DF0A01ff18e4D37BF682E40519B21Def46/read-contract#address-tabs), locating the 7.getFee function and inputting `true` for stable and `false` for volatile. The outputted number then needs to be divided by 100 to get the swap fee percentage. ie. an output of 25 = 0.25%

Both these setting can be adjusted up to 0.5%.

## Stable Pools

Stable pools are designed for assets which have little to no
volatility. This means that the formula used for pricing the assets allows for
low slippage even on large traded volumes.

> x³y + y³x ≥ k

## Variable Pools

Variable pools are designed for assets with high price volatility.
These pools use a generic AMM formula.

> x × y ≥ k

## A visual representation of the formulas

The mathematical formulas are used to keep the total pool liquidity the same at all times.

Below, you can find a visual comparison between the stable (red) and volatile (green)
AMM pricing equations, where:

- `x` is the amount of first asset in the pool
- `y` is the amount of second asset in the same pool
- `k` is a fixed constant

<iframe src="https://www.desmos.com/calculator/yiwx8ev1oh?embed" width="100%" height="700"></iframe>
