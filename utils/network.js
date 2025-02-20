const { CHAIN_STAGE, CHAIN_ID, ChainStage } = require("@layerzerolabs/core-sdk")

function getEndpointId() {
    if (isLocalhost()) {
        return 30137
    }
    return CHAIN_ID[hre.network.name]
}

function isLocalhost() {
    return hre.network.name === "localhost" || hre.network.name === "hardhat"
}

function isTestnet() {
    return (
        hre.network.name === "localhost" ||
        hre.network.name === "hardhat" ||
        CHAIN_STAGE[hre.network.name] === ChainStage.TESTNET ||
        CHAIN_STAGE[hre.network.name] === ChainStage.TESTNET_SANDBOX
    )
}

module.exports = {
    getEndpointId,
    isLocalhost,
    isTestnet
};
