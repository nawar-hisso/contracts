require('dotenv').config();

const GAS_REPORTER = process.env.GAS_REPORTER || true;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || '';
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL || '';
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY || '';
const MUMBAI_API_KEY = process.env.MUMBAI_API_KEY || '';
const NETWORK = process.env.NETWORK || 'mumbai';
const NFT_NAME = process.env.NFT_NAME || 'Polytrade';
const NFT_SYMBOL = process.env.NFT_SYMBOL || 'TRADE';
const NFT_BASE_URI = process.env.NFT_BASE_URI || 'https://ipfs.io/ipfs/';

const CONSTANTS = {
  GAS_REPORTER,
  MUMBAI_RPC_URL,
  POLYGON_RPC_URL,
  ACCOUNT_PRIVATE_KEY,
  MUMBAI_API_KEY,
  NETWORK,
  NFT_NAME,
  NFT_SYMBOL,
  NFT_BASE_URI,
};

exports.default = CONSTANTS;
