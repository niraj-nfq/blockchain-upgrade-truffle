const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Pizza = artifacts.require('Pizza');

module.exports = async function (deployer) {
  const instance = await deployProxy(Pizza, [20], { deployer, initializer: 'store' });
  console.log('Deployed', instance.address);
};