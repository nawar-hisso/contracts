require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

require('./tasks/deploySimpleStorage.js');
require('./tasks/deployToken.js');
require('./tasks/deployHasher.js');

const { default: CONSTANTS } = require('./configs/constants.js');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mumbai: {
      url: CONSTANTS.MUMBAI_RPC_URL,
      accounts: [`0x${CONSTANTS.ACCOUNT_PRIVATE_KEY}`],
    },
    polygon: {
      url: CONSTANTS.POLYGON_RPC_URL,
      accounts: [`0x${CONSTANTS.ACCOUNT_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: CONSTANTS.MUMBAI_API_KEY,
      polygon: CONSTANTS.MUMBAI_API_KEY,
    },
  },
  gasReporter: {
    enabled: CONSTANTS.GAS_REPORTER,
  },
};
