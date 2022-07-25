// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract PizzaV2 {
    uint256 public slices;

    // Emitted when the stored value is changes
    event ValueChanged(uint256 value);

    function store(uint256 _sliceCount) public {
        slices = _sliceCount;
        emit ValueChanged(_sliceCount);
    }

    function eatSlice() public {
        require(slices > 1, "no slices left");
        slices -= 1;
    }

    function getSlices() public view returns (uint256) {
        return slices;
    }

    function refillSlices(uint256 _sliceCount) public {
        slices += _sliceCount;
        emit ValueChanged(slices);
    }
}
