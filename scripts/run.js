const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["BW Monster", "Capybara", "Pixelbara"],       // Names
        ["https://lh3.googleusercontent.com/qg5ObXakZ63VqyO6q5T5nE7iHjHoRFW-dXsfYg7E_HyZpv4--yFeABQfMZPa69TkX-ArpH5sBqJhXZtmUetY4mj9s0nOdX_YHNRE8aw=w282", // Images
        "https://lh3.googleusercontent.com/GgOoKv1Qm51c-Pc67SIG65W7PIaTZLKFJjF4zl1LcqqMKhdfTIbpi5K8MCICAZJa2hKPyS0hzU1HAgpJDtFtlDz5odr4QALflPRdZNY=w282", 
        "https://lh3.googleusercontent.com/FwikWM4MDs2GfgzafjjlbGo6Hw6dn32dEDsS7VAOdHr7aiZ-VA8oTGgTOoujbE_iX4FDMu2d9cl57_8dHtDMIGBQCvlUrVdv7hx2nA=w282"],
        [100, 200, 300],                    // HP values
        [100, 50, 25]                       // Attack damage values
      );
    await gameContract.deployed();
    
    console.log("Contract deployed to: ", gameContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
}


runMain();