// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "./utils.sol";
import "hardhat/console.sol";

contract LibraryTest {
    constructor() {
        console.log(solUtils.add(1, 2));
    }
}