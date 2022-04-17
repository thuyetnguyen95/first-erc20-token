const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LTigerToken", function () {
  let ltiger;

  beforeEach(async function () {
    const LTigerToken = await ethers.getContractFactory("LTigerToken");
    ltiger = await LTigerToken.deploy();
    await ltiger.deployed();
  });

  describe("Get static contract info", function () {
    it("Should return the name of contract", async function () {
      expect(await ltiger.name()).to.equal("Little Tiger");
    });

    it("Should return the symbol of contract", async function () {
      expect(await ltiger.symbol()).to.equal("LT");
    });
  })
});
