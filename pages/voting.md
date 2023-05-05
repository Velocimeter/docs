import Bleed from 'nextra-theme-docs/bleed'

# Voting

<Bleed>
<div align="center">
  ![Velocimeter Launch](/dome5.jpg)
  </div>
</Bleed>

&nbsp;


## Requirements

Only `FLOW` that is locked as `veFLOW` can be used to vote. To understand more on the mechanics of `veFLOW` refer to the section [Protocol Overview](/protocol)

New epochs start on Thursday as 00:00 UTC. Vote anytime before this. Waiting can allow you to see any bribes that come in, but not waiting ensures you get your vote in on time.


## Restrictions
There are several restrictions that you need to keep in mind when your voting. 

* If you have several `veFLOW` nfts in your wallet, you need to select each one individually
* You can only cast your vote ONCE per epoch, so make sure you allocate 100% of your voting power, and are comfortable with 
your choices before you cast your vote. You cannot change your vote after it is cast in the current epoch

## Rewards
Voting has several benefits that should be considered.

* Voting directs `FLOW` token incentives. So if you care about this, vote accordingly.
* Voting on a pool grants you a pro-rata share of all the trading fees of the pool you voted on. (Only the LPs that are staked to receive `FLOW` rewards)
* Voting on a pool grants you a pro-rata share of all the bribes that are added to the pool by any 3rd party. Bribes can be added
to a pool at any time during an epoch. A snapshot of votes is taken at the end of each epoch at ~23:59 UTC on Wednesday. Bribe rewards are available between 24-48 hours after the new epoch starts. 


 It is REQUIRED that you CAST VOTE 🗳️ every week in order to register for the bribes. This transaction will cost gas⛽️. If you do not cast your vote every week, you will still direct FLOW to the gauge but you will NOT get a prorata share of the bribes.


## Reset to Transfer

If a `veFLOW` holder wishes to transfer, or sell, their NFTs, they need to be aware that they first must reset their NFT which causes them to vote on NO gauges this epoch, thus forfeiting trading fees and any bribes. A recipient of the NFT (buyer from a market) should also be aware that they will not be able to vote until the next epoch. This feature rewards participants that stay consistent in their voting activity.

## Voting APR
In the front end, you will see a column that displays the voting APR. This metric is calculated as follows
&nbsp;

<div align="center">
*voting apr = (tvb / tv) * weeks / flow price * 100%*
  </div>

weeks = 52.179 (approx number of weeks in 1 year) 

tvb = total value of bribes in usd term 

tv = total number of votes 

## VOTE Delegator
The vote delegator is a way for `veFLOW` holders to delegate their votes to Velocimeter to manage for them. This series of contracts will vote on behalf of the user, collect the bribes from voting, use them to buy `FLOW` and then
add them into those `veFLOW` NFTs. There are are few key things that should be known.

This process:

* requires that users give full approval of their NFT to a `VoteFarmer` contract.
* will NOT transfer the users `veFLOW` from their wallet.
* users can still manually vote in any epoch as long as Velocimeter has yet to vote on their behalf.
* users can still manually claim bribes in any epoch as long as Velocimeter has yet to claim on their behalf.
* requires that the `veFLOW` has as least 500 `FLOW` lock for a time greater that `7 Days`.

This is important to understand. Granting other contracts approvals can be dangerous as it grants the following powers

* transfer the NFT anywhere (Velocimeter does NOT have this function in delegator contract)
* vote/claim bribes
* withdraw expired locks
* relock/extend locking
* merge 1 NFT into another

### AUTOLOCK Enabled
When this feature is toggled on, it will allow Velocimeter to extend the lock time of a `veFLOW` by 1 week each week. This is used to maintain the same voting power, and to make sure that `veFLOW` that is set and forgotten, continues to be able to vote until the user returns to undelegate.

### UnDelegate
Users can, at any time, undelegate their `veFLOW` to Velocimeter. This will remove the power of voting, claiming bribes, and extending lock time. If Velocimeter has already voted this epoch with this NFT, users will find that they have to wait until the next epoch to do any of the following actions:

* vote on any pool
* transfer / sell their position
* withdraw from expired NFTs
* merge
* reset


## Upgradable
IMPORTANT! The Vote Delegator is behind an upgradable proxy with a 48 hour time lock. This means that in the event that a better strategy is discovered, the team can modify the contracts. The intended upgrade will always be deploy first, then the `initiateImplUpgradeCooldown` function will be called to start the time lock countdown. 

THis does NOT effect the core velocimeter contracts which are all immutable!






