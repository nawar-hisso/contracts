require('dotenv').config();

const GAS_REPORTER = process.env.GAS_REPORTER || true;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || '';
const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL || '';
const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY || '';
const MUMBAI_API_KEY = process.env.MUMBAI_API_KEY || '';
const NETWORK = process.env.NETWORK || 'mumbai';
const WALLET_ADDRESS =
  process.env.WALLET_ADDRESS || '0x936E928baBc957F670BA75Daf78255BFFE3172ab';

const CONSTANTS = {
  GAS_REPORTER,
  MUMBAI_RPC_URL,
  POLYGON_RPC_URL,
  ACCOUNT_PRIVATE_KEY,
  MUMBAI_API_KEY,
  NETWORK,
  WALLET_ADDRESS,
};

exports.default = CONSTANTS;
