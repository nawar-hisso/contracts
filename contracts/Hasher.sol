// SPDX-License-Identifier: MIT

pragma solidity =0.8.17;

/**
@title Hasher
@dev A contract that provides hash functions using Keccak256, SHA256 and RIPEMD160 algorithms
@notice This contract provides pure functions that hash a given input term and return the hash value
@author Nawar Hisso
@notice This contract is licensed under the MIT License
*/
contract Hasher {
    /**
     * @dev Hashes the input term using the Keccak256 algorithm
     * @param term The input term to be hashed
     * @return bytes32 The hash value of the input term using Keccak256
     */
    function hashWithKeccak256(
        bytes memory term
    ) external pure returns (bytes32) {
        return keccak256(term);
    }

    /**
     * @dev Hashes the input term using the SHA256 algorithm
     * @param term The input term to be hashed
     * @return bytes32 The hash value of the input term using SHA256
     */
    function hashWithSHA256(bytes memory term) external pure returns (bytes32) {
        return sha256(term);
    }

    /**
     * @dev Hashes the input term using the RIPEMD160 algorithm
     * @param term The input term to be hashed
     * @return bytes20 The hash value of the input term using RIPEMD160
     */
    function hashWithRIPEMD160(
        bytes memory term
    ) external pure returns (bytes20) {
        return ripemd160(term);
    }
}
