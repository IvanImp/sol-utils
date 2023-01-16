const main = async () => {
    const utilContractFactory = await hre.ethers.getContractFactory("solUtils");
    const utilContract = await utilContractFactory.deploy();
    await utilContract.deployed();
    console.log("Util Contract deployed to: ", utilContract.address);

    const testContractFactory = await hre.ethers.getContractFactory("LibraryTest", {
        libraries: {
            solUtils: utilContract.address,
        }
    });
    const testContract = await testContractFactory.deploy();
    await testContract.deployed();
    console.log("Test Contract deployed to: ", testContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();