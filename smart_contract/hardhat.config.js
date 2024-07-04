require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/7GtG4V3MYDBlxgnVk26bQXza5XdBmPEW',
      accounts: ['03daebc5e3ca4032087d95aa82855a93afb0ea203879475ab37343017fdea998'],
    },
  },
};
