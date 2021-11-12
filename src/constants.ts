export const FACTORY_ADDRESS = '0x571521f8c16f3c4eD5f2490f19187bA7A5A3CBDf'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x8648e6a9f0852d84a8a9787d749989a398cbb000270e4cd106f3dc2bc94e99ff'
export const POOL_INIT_CODE_HASH_OPTIMISM = '0x0c231002d0970d2126e7e00ce88c3b0e5ec8e48dac71478d56245c34ea2f9447'

// historical artifact due to small compiler mismatch
export const POOL_INIT_CODE_HASH_OPTIMISM_KOVAN = '0x1fc830513acbdb1608b8c18fd3cf4a4bee3329c69bb41d56400401c40fe02fd0'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 1000,
  MEDIUM = 2000,
  HIGH = 5000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 20,
  [FeeAmount.MEDIUM]: 40,
  [FeeAmount.HIGH]: 100,
}
