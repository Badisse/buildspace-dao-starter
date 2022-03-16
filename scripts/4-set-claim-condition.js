import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    "0x2C7D1ba2Fc5015ceA0ADc0C03B4011E86e9c76AC",
);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        // Specify conditions.
        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 50_000,
            maxQuantityPerTransaction: 1,
        });


        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log("✅ Successfully set claim condition on bundle drop:", bundleDrop.address);
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})()