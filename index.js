// Write your solution in this file!
const driver = {}

// non-destructive - returns driver w original key value pairs & new key value pair, doesn't modify original driver & returns clone with new data
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

// destructive
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value })
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  return delete newDriver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
}
