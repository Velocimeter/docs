# How Velodrome is Addressing Issues in the C4 Contest

The Code4rena contest results were released on August 8, 2022 and are available [here](https://code4rena.com/reports/2022-05-velodrome/).

Below details how the `Velodrome` team addressed these issues prior to their mainnet deploy on Optimism.

## High Risk (6)

[[H-01] Users can get unlimited votes](https://github.com/code-423n4/2022-05-velodrome-findings/issues/129)

- Fixed in our mainnet deploy, [VoterEscrow.sol:L508](https://github.com/velodrome-finance/contracts/blob/master/contracts/VotingEscrow.sol#L508).

[[H-02] `VotingEscrow`'s merge and withdraw aren't available for approved users](https://github.com/code-423n4/2022-05-velodrome-findings/issues/66)

- Still exists in our mainnet deploy, [VoterEscrow.sol:L510](https://github.com/velodrome-finance/contracts/blob/master/contracts/VotingEscrow.sol#L510).
- However does not result in major disruptions to user needs, also will not impact our future product plans.

[[H-03] User rewards stop accruing after any `_writeCheckpoint` calling action](https://github.com/code-423n4/2022-05-velodrome-findings/issues/59)

- Got rid of tracking user votes with a `prevVoteStatus` boolean, [Gauge.sol](https://github.com/velodrome-finance/contracts/blob/master/contracts/Gauge.sol).

[[H-04] Bribe Rewards Struck In Contract If Deposited During First Epoch](https://github.com/code-423n4/2022-05-velodrome-findings/issues/168)

- Got rid of the `deliverBribes()` method, also did not experience issue in prod. [ExternalBribe.sol](https://github.com/velodrome-finance/contracts/blob/master/contracts/ExternalBribe.sol).

[[H-05] Voting overwrites `checkpoint.voted` in last checkpoint, so users can just vote right before claiming rewards](https://github.com/code-423n4/2022-05-velodrome-findings/issues/206)

- Got rid of tracking user votes with a `prevVoteStatus` boolean, [Gauge.sol](https://github.com/velodrome-finance/contracts/blob/master/contracts/Gauge.sol).

[[H-06] Attacker can block LayerZero channel](https://github.com/code-423n4/2022-05-velodrome-findings/issues/83)

- Added checks on [RedemptionReciever.sol](https://github.com/velodrome-finance/contracts/blob/master/contracts/redeem/RedemptionSender.sol) to ensure that no more WeVE tokens than eligible should be burned.

## Medium Risk (17)

[[M-01] Gauge set can be front run if bribe and gauge constructors aren't run atomically](https://github.com/code-423n4/2022-05-velodrome-findings/issues/54)

- Got rid of `setGauge` method in both Bribe contracts, [ExternalBribe.sol](https://github.com/velodrome-finance/contracts/blob/master/contracts/ExternalBribe.sol) and [InternalBribe.sol](https://github.com/velodrome-finance/contracts/blob/master/contracts/InternalBribe.sol).

[[M-02] `VeloGovernor`: `proposalNumerator` and team are updated by team, not governance](https://github.com/code-423n4/2022-05-velodrome-findings/issues/28)

- “Issue” is expected behavior.

[[M-03] Alter velo receptions computation](https://github.com/code-423n4/2022-05-velodrome-findings/issues/36)

- See judge’s comments, attack could only be pulled by deployer and wasn’t.

[[M-04] Malicious user can populate `rewards` array with tokens of their interest reaching limits of `MAX_REWARD_TOKENS`](https://github.com/code-423n4/2022-05-velodrome-findings/issues/182)

- Judge’s comment is accurate, does allow team to change real reward tokens (but so far non-issue).

[[M-05] `Bribe.sol` is not meant to handle fee-on-transfer tokens](https://github.com/code-423n4/2022-05-velodrome-findings/issues/222)

- Addressed in mainnet deploy by requiring reward tokens to be whitelisted, [ExternalBribe.sol:L288](https://github.com/velodrome-finance/contracts/blob/master/contracts/ExternalBribe.sol#L288).

[[M-06] Voting tokens may be lost when given to non-EOA accounts](https://github.com/code-423n4/2022-05-velodrome-findings/issues/185)

- Confirmed, see judge’s comment.

[[M-07] `RedemptionSender` should estimate fees to prevent failed transactions](https://github.com/code-423n4/2022-05-velodrome-findings/issues/80)

- Done in mainnet deploy, [RedemptionSender.sol:L32](https://github.com/velodrome-finance/contracts/blob/master/contracts/redeem/RedemptionSender.sol#L32).

[[M-08] Temporary DOS by calling `notifyRewardAmount()` in Bribe/Gauge with malicious tokens](https://github.com/code-423n4/2022-05-velodrome-findings/issues/138)

- Addressed by adding whitelist for reward tokens, [ExternalBribe.sol:L288](https://github.com/velodrome-finance/contracts/blob/master/contracts/ExternalBribe.sol#L288).

[[M-09] Owner's delegates should be decreased in `_burn()`](https://github.com/code-423n4/2022-05-velodrome-findings/issues/153)

- Addressed in mainnet deploy, [VotingEscrow.sol:L508](https://github.com/velodrome-finance/contracts/blob/master/contracts/VotingEscrow.sol#L508).

[[M-10] Rewards aren't updated before user's balance change in Gauge's `withdrawToken`](https://github.com/code-423n4/2022-05-velodrome-findings/issues/50)

- Addressed in mainnet deploy, [Gauge.sol:L502](https://github.com/velodrome-finance/contracts/blob/master/contracts/Gauge.sol#L502).

[[M-11] Griefing Attack By Extending The Reward Duration](https://github.com/code-423n4/2022-05-velodrome-findings/issues/172)

- Addressed in mainnet deploy by reverting to original implementation, [Gauge.sol:L546](https://github.com/velodrome-finance/contracts/blob/master/contracts/Gauge.sol#L546).

[[M-12] Rewards can be locked in Bribe contract because distributing them depends on base token reward amount and `Gauge.deliverBribes()` is not always called by `Voter.distribute()`](https://github.com/code-423n4/2022-05-velodrome-findings/issues/158)

- Addressed in mainnet deploy by decoupling bribe delivery from gauge reward distribution, [Voter.sol:L369](https://github.com/velodrome-finance/contracts/blob/master/contracts/Voter.sol#L369).

[[M-13] Bribe Rewards Not Collected In Current Period Will Be Lost Forever](https://github.com/code-423n4/2022-05-velodrome-findings/issues/171)

- Addressed in mainnet by reverting to an implementation more similar to Solidly’s, which does not couple gauge and bribe rewards. [ExternalBribe.sol](https://github.com/velodrome-finance/contracts/blob/master/contracts/ExternalBribe.sol).

[[M-14] Wrong reward distribution in Bribe because `deliverReward()` won't set `tokenRewardsPerEpoch[token][epochStart]` to 0](https://github.com/code-423n4/2022-05-velodrome-findings/issues/141)

- Will be addressed with an upcoming fix (will be linked here once contracts are live). In the interim, relevant parties (i.e. protocols who wish to bribe) should get in touch with our team.

[[M-15] Wrong calculation for the new `rewardRate[token]` can cause some of the late users can not get their rewards](https://github.com/code-423n4/2022-05-velodrome-findings/issues/186)

- Addressed in mainnet deploy as we reverted to a duration of 7 days instead of 5, [Gauge.sol#L535](https://github.com/velodrome-finance/contracts/blob/master/contracts/Gauge.sol#L535).

[[M-16] Wrong `DOMAIN_TYPEHASH` definition](https://github.com/code-423n4/2022-05-velodrome-findings/issues/114)

- Not addressed in mainnet deploy, but see judge’s comment.

[[M-17] WeVE (FTM) may be lost forever if redemption process is failed](https://github.com/code-423n4/2022-05-velodrome-findings/issues/90)

- Error won’t happen as long as contracts were initialized correctly (which they were in prod).
