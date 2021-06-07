// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  uint storedData;

  event UpdateValue();

  function set(uint x) public {
    storedData = x;
    emit UpdateValue();
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
