console.log("Running tests...");

// Simulate test result (change to false to fail pipeline)
let testPassed = true;

if (testPassed) {
    console.log("All tests passed!");
    process.exit(0);
} else {
    console.log("Test failed!");
    process.exit(1); // This will FAIL Jenkins pipeline
}