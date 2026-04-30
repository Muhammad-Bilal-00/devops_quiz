// scripts/test.js
console.log("========================================");
console.log("TEST STAGE: Muhammad Bilal (22F-3723)");
console.log("========================================");

const shouldFail = false; // Change to true to test pipeline failure

setTimeout(() => {
    if (shouldFail) {
        console.error("❌ Unit Tests Failed!");
        process.exit(1);
    } else {
        console.log("Running Unit Tests...");
        console.log("Running Integration Tests...");
        console.log("✅ All Tests Passed!");
        process.exit(0);
    }
}, 1500);