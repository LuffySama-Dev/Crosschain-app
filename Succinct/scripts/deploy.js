const hre = require('hardhat');
const _maxWhitelistedAddresses = 10;

async function main() {
  const whiteListContract = await ethers.getContractFactory('Whitelist');
  const deployedWhiteListContract = await whiteListContract.deploy(
    _maxWhitelistedAddresses
  );
  await deployedWhiteListContract.deployed(6);
  console.log(
    `Address of the deployed contract : ${deployedWhiteListContract.address}`
  );
  console.log('Verifying contract....');
  console.log('Sleeping.....');
  await sleep(60000);
  await hre.run('verify:verify', {
    address: deployedWhiteListContract.address,
    constructorArguments: [_maxWhitelistedAddresses],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
