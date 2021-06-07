const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
//connect to ganache
//https://www.trufflesuite.com/docs/ganache/truffle-projects/linking-a-truffle-project

const mnemonic = 'begin era pole thank end old agent before insane agree rhythm transfer';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/ef9c729a5e74479e86b35c9890ec9cbc");
      },
      network_id: '4',
    },
  }
};
