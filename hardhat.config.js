require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    development: {
      url: 'http://127.0.0.1:8545',
    },
    quorum: {
      url: 'http://127.0.0.1:22000',
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/a6acbc3588c3406a9cce03f6a762121f", //Infura url with projectId
      accounts: ["cd6b8f82c27b73bb8bc52273a0df249525f198adee4c50546597aff7f1d1d087"] // add the account that will deploy the contract (private key)
     },
  },
  solidity: {
    compilers: [
      { version: "0.8.5" },
      {
        version: "0.8.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        }
      }
    ]
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 20000,
  }
};
