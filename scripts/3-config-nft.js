import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x2C7D1ba2Fc5015ceA0ADc0C03B4011E86e9c76AC",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "MyTown Soldier",
                description: "This NFT will give you access to MyTownDAO Army!",
                image: readFileSync("scripts/assets/snk.jpeg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()