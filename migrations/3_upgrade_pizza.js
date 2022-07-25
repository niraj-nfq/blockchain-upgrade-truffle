const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Pizza = artifacts.require('Pizza');
const PizzaV2 = artifacts.require('PizzaV2');

module.exports = async function (deployer) {
  const existing = await Pizza.deployed();
  const instance = await upgradeProxy(existing.address, PizzaV2, { deployer });
  console.log("Upgraded", instance.address);
};
