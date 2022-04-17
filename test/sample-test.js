const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LTigerToken", function () {
  it("Should return the new greeting once it's changed", async function () {
    const LTigerToken = await ethers.getContractFactory("LTigerToken");
    const ltiger = await LTigerToken.deploy("Hello, world!");
    await ltiger.deployed();

    expect(await ltiger.greet()).to.equal("Hello, world!");

    const setGreetingTx = await ltiger.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await ltiger.greet()).to.equal("Hola, mundo!");
  });
});
