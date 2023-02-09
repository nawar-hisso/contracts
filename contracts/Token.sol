// SPDX-License-Identifier: MIT
pragma solidity =0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title A simple ERC-20 token
 * @author Nawar Hisso
 * @dev This contract implements the ERC20 interface for test purposes
 */
contract Token is ERC20 {
    /**
     * @dev The name of the token
     */
    string private _name = "Nawar";

    /**
     * @dev The symbol of the token
     */
    string private _symbol = "NWR";

    /**
     * @dev The total supply of the token
     */
    uint256 private _totalSupply = 1000000 * 1 ether;

    /**
     * @dev Constructor to initialize the token with a name, symbol, and receiver address.
     * @param _receiver The address that will receive the initial supply of the token.
     */
    constructor(address _receiver) ERC20(_name, _symbol) {
        /**
         * @dev Mints an amount of tokens and sends them to a specific address.
         * @param receiver_ The address that will receive the tokens.
         * @param totalSupply_ The total amount of tokens to be minted and sent to the receiver.
         */
        _mint(_receiver, _totalSupply);
    }
}
