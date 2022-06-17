const dev3 = require("dev3");

async function mintLoyalty(amount) {
    const instance = dev3.initialize("MY_API_KEY")
    const loyaltyToken = instance.getAllTokens().select("TOKEN.LOYALTY")

    try {
        loyaltyToken.requestMint(amount)
    } catch(e) {
        console.log("No permission to mint tokens")
    }
}