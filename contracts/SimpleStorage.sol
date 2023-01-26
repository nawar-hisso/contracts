// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.14;

contract SimpleStorage {
    // Variable to store data
    string private _data;

    // Function to write data
    function write(string memory data) public {
        _data = data;
    }

    // Function to read data
    function read() public view returns (string memory) {
        return _data;
    }
}
