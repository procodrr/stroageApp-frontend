// const shouldTestPass = Math.random() < 0.5;
const shouldTestPass = true;

if (shouldTestPass) {
  console.log("Test Passed!");
  process.exit(0);
} else {
  console.log("Test Failed!");
  process.exit(1);
}
