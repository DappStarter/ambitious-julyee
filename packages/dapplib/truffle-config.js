require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile pull install glow flock slab'; 
let testAccounts = [
"0x1e82aa26b24dc4f03f42de166afe9da70de3cab0cbfe912047ed0aa68ec57d01",
"0x0f375fb35dcf80d1cddf54f573d48815e9ff8174e68207509375b0216af9ff9d",
"0xcceb165cb17b519efc994e57814ae22730f94203afac5a496dc50971cbcb6611",
"0xdc0170e2e3db4c376af618208c9c1c4a9620bc7fb5e0e3f463088be70f03988f",
"0xdab88921e112d783fbcd171f43df2f8ffabf8fd6c0c05726c5fcabea40c244ca",
"0x45a151acf183931020c90d609b82995ae58bb4c494ec4054df4d9ec40f9e31a8",
"0xdfc2d505a9117f88a32944ea0a063dff3b3512fd349032e8e3b5e2ea9a56a727",
"0x43cc38e77651c9b4143b54512adacf8f18442aa89afe66802f27fdfc9dafc68c",
"0x4e8768a82a6bce4bc521f20f37c4ff79f2cc092d9a5f0df7b26e88853428913a",
"0xe6c0192fa5d8b75e3b63d747c48f1b2302f404ff77afecd1e0e42c26c8d11804"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
