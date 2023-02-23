const { task } = require('hardhat/config');
const moment = require('moment');
const fs = require('fs');
require('dotenv').config();

const { default: CONSTANTS } = require('../configs/constants.js');

task('deployHasher', 'Deploy Hasher contract').setAction(async () => {
  try {
    const contractName = 'Hasher';
    // eslint-disable-next-line no-undef
    const Contract = await ethers.getContractFactory(contractName);

    const contract = await Contract.deploy();

    await contract.deployed();
    const data = {
      address: contract.address,
      network: CONSTANTS.NETWORK,
      date: moment(new Date()).format('DD-MMM-YYYY'),
    };

    // eslint-disable-next-line no-console
    console.log(`Smart Contract address: ${data.address}`);
    fs.writeFileSync(`data/${contractName}.json`, JSON.stringify(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exitCode = 1;
  }
});
