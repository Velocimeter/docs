import Bleed from 'nextra-theme-docs/bleed'

# Liquidity Pools

<Bleed>
<div align="center">
  <img src="/dome5.jpg" alt="Velocimeter Launch" width="100%" />
</div>
</Bleed>

&nbsp;



The core functionality of Velocimeter is to allow users to trade
digital assets in a secure way, with very low fees and low slippage.

Slippage is the difference between the current market price of an asset and the
price at which the actual trade/transaction is executed. This difference could
result in a smaller amount (higher price paid) or a higher amount (smaller
price paid) of desired tokens returned from a trade.

To provide access to the best rates on the market, we identified two types of
assets:
 * correlated - for example _stable coins_ (`$USDC`, `$DAI`, etc.)
 * uncorrelated - for example `$LINK` and `$CRV`

Velocimeter offers two different liquidity pool types based on token pair needs, _Stable
Pools_ and _Variable Pools_.

The protocol router evaluates both pool types to determine the most efficient price quotation
and trade execution route available. To protect against flashloan attacks, the router will use
30-minute TWAPs (time-weighted average prices). The router doesn't require _upkeep_ (external maintenance).

The _deeper_ the liquidity of a given pool (higher value locked), the smaller the slippage it will offer.

## Fees

On Velocimeter the trading fees are kept in the originally traded tokens
(if you trade `$USDC` and `FLOW` the fees will be kept in the same tokens).

The trading fees for both liquidity pool types are 0.02%, and can be adjusted
for up to 0.05%.

The Variable and Stable liquidity pools can be assigned different trading fees
on Velocimeter.

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
 * `x` is the amount of first asset in the pool
 * `y` is the amount of second asset in the same pool
 * `k` is a fixed constant

<Bleed>
  <iframe src="https://www.desmos.com/calculator/yiwx8ev1oh?embed" width="100%" height="700"></iframe>
</Bleed>


