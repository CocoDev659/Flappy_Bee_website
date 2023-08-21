const IS_MAINNET = import.meta.env.VITE_APP_NETWORK === 'mainnet';

const CONTRACTS = IS_MAINNET
  ? {
    HUNT_TOKEN: '0x4387946A7eD6561cF3390FaaaC90c1f52b593F2E',
    STAKED_HUNT: '0xC959ae9baf8FeD9cbe286614f1b93Db89fAa4677',

  } : {
    HUNT_TOKEN: '0x3a69ce86d426A10fF2f389E3063732897F6E51Ce',
    STAKED_HUNT: '0xDc749539B44C9DF154958b5cc08CDB67C7E04dd8',
  }


const HTTP_PROVIDER_URL = IS_MAINNET ? "https://mainnet.infura.io/v3/" : "https://rinkeby.etherscan.io";

export {
  IS_MAINNET,
  CONTRACTS,
  HTTP_PROVIDER_URL
}
