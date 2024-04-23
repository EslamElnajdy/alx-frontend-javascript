export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    const newArray = [];

    for (const value of array) {
      newArray.push(appendString + value);
    }
  
    return newArray;
  }
}
