const { expect } = require('chai');

describe('Cross-Chain Dapp', function () {
  it('Should increase the counter by one everytime message is sent:', async function () {
    const amb = await ethers.getContractFactory('AMB');
    const deployedAmb = await amb.deploy();

    const counter1 = await ethers.getContractFactory('Counter');
    const deployedCounter1 = await counter1.deploy(deployedAmb.address);

    const counter2 = await ethers.getContractFactory('Counter');
    const deployedCounter2 = await counter1.deploy(deployedAmb.address);

    const tx = await deployedCounter1.sendMessage(
      'Hey! Testing',
      deployedCounter2.address
    );
    await tx.wait();
    expect(await deployedCounter2.counter()).to.equal(1);
  });
});
