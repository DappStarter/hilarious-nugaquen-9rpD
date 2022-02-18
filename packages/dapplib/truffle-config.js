require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile punch install deposit fox tunnel'; 
let testAccounts = [
"0x35eaafc8d2afb2c863db915f216e1cc105bdfaded12e5304729528a8019070fd",
"0xa079027ddfe64ccbdf9b58978efc6166f42ed16580a2cf280d3a0daf425a43b7",
"0x6ab1cde3448b8451e84895012f335f18239b7ad0508b4bb5510d112ce8387434",
"0x3e07174282529fd7322afa198bbe2e872dc4645733b37887bb224307f351129a",
"0xabe48305eb6f3bc1358b1256a8b651ccd500442bf2656f288c5935ce76a8531c",
"0x967eb12dce41febba779d77474e11abfa9a5c60d9c4c4cdb074ed97c53515f11",
"0x2f794ae1f5985f364ad7b6e3799a2e4433628b7944d25966b931f0bfac4b973d",
"0xbdf1512f2c90438ed97b9c8a06126158a6bae9a548d5d7cedbbcb7af1dbe2964",
"0x50faf3b1994d029fcf8baa49e528c0c4031dcf1b3addfa58cc907f261f99d477",
"0xc8e75a194e1427137242423ce90c260d01148d898e8e7f3d5f972ac23bc1bdc8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


